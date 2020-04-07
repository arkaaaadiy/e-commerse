import React from 'react'
import PropTypes from 'prop-types'
import './Checkbox.sass'
import classNames from 'classnames';

const Checkbox = props => {
    const {text, id, primary} = props
    return (
        <div>
            <input id={id} className={classNames('checkbox', {'checkbox-primary': primary})} type="checkbox"/>
            <label htmlFor={id}></label>
            {text && <span className='checkbox__text'>{text}</span>}
        </div>
    )
}

Checkbox.propTypes = {

}

export default Checkbox
