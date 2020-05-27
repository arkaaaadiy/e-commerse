import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Range.sass';

const Range = props => {
	const { min, max, className } = props;
	const [minV, setminV] = useState(min);
	const [maxV, setmaxV] = useState(max);
	const changeminV = e => {
		const value = e.target.value;
		setminV(Math.min(value, maxV - max*4/100));
	};
	const changemaxV = e => {
		const value = e.target.value;
		setmaxV(Math.max(value, minV + max*4/100));
	};
	const leftStyle = {
		left: ((minV - min) / (max - min)) * 100 + '%'
	};
	const rightStyle = {
		right: 100 - ((maxV - min) / (max - min)) * 100 + '%'
	};
	const rangeStyle = {
		left: ((minV - min) / (max - min)) * 100 + '%',
		right: 100 - ((maxV - min) / (max - min)) * 100 + '%'
	};
	return (
		<div className={className}>
			<div className='slider-root'>
			<span className='slider__cost slider__cost-left'>${minV}</span>
			<span className='slider__cost slider__cost-right'>${maxV}</span>
			<input type='range' id='input-left' onChange={changeminV} min={min} max={max} value={minV}></input>
			<input type='range' id='input-right' min={min} max={max} onChange={changemaxV} value={maxV}></input>
			<div className='slider'>
				<div className='slider__range' style={rangeStyle}></div>
				<div className='thumb thumb-left' style={leftStyle}></div>
				<div className='thumb thumb-right' style={rightStyle}></div>
			</div>
		</div>
		</div>
	);
};

Range.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number,
	className: PropTypes.string,
};

export default Range;
