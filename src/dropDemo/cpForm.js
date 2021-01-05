/**
 * @Author zhiyuan.xu
 * @Date 2020/12/22
 * @Version 1.0.0
 * @Last Modified by zhiyuan.xu
 * @Last Modified Time 2020/12/22
 */
import React, { useEffect, useRef } from 'react';
import { Form } from 'antd'
import { getSettingData, ComMap } from '../com-setting/cpSetting';
import { doubleHandle } from '../dropDemo/util';

const cpDisPatch = (pid, value, ChangeCpFormData) => {
    ChangeCpFormData && ChangeCpFormData(pid, value)
}

// 防抖
const doubleDis = doubleHandle(cpDisPatch, 400)


const CpForm = (props) => {

   const ComData = useRef( getSettingData() )

    const [form] = Form.useForm();

    useEffect(() => {
        props.setPvFormValue(form, props.rightData.data.id)
    }, [])


    useEffect(() => {
        props.setPvFormValue(form, props.rightData.data.id)
    }, [props.rightData.data.id])

    const onValuesChange = (changedValues, allValues) => {
        const pId = props.rightData.data.id;
        doubleDis(pId, changedValues, props.ChangeCpFormData)
    }

    return <Form form={form} onValuesChange={
        onValuesChange
    }>
        {
            ComData.current.map((item, index) => {
                const Com = ComMap[item.name];
                return <Form.Item key={`${index}asd`} name={item.name} {...item.Decorator} label={item.label}>
                    <Com />
                </Form.Item>
            })
        }
    </Form>
}

export default CpForm
