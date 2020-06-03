import React from 'react'
import PropTypes from 'prop-types'
import './ProductCard.sass'
import ProductBag from './ProductBag/ProductBag'
import ProductCatalog from '../ProductCatalog/ProductCatalog'
import ProductOrderInfo from './ProductOrderInfo/ProductOrderInfo'

const ProductCard = props => {
    const {variant = 'bag', dataProduct, ...rest} = props
    return (
        <div className='product-card'>
            <div className="product-card__img"> 
                <img src={dataProduct.photo} alt="main img card"/>
            </div>
            <div className="product-card__body">
               {variant === 'bag' && <ProductBag {...rest} dataProduct={dataProduct} /> } 
               {variant === 'category' && <ProductCatalog  dataProduct={dataProduct} /> } 
               {variant === 'order' && <ProductOrderInfo dataProduct={dataProduct} /> } 
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    variant: PropTypes.string,
    dataProduct: PropTypes.object
}

export default React.memo(ProductCard)
