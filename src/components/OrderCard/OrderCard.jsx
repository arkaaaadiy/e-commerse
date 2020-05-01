import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button/Button';
import './OrderCard.sass';

const OrderCard = (props) => {
	return (
		<div className='order-card'>
			<div className='order-card__item'>
				<div className='order-card__title'>
					<h5 className='order-card__order-number'>Order №1947034</h5>
					<div className='order-card__date'>05-12-2019</div>
				</div>
			</div>
			<div className='order-card__item'>
				<p className='order-card__traking-number'>
					Traking number: <span className='white'>IW3475453455</span>
				</p>
				<div className='order-card__quantity-total'>
					<div className='order-card__quantity'>
						Quantity: <span className='white'>3</span>
					</div>
					<div className='order-card__total'>
						Total Amount: <span className='white'>112$</span>
					</div>
				</div>
			</div>
			<div className='order-card__item'>
				<div className='order-card__bottom'>
					<div className='order-card__btn'>
						<Button small outline primary={false}>
							Details
						</Button>
					</div>
					<div className='order-card__deliver'>Delivered</div>
				</div>
			</div>
		</div>
	);
};

OrderCard.propTypes = {};

export default OrderCard;
