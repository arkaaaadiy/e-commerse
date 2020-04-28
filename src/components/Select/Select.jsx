import React, { Children } from 'react'
import PropTypes from 'prop-types'
import './Select.sass'
import iconDropDown from '../../assets/icon/dropdown.svg'
import classNames from 'classnames';
import { useState } from 'react';
import SelectUp from '../../components/SeletUp/SelectUp';
import SlideDown from '../../components/SlideDown/SlideDown';
import Tag from '../../components/Tag/Tag';
import Info from '../Info/Info';
import Button from '../Button/Button';

const Select = props => {
    const { title, error, className, children} = props

    const [isShow, setShow] = useState(false)
    const onClickHandler = () => {
        setShow(!isShow)
    }    

    return (
        <>
        <div className={className} onClick={onClickHandler}>
            <div className={classNames('select', {'select-error': error})}>
                <span className='descriptiveItems'>{title}</span>
                <div >
                <img src={iconDropDown} className='dropdown' alt="icon dropdown" />
                    </div>                                                                                                                      
            </div>            
        </div>
        <SlideDown isShow={isShow} onShow={onClickHandler} >
            {children}
        </SlideDown>
        {/* <SlideDown btn={btn} head={title} isShow={isShow} onShow={onClickHandler} options={options} /> */}
        {/* <SelectUp btn={btn} head={title} isShow={isShow} onShow={onClickHandler} options={options}/> */}
        </>
    )
} 

Select.propTypes = { 

}

export default Select
