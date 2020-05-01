import React from 'react'
import PropTypes from 'prop-types'
import './Avatar.sass';


const Avatar = props => {
    const {className, photo} = props
    return (
        <div className={className}>
            <div className="avatar">
                <img src={photo} alt="avatar"/>
            </div>
        </div>
    )
}

Avatar.propTypes = {
    className: PropTypes.string,
    photo: PropTypes.string.isRequired
}

export default Avatar
