import React from 'react'
import PropTypes from 'prop-types'
import './Label.sass'
import classNames from 'classnames';

const Labels = props => {
    const { discont, children } = props
    return (
        <div>
            <span className={classNames('label', {'label-hot': discont},)}>{children}</span>
        </div>
    )
}

Labels.propTypes = {
    discont: PropTypes.bool,
    children: PropTypes.any
}

export default Labels
