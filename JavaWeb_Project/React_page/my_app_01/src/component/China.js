import React from 'react'
import Num from './Num'


export default function China(props) {
  return (
    <div>
      <div className='header'>{props.title}</div>
      <div className='num_flexbox'>
        {
          props.data_list.map((item, index) => {
            if (index < 4) {
              return <Num key={index} {...item}></Num>
            }
          })}
      </div>
      <div id='now' className='num_flexbox'>
        {
          props.data_list.map((item, index) => {
            if (index > 3 && index < 8) {
              return <Num key={index} {...item}></Num>
            }
          })}

      </div>
      <div id='total' className='num_flexbox'>
        {
          props.data_list.map((item, index) => {
            if (index > 7) {
              return <Num key={index} {...item}></Num>
            }
          })}
      </div>
      <div className='tip'>{props.descIn}</div>
    </div>
  )
}
