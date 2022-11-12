import React, { useState } from 'react'
import ProvinceItem from './ProvinceItem';

export default function Province(props) {

    const [show, setShow] = useState(false);
    return (
        <div>
            <div className='header'>国内各地区疫情统计汇总</div>
            <div className="tip">7:00-10:00为更新高峰，数据若滞后敬请谅解</div>
            <div id='province_header' className='province_flexbox'>
                <div className='province_flexitem_name'>省市地区</div>
                <div className='province_flexitem_num'>新增确诊</div>
                <div className='province_flexitem_num'>新增无症状</div>
                <div className='province_flexitem_num'>累计确诊</div>
                <div className='province_flexitem_num'>风险区域</div>
            </div>
            {show ? props.caseList.sort((a, b) => { return b.confirmedRelative - a.confirmedRelative; }).map((item, index) =>
                <ProvinceItem key={index} {...item}></ProvinceItem>) : props.caseList.sort((a, b) => { return b.confirmedRelative - a.confirmedRelative; }).slice(0, 19).map((item, index) =>
                    <ProvinceItem key={index} {...item}></ProvinceItem>
                )}

            <div className='clickshow' onClick={() => { setShow(!show) }} >{show ? "收起" : "展开全部"}</div>
        </div>
    )
}
