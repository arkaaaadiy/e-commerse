import React from 'react';
import PropTypes from 'prop-types';
import './ProductBag.sass';
import ButtonAdd from '../../ButtonAdd/ButtonAdd';
import { useState } from 'react';

const ProductBag = props => {
	const { data } = props;
	const { name, color, size, price } = data;
	const [quantity, setQantity] = useState(1);

	const chengeQuantity = operation => {
		if (operation === '+') {
			setQantity(quantity + 1);
		} else {
			if (quantity > 1) {
				setQantity(quantity - 1);
			}
		}
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
						<ButtonAdd sub onClick={() => chengeQuantity('-')} />
						<span className='card__quantityNumber'>{quantity}</span>
						<ButtonAdd onClick={() => chengeQuantity('+')} />
					</div>
					<div className='card__price'>{price}$</div>
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
