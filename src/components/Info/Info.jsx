import React from 'react';
import PropTypes from 'prop-types';
import './info.sass';

const Info = props => {
    const {children} = props
	return (
		<div className='info'>
            
			<div className='info__label text'>{children}</div>
			<svg className='info__link' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M5.72668 11.06L8.78002 8L5.72668 4.94L6.66668 4L10.6667 8L6.66668 12L5.72668 11.06Z'
					fill='#F7F7F7'
				/>
			</svg>
		</div>
	);
};

Info.propTypes = {};

export default Info;
