import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.sass';
import classNames from 'classnames';

const Checkbox = (props) => {
	const { text, id, primary, value, onChangeValue, readOnly, className } = props;
	return (
		<div className={className} readOnly={readOnly}>
			<input
				id={id}
				checked={value}
				onChange={onChangeValue}
				readOnly={readOnly}
				className={classNames('checkbox', { 'checkbox-primary': primary })}
				type='checkbox'
			/>
            
			<label id={id} htmlFor={id}></label>
			{text && <span className='checkbox__text'>{text}</span>}
		</div>
	);
};

Checkbox.propTypes = {
	text: PropTypes.string,
	id: PropTypes.string.isRequired,
	primary: PropTypes.bool,
	value: PropTypes.bool,
	readOnly: PropTypes.bool,
	className: PropTypes.string,
	onChangeValue: PropTypes.func,	
};

export default Checkbox;
