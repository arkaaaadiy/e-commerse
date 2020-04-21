import React from 'react'
import PropTypes from 'prop-types'
import ProductItem from '../ProductCard/ProductItem/ProductItem'

const MainBlock = props => {
    const {data, title, subtitle} = props
    return (
        <div className='block'>
            <div className="block__header">
                <div className='h1 block__title'>{title}</div>
                <div className='helperText block__subtitle'>{subtitle} </div>
            <div className='block__viewAll helperText'>View all</div>
            </div>
            <div className="block__productItems">
                {data.map((e, index)=> <ProductItem key={index} catalog dataProduct={e} />)}                
            </div>
        </div>
    )
}

MainBlock.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default MainBlock
