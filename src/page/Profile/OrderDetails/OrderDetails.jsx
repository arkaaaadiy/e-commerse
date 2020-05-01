import React from 'react';
// import PropTypes from 'prop-types'
import Heading from '../../../components/Heading/Heading';
import '../../../components/OrderCard/OrderCard.sass';
import classNames from 'classnames';
import './OrderDetails.sass';
import ProductCard from '../../../components/ProductCard/ProductCard';
import Button from '../../../components/Button/Button';

const OrderDetails = (props) => {
	const { data } = props;
	const { number, date, traking, deliverStatus, products, total } = data;
	return (
		<div>
			<div className='container'>
				<Heading search>Order Details</Heading>
				<div className='order-details__header'>
					<div className='order-card__item'>
						<div className='order-card__title'>
							<h5 className='order-card__order-number'>Order №{number}</h5>
							<div className='order-card__date'>{date}</div>
						</div>
					</div>
					<div className='order-card__item'>
						<div className='order-card__title'>
							<p className='order-card__traking-number'>
								Traking number: <span className='white'>{traking}</span>
							</p>
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
				<div className='order-details__name'>3 items</div>
				<div className='order-details__items'>
					{products.map((card) => (
						<ProductCard variant='order' dataProduct={card} />
					))}
				</div>
				<div className='order-details__name'>Order information</div>
				<div className='order-details__information'>
					<div className='order-details__infoItem'>
						Shipping Address:
						<div className='white'>3 Newbridge Court ,Chino Hills, CA 91709, United States</div>
					</div>
					<div className='order-details__infoItem'>
						Payment method:
						<div className='white'>**** **** **** 3947</div>
					</div>
					<div className='order-details__infoItem'>
						Delivery method:
						<div className='white'>FedEx, 3 days, 15$</div>
					</div>
					<div className='order-details__infoItem'>
						Discount:
						<div className='white'>10%, Personal promo code</div>
					</div>
					<div className='order-details__infoItem'>
						Total Amount:
						<div className='white'>{total}$</div>
					</div>
				</div>
				<div className='order-details__btns'>
					<div className='order-details__btn'>
						<Button small primary={false} outline>
							Reorder
						</Button>
					</div>
					<div className='order-details__btn'>
						<Button small>Leave feedback</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

OrderDetails.propTypes = {};

export default OrderDetails;
