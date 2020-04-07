import React from 'react'
import PropTypes from 'prop-types'
import './Tag.sass'
import classNames from 'classnames';

const Tag = props => {
    const {text, id, small, checked} = props
    return (
        <div>
            <input id={id} checked={checked} className={classNames('tag', {'tag-small': small})} type="checkbox"/>
            <label className='text' htmlFor={id}>{text}</label>            
        </div>
    )
}

Tag.propTypes = {

}

export default Tag
