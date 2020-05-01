import React from 'react';
import PropTypes from 'prop-types';
import './Button.sass';
import classNames from 'classnames';

const Button = (props) => {
	const { children, onClick, primary = 'true', outline, small } = props;	
	return (
		<>
			<button
				className={classNames(
					'button ',
					{ 'button-primary': primary },
					{ 'button-outline': outline },
					{ 'button-small': small }
				)}
				onClick={onClick}
			>
				{children}
			</button>
		</>
	);
};

Button.propTypes = {
	children: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	primary: PropTypes.bool,
	outline: PropTypes.bool,
	small: PropTypes.bool,
};

export default Button;
