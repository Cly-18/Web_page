import React from 'react'

export default function ProvinceCity(props) {
    return (
        <div>
            {props.subList.map((item, index) =>
                <div key={index} className='provincecity_flexbox provincecity_item' >
                    <div className='provincecity_flexitem_name'>
                        {item.city}
                    </div>
                    <div className='provincecity_flexitem_num'>{item.confirmedRelative}</div>
                    <div className='provincecity_flexitem_num'>{item.asymptomaticRelative}</div>
                    <div className='provincecity_flexitem_num'>{item.confirmed}</div>

                    {item.dangerousAreas.totalNum > 0 ? <div className='provincecity_flexitem_num' style={{ color: "red" }}>{item.dangerousAreas.totalNum}</div> :
                        <div className='provincecity_flexitem_num' >{item.dangerousAreas.totalNum}</div>
                    }
                </div>
            )}

        </div>
    )
}
