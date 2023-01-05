import React, { useState } from 'react'
import styles from '../styles/Home.module.css'

function Li(props:any) {
    const [isDone, SetisDone] = useState(false)

    function handleClick() {
        SetisDone((prevalue)=>{
            return !prevalue
        })

    }
  return (
    <div onClick={handleClick} >
    <li style={{textDecoration: isDone ? "line-through" : "none", textAlign:"left", fontSize:"2rem"}}   >{props.text}</li>
    </div>
  )
}

export default Li