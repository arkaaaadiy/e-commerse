import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.sass';

const SearchBar = props => {
    const {
        value,
        onChange
    } = props
	return (
		<div className='search'>
			<input type='text' value={value} onChange={onChange} className='searchBar' placeholder='Search' />
			<div className='searchBar__icon'>
				<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M13.7431 12.5741L9.91009 8.73956C10.5972 7.80246 10.9652 6.66953 10.9601 5.50756C10.947 2.47441 8.49372 0.0175744 5.46059 5.57178e-05C4.00907 -0.00651157 2.61522 0.567712 1.58953 1.59481C0.563845 2.6219 -0.00846493 4.01655 9.46502e-05 5.46806C0.0132044 8.50148 2.4667 10.9585 5.50009 10.9761C6.6668 10.9811 7.80387 10.6088 8.74159 9.91456L8.74559 9.91156L12.5751 13.7431C12.7821 13.9603 13.0907 14.0482 13.3811 13.9728C13.6716 13.8973 13.8983 13.6704 13.9735 13.3799C14.0487 13.0894 13.9605 12.7809 13.7431 12.5741ZM5.49609 9.87806C3.06951 9.8641 1.10675 7.89866 1.09609 5.47206C1.08955 4.311 1.54743 3.19551 2.36783 2.37389C3.18822 1.55228 4.30303 1.09273 5.46409 1.09756C7.89068 1.11151 9.85344 3.07695 9.86409 5.50356C9.87064 6.66461 9.41276 7.78011 8.59236 8.60172C7.77197 9.42333 6.65716 9.88288 5.49609 9.87806Z'
						fill='#8E8E93'
					/>
				</svg>
			</div>
		</div>
	);
};

SearchBar.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default SearchBar;
