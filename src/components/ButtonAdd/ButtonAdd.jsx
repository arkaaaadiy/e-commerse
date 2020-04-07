import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ButtonAdd.sass';
import classNames from 'classnames';

const ButtonAdd = props => {
	const { onClick, sub } = props;
	return (
		<>
			<button className='ButtonAdd' onClick={onClick}>
				{sub ? (
					<svg className='ButtonAdd__icon' width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<rect x='5' y='12' width='14' height='2'  />
					</svg>
				) : (
					<svg
						className='ButtonAdd__icon'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path fillRule='evenodd' clipRule='evenodd' d='M11 5V11H5V13H11V19H13V13H19V11H13V5H11Z' />
					</svg>
				)}
			</button>
		</>
	);
};

ButtonAdd.propTypes = {};

export default ButtonAdd;
