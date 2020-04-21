import React from 'react';
import PropTypes from 'prop-types';
import './Colors.sass';
import ColorItem from '../ColorItem/ColorItem';

const Colors = (props) => {
	const { colors, className } = props;

	return (
		<div className={className}>
			<div className='containerColor'>
				{colors.map((c) => (
					<ColorItem color={c.color} />
				))}
			</div>
		</div>
	);
};

Colors.propTypes = {
	colors: PropTypes.array,
};

export default Colors;
