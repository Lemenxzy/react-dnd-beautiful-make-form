/**
 * @Author zhiyuan.xu
 * @Date 2020/12/22
 * @Version 1.0.0
 * @Last Modified by zhiyuan.xu
 * @Last Modified Time 2020/12/22
 */
import React, {useEffect, useRef} from 'react';
import { Form } from 'antd'
import { getCpvSettingData, ComMap } from '../com-setting/cpvSetting';
import {doubleHandle} from "./util";

const cpvDisPatch = (pid, vid, value, ChangeCpvFormData) => {
    ChangeCpvFormData && ChangeCpvFormData(pid, vid, value)
}

// 防抖
const doubleDis = doubleHandle(cpvDisPatch, 400)

const CpvForm = (props) => {

    const CpvSettingData =  useRef(getCpvSettingData());
    const [form] = Form.useForm();

    useEffect(() => {
       props.setCpvFormValue(form, props.rightData.pId, props.rightData.data.id)
    }, [])

    useEffect(() => {
        props.setCpvFormValue(form, props.rightData.pId, props.rightData.data.id)
    }, [props.rightData.data.id])

    const onValuesChange = (changedValues) => {
        const rightData = props.rightData;
        const pId = rightData.pId;
        const vId = rightData.data.id;
        doubleDis(pId, vId, changedValues, props.ChangeCpvFormData)
    };


    return <Form className={'form'} form={form} onValuesChange={
        onValuesChange
    }>
        {
            CpvSettingData.current.map((item, index) => {
                const Com = ComMap[item.name];
                return <Form.Item key={`211as${index}`} name={item.name}
                                  label={ item.label } {...item.Decorator} className={'form-item'}
                >
                    <Com />
                </Form.Item>
            })
        }
    </Form>
}


export default CpvForm;
