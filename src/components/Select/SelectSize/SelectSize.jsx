import React from 'react'
import PropTypes from 'prop-types'
import Info from '../../Info/Info'
import Button from '../../Button/Button'
import Tag from '../../Tag/Tag'

const SelectSize = props => {
    const {btn, options} = props
    return (
        <div>            
            <div className='select-size__head h3'>Select size</div>
			<div className='select-size__body'>
				{options.map((e) => (
					<Tag key={e.name} id={e.name}>
						{e.name}
					</Tag>
				))}{' '}
			</div>
            <div className="select-size__info">
                
			<Info>Size info</Info>			
            </div>
			{btn && <div className='select-size__btn'>
				<Button primary>{btn.toUpperCase()}</Button>
			</div>}  
        </div>
    )
}

SelectSize.propTypes = {

}

export default SelectSize
