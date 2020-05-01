import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button/Button';
import './OrderCard.sass';
import classNames from 'classnames';

const OrderCard = (props) => {
	const { data } = props;
	const { number, date, traking, quantity, total, deliverStatus } = data;
	return (
		<div className='order-card'>
			<div className='order-card__item'>
				<div className='order-card__title'>
					<h5 className='order-card__order-number'>Order №{number}</h5>
					<div className='order-card__date'>{date}</div>
				</div>
			</div>
			<div className='order-card__item'>
				<p className='order-card__traking-number'>
					Traking number: <span className='white'>{traking}</span>
				</p>
				<div className='order-card__quantity-total'>
					<div className='order-card__quantity'>
						Quantity: <span className='white'>{quantity}</span>
					</div>
					<div className='order-card__total'>
						Total Amount: <span className='white'>{total}$</span>
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
					<div
						className={classNames('order-card__deliver', {
							'order-card__deliver-delivered': deliverStatus === 'Delivered',
							'order-card__deliver-processing': deliverStatus === 'Processing',
							'order-card__deliver-cancelled': deliverStatus === 'Cancelled',
						})}
					>
						{deliverStatus}
					</div>
				</div>
			</div>
		</div>
	);
};

OrderCard.propTypes = {};

export default OrderCard;
