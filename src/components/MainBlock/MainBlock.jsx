import React from 'react'
import PropTypes from 'prop-types'
import ProductItem from '../ProductCard/ProductItem/ProductItem'
import './MainBlock.sass'

const MainBlock = props => {
    const {data, title, subtitle, also} = props
    return (
        <div className='block'>
            <div className="block__header">
                {also ? <h3>{title}</h3> : <div className='h1 block__title'>{title}</div>}
                
                {subtitle && <div className='helperText block__subtitle'>{subtitle} </div>}
                {also ? <div className="block__items">{data.length} items</div>: <div className='block__viewAll helperText'>View all</div>}
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
