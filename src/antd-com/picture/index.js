/**
 * @Author zhiyuan.xu
 * @Date 2020/12/23
 * @Version 1.0.0
 * @Last Modified by zhiyuan.xu
 * @Last Modified Time 2020/12/23
 */

import { Icon } from 'antd';

const Picture = () => {
    return <div>

    </div>
}

export const ViewPicture = () => {
    return <div className={'pic-wrap'}>
        <Icon type="file-image" className={'pic-file-image'} />
        <p className={'pic-title'}>image.png</p>
    </div>
}

export default Picture;
