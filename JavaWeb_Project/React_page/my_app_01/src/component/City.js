import React, { useState } from 'react'
import CityItem from './CityItem'

export default function City(props) {

    const [show, setShow] = useState(false);
    return (
        <div>
            <div className='header'>疫情速报</div>
            <div className="tip">该数据为31省（自治区、直辖市）本土新增，及港澳台新增确诊数据</div>
            <div id='city_header' className='city_flexbox'>
                <div className='city_flexitem_name'>地区</div>
                <div className='city_flexitem_num'>新增本土</div>
                <div className='city_flexitem_num'>新增本土无症状</div>
                <div className='city_flexitem_num'>风险区域</div>
            </div>
            {show ? props.list.map((item, index) =>
                <CityItem key={index} {...item}></CityItem>):props.list.slice(0,9).map((item, index) =>
                <CityItem key={index} {...item}></CityItem>
            )}

            <div className='clickshow' onClick={()=>{setShow(!show)}} >{show?"收起":"展开全部"}</div>
        </div>
    )
}
