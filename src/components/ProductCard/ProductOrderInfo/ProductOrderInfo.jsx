import React from 'react'
import './ProductOrderInfo.sass'

const ProductOrderInfo = (props) => {
    const { data } = props;
    const { name, price, brand, color, size, units = '1' } = data;	
    
    return (
        <div>
            <div className='card__info'>
				<div className='card__name subheads'>{name}</div>
				<div className="card__brand">
                    {brand}    
                </div>
                <div className='card__sizeColor'>
					<div className='card__item'>
						Color: <span className='colorWhite'>{color}</span>
					</div>
					<div className='card__item'>
						Size: <span className='colorWhite'>{size}</span>
					</div>
				</div>
                <div className='card__quantityPrice'>
					<div className="card__text">
                        Untis: {units}
                    </div>
					<div className='card__price'>{price}$</div>
				</div>
			</div>
        </div>
    )
}

export default ProductOrderInfo
