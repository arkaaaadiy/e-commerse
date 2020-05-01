import React from 'react';
import PropTypes from 'prop-types';
import './MyOrders.sass';
import Heading from '../../../components/Heading/Heading';
import Tag from '../../../components/Tag/Tag';
import OrderCard from '../../../components/OrderCard/OrderCard';

const MyOrders = (props) => {
    const data = {
        number: '1947034', 
        date: '05-12-2019', 
        traking: 'IW3475453455', 
        quantity: '3', 
        total: '112', 
        deliverStatus: 'Processing'
    }
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
					<OrderCard data={data} />
					<OrderCard data={data} />
					<OrderCard data={data} />
				</div>
			</div>
		</div>
	);
};

MyOrders.propTypes = {};

export default MyOrders;
