import React from 'react'

export default function Num(props) {
    return (
        <div className='num_flexitem'>
            <div>{props.total_desc}</div>
            <div className='numfont' style={{ color: props.text_color }}>{props.total_num}</div>
            {props.change_desc &&
                <div className='tip'>
                   { props.change_desc}
                    <span style={{color:props.text_color}}>
                        {props.change_num}
                    </span>
                </div>
            }
        </div>
    )
}
