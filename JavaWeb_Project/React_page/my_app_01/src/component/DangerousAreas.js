import React from 'react'

export default function DangerousAreas(props) {
    return (
        <div className='dangerousarea'>
            <div>高风险地区<span>{props.highLevelNum}</span>个，中风险地区<span>{props.midLevelNum}</span>个</div>
            {
                props.subList.map((item, index) => 
                    <div key={index} className="dangerousarea_item">
                        <div className='dangerousareaTag'>{item.level}</div>
                        <div className='dangerousareaText'>{item.area}</div>
                        {item.isNew === 1 && <div className='dangerousareaNew'>新</div>}
                    </div>
                )
            }
        </div>
    )
}
