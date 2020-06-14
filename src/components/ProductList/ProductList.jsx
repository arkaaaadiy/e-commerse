import React from 'react';
import PropTypes from 'prop-types';
import './ProductList.sass';
import Rating from '../Rating/Rating';
import ButtonAddToBag from '../ButtonAddToBag/ButtonAddToBag';
import Labels from '../Label/Label';
import ButtonLike from '../ButtonLike/ButtonLike';

const ProductList = (props) => {
	const { dataProduct, className, catalog, onClick } = props;
	const { name, brand, color, size, price, rating, discont, newItem, voises, soldOut, photo } = dataProduct;

	const onClickInner = () => {
		onClick(dataProduct)
	}

	return (
		<div className={className}>
			<div className='product-list'>
				{soldOut && <div className='disablecard'></div>}
				{soldOut && <div className='soldout'>Sorry, this item currently sold out</div>}
				<div className='product-list__img'>
					<img src={photo} alt='main img card' />
				</div>
				<div className='product-list__saleAtribut'>
					{newItem && <Labels>NEW</Labels>}
					{discont > 0 && <Labels discont={true}>-{discont}%</Labels>}
				</div>
				<div className='product-list__body'>
					<div className='product-list__wrapper'>
						<div className='product-list__brand'>{brand}</div>
						<div className='product-list__name subheads'>{name}</div>
						{!catalog && <div className='product-list__sizeColor'>
							<div className='product-list__item'>
								Color: <span className='colorWhite'>{color}</span>
							</div>
							<div className='product-list__item'>
								Size: <span className='colorWhite'>{size}</span>
							</div>
						</div>}
						<div className='product-list__priceRating'>
							{discont > 0 ? (
								<div className='product-list__price descriptiveItems'>
									<strike>{price}$</strike>
									<span className='discontPrice'>{Math.round(price - (price * discont) / 100)}$</span>
								</div>
							) : (
								<div className='product-list__price descriptiveItems'>{price}$</div>
							)}
							<div className='product-list__rating'>
								<Rating stars={rating} voises={voises} />
							</div>
						</div>
						{!catalog && (
							<div className='product-list__close'>
								<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										opacity='0.54'
										fillRule='evenodd'
										clipRule='evenodd'
										d='M18 7.2L16.8 6L12 10.8L7.2 6L6 7.2L10.8 12L6 16.8L7.2 18L12 13.2L16.8 18L18 16.8L13.2 12L18 7.2Z'
										fill='#ABB4BD'
									/>
								</svg>
							</div>
						)}
						{!soldOut && !catalog && (
							<div className='product-list__btnbag'>
								<ButtonAddToBag />
							</div>
						)}
						{catalog && (
							<div onClick={onClickInner} className='product-list__btnbag product-list__btnbag-catalog'>
								<ButtonLike />
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

ProductList.propTypes = {
	dataProduct: PropTypes.object,
};

export default ProductList;
