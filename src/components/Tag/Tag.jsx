import React from 'react'
import PropTypes from 'prop-types'
import './Tag.sass'
import classNames from 'classnames';

const Tag = props => {
    const {children, id, small, checked,size} = props
    return (
        <div>
            <input id={id} checked={checked} className={classNames('tag', {'tag-small': small}, {'tag-size': size})} type="checkbox"/>
            <label className='descriptiveItems' htmlFor={id}>{children}</label>            
        </div>
    )
}

Tag.propTypes = {

}

export default Tag
