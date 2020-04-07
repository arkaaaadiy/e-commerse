import React from 'react'
import classNames from 'classnames';
import { useState } from 'react';


const ColorItem = (props) => {
    const {color} = props
    const [active, setActive] = useState(false)
    return (
        <div onClick={(e) => {setActive(!active)}} className='color-item'>
            <div key={color} className={classNames('color-circle',{'color-active': active})}><div style={{backgroundColor: color}} className="color"></div> </div>
        </div>
    )
}

export default ColorItem
