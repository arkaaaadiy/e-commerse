import React from 'react';
import PropTypes from 'prop-types';
import './ProductBag.sass';
import ButtonAdd from '../../ButtonAdd/ButtonAdd';

const ProductBag = props => {
	const { dataProduct, subCount, addCount } = props;
	const { name, color, size, price, count, id } = dataProduct;	

	const chengeCount = (e) => {
		const btn = e.currentTarget
		btn.classList.contains('add') ? addCount(id) : count > 1 && subCount(id)		
	};

	return (
		<div>
			<div className='card__info'>
				<div className='card__name subheads'>{name}</div>
				<div className='card__sizeColor'>
					<div className='card__item'>
						Color: <span className='colorWhite'>{color}</span>
					</div>
					<div className='card__item'>
						Size: <span className='colorWhite'>{size}</span>
					</div>
				</div>
				<div className='card__quantityPrice'>
					<div className='card__quantity'>
						<ButtonAdd sub onClick={chengeCount} />
						<span className='card__quantityNumber'>{count}</span>
						<ButtonAdd onClick={chengeCount} />
					</div>
					<div className='card__price'>{price*count}$</div>
				</div>
			</div>
		</div>
	);
};

ProductBag.propTypes = {
	name: PropTypes.string,
	color: PropTypes.string,
	size: PropTypes.string,
	quantity: PropTypes.string,
	price: PropTypes.string
};

export default ProductBag;
