import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ButtonAddToBag.sass';
import classNames from 'classnames';

const ButtonAddToBag = props => {
	const { onClick, primary } = props;
	const [activated, setActivated] = useState(false)
	const onClickBag = (e) => {
		onClick && onClick(e)
		setActivated(!activated)
	}
	return (
		<>
			<button
				className={classNames(
					'ButtonAddToBag ',					
					{ 'ButtonAddToBag-activated': activated }
				)}
				onClick={onClickBag}
			>
				<svg className={classNames('ButtonAddToBag__icon', {'ButtonAddToBag__icon-activated' : activated})} width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M18.3749 17.0484L17.3333 7.24849C17.3333 6.63237 16.856 6.13334 16.2667 6.13334H12H7.73334C7.14401 6.13334 6.66667 6.63237 6.66667 7.24849L5.62507 17.0484C5.60961 17.1248 5.60001 17.2034 5.60001 17.2849C5.60001 17.901 6.07734 18.4 6.66667 18.4H12H17.3333C17.9227 18.4 18.4 17.901 18.4 17.2849C18.4 17.2034 18.3904 17.1248 18.3749 17.0484ZM14.6667 8.86992V9.47879C14.6667 11.016 13.4704 12.2667 12 12.2667C10.5296 12.2667 9.33334 11.016 9.33334 9.47879V8.86992C9.02347 8.75506 8.80001 8.44839 8.80001 8.08485C8.80001 7.62318 9.15841 7.24849 9.60001 7.24849C10.0416 7.24849 10.4 7.62318 10.4 8.08485V9.47879C10.4 10.401 11.1179 11.1515 12 11.1515C12.8821 11.1515 13.6 10.401 13.6 9.47879V8.08485C13.6 7.62318 13.9584 7.24849 14.4 7.24849C14.8416 7.24849 15.2 7.62318 15.2 8.08485C15.2 8.44839 14.9765 8.75506 14.6667 8.86992Z'
						
					/>
				</svg>
			</button>
		</>
	);
};

ButtonAddToBag.propTypes = {};

export default ButtonAddToBag;
