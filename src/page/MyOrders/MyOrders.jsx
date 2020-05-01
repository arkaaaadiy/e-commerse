import React from 'react';
import PropTypes from 'prop-types';
import './MyOrders.sass';
import Heading from '../../components/Heading/Heading';
import Tag from '../../components/Tag/Tag';
import OrderCard from '../../components/OrderCard/OrderCard';

const MyOrders = (props) => {
	return (
		<div>
			<div className='container'>
				<Heading>My Orders</Heading>
				<div className='orders__tags'>
					<Tag id='Delivered' small checked>
						Delivered
					</Tag>
					<Tag id='Processing' small>
						Processing
					</Tag>
					<Tag id='Cancelled' small>
						Cancelled
					</Tag>
				</div>
				<div className='orders__items'>
					<OrderCard />
					<OrderCard />
					<OrderCard />
				</div>
			</div>
		</div>
	);
};

MyOrders.propTypes = {};

export default MyOrders;
