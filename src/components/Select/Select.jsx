import React from 'react'
import PropTypes from 'prop-types'
import './Select.sass'
import iconDropDown from '../../assets/icon/dropdown.svg'
import classNames from 'classnames';
import { useState } from 'react';
import SelectUp from '../../components/SeletUp/SelectUp';

const Select = props => {
    const {options, title, error, className} = props
    const [isShow, setShow] = useState(false)
    const onClickHandler = () => {
        setShow(!isShow)
    }
    return (
        <>
        <div className={className} onClick={onClickHandler}>
            <div className={classNames('select', {'select-error': error})}>
                <span>{title}</span>
                <div >
                <img src={iconDropDown} className='dropdown' alt="icon dropdown" />
                    </div>                                                                                                                      
            </div>            
        </div>
        <SelectUp head={title} isShow={isShow} onShow={onClickHandler} options={options}/>
        </>
    )
} 

Select.propTypes = { 

}

export default Select
