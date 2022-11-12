import React, { useState } from 'react'
import ProvinceCity from './ProvinceCity'


export default function ProvinceItem(props) {
    const [show, setShow] = useState(false);
    return (
        <div>
            <div className='province_flexbox province_item' onClick={() => {setShow(!show) }}>
                <div className='province_flexitem_name'>
                    {props.area}
                </div>
                <div className='province_flexitem_num'>{props.confirmedRelative}</div>
                <div className='province_flexitem_num'>{props.asymptomaticRelative || "-"}</div>
                <div className='province_flexitem_num'>{props.confirmed}</div>
                {props.dangerousAreas.totalNum> 0 ? <div className='province_flexitem_num'  style={{color:"red"}}>{props.dangerousAreas.totalNum}</div> :
                    <div className='province_flexitem_num' >{props.dangerousAreas.totalNum}</div>
                }
            </div>
            {props.subList.length > 0 && show && <ProvinceCity {...props}></ProvinceCity>}

        </div>
    )

}
