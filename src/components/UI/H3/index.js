import React from 'react'
import h3css from './h3.module.css'
import { Col,Typography } from 'antd'
const {Text} = Typography;
export default function H3({heading='' }) {
  return (
    <>
                             
                                    <div className={`${h3css.headingh3}`} >
                                       <h3 className={`${h3css.headingh3}`}>{heading}</h3>
                                    </div>
                         
    </>
  )
}
