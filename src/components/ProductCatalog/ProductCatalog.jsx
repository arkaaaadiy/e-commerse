import React from 'react';
import PropTypes from 'prop-types';
import './ProductCatalog.sass';
import ButtonLike from '../ButtonLike/ButtonLike';
import Rating from '../Rating/Rating';

const ProductCatalog = (props) => {
	const { dataProduct } = props;
	const { name, price, brand } = dataProduct;

	return (
		<div>
			<div className='card__info'>
				<div className='card__name subheads'>{name}</div>
				<div className='card__brand'>{brand}</div>
				<div className='card__rating'>
					<Rating stars='4' voises='3' />
				</div>
				<div className='card__price'>{price}$</div>
				<div className='card__btnLike'>
					<ButtonLike />
				</div>
			</div>
		</div>
	);
};

ProductCatalog.propTypes = {
	name: PropTypes.string,
	color: PropTypes.string,
	size: PropTypes.string,
	quantity: PropTypes.string,
	price: PropTypes.string,
};

export default ProductCatalog;
