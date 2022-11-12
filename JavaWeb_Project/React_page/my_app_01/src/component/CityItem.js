import React, { useState } from 'react'
import DangerousAreas from './DangerousAreas'

export default function CityItem(props) {
    const [show, setShow] = useState(false);
    return (
        <div>
            <div className='city_flexbox city_item' onClick={() => { setShow(!show) }}>
                <div className='city_flexitem_name'>
                    {props.area}
                    {props.area === props.province ||
                        <span className='provinceTag'>{props.province}</span>
                    }</div>
                <div className='city_flexitem_num'>{props.nativeRelative}</div>
                <div className='city_flexitem_num'>{props.asymptomaticLocalRelative || "-"}</div>
                {props.dangerousAreas.totalNum > 0 ? <div className='city_flexitem_num' style={{ color: "red" }}>{props.dangerousAreas.totalNum}</div> :
                    <div className='city_flexitem_num' >{props.dangerousAreas.totalNum}</div>
                }
            </div>
            {props.dangerousAreas.subList.length > 0 && show && <DangerousAreas {...props.dangerousAreas}></DangerousAreas>}

        </div>

    )
}
