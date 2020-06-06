import React from 'react';
import PropTypes from 'prop-types';
import './ProductItem.sass';
import Rating from '../Rating/Rating';
import ButtonAddToBag from '../ButtonAddToBag/ButtonAddToBag';
import Labels from '../Label/Label';
import ButtonLike from '../ButtonLike/ButtonLike';
import classnames from 'classnames';

const ProductItem = (props) => {
	const { dataProduct, main, catalog, onClick } = props;
	const { name, brand, color, size, price, rating, discont, newItem, voises, soldOut, photo } = dataProduct;
	return (
		<div className='product-item'>
			{soldOut && <div className='disablecard'></div>}
			{soldOut && <div className='soldout'>Sorry, this item currently sold out</div>}
			<div className='product-item__img'>
				<img src={photo} alt='main img card' />
			</div>
			<div className='product-item__saleAtribut'>
				{newItem && <Labels>NEW</Labels>}
				{discont > 0 && <Labels discont={true}>-{discont}%</Labels>}
			</div>
			<div className='product-item__body'>
				<div className='product-item__rating-big pb5'>
					<Rating stars={rating} voises={voises} />
				</div>
				<div className='product-item__brand pb4'>{brand}</div>
				<div className='product-item__name subheads pb5'>{name}</div>
				{!catalog && (
					<div className='product-item__sizeColor pb5'>
						<div className='product-item__item'>
							Color: <span className='colorWhite'>{color}</span>
						</div>
						<div className='product-item__item'>
							Size: <span className='colorWhite'>{size}</span>
						</div>
					</div>
				)}

				<div className='product-item__priceRating'>
					{discont ? (
						<div className='product-item__price descriptiveItems'>
							<strike>{price}$</strike>
							<span className='discontPrice'>{Math.round(price - (price * discont) / 100)}$</span>
						</div>
					) : (
						<div className='product-item__price descriptiveItems'>{price}$</div>
					)}
					<div className='product-item__rating-small'>
						<Rating stars={rating} voises={voises} />
					</div>
				</div>
				{!catalog && <div className='product-item__close'>
					<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							opacity='0.54'
							fillRule='evenodd'
							clipRule='evenodd'
							d='M18 7.2L16.8 6L12 10.8L7.2 6L6 7.2L10.8 12L6 16.8L7.2 18L12 13.2L16.8 18L18 16.8L13.2 12L18 7.2Z'
							fill='#ABB4BD'
						/>
					</svg>
				</div>}
				{!soldOut && !catalog && (
					<div className='product-item__btnbag'>
						<ButtonAddToBag />
					</div>
				)}
                {catalog && <div onClick={onClick} className={classnames('product-item__btnbag product-item__btnbag-catalog', {'product-item__btnbag-main': main})} >
						<ButtonLike />
					</div>}
			</div>
		</div>
	);
};

ProductItem.propTypes = {
	dataProduct: PropTypes.object,
	catalog: PropTypes.bool
};

export default ProductItem;
