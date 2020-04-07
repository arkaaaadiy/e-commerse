import React from 'react'
import PropTypes from 'prop-types'
import './Colors.sass'
import ColorItem from '../ColorItem/ColorItem'


const Colors = props => {
    const {colors} = props    
    
    return (
        <div className='containerColor'>
            {colors.map(c => <ColorItem color={c.color}/>)}
        </div>
    )
}

Colors.propTypes = {
    colors: PropTypes.array
}

export default Colors
