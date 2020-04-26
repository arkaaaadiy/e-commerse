import React from 'react'
import PropTypes from 'prop-types'
import './ProductCard.sass'
import ProductBag from './ProductBag/ProductBag'
import ProductCatalog from './ProductCatalog/ProductCatalog'
import ProductOrderInfo from './ProductOrderInfo/ProductOrderInfo'

const ProductCard = props => {
    const {variant = 'bag', dataProduct} = props
    return (
        <div className='product-card'>
            <div className="product-card__img"> 
                <img src={dataProduct.photo} alt="main img card"/>
            </div>
            <div className="product-card__body">
               {variant === 'bag' && <ProductBag data={dataProduct} /> } 
               {variant === 'category' && <ProductCatalog  data={dataProduct} /> } 
               {variant === 'order' && <ProductOrderInfo data={dataProduct} /> } 
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    variant: PropTypes.string,
    dataProduct: PropTypes.object
}

export default ProductCard
