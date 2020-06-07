import React from 'react';
import PropTypes from 'prop-types';
import './Tag.sass';
import classNames from 'classnames';

const Tag = (props) => {
	const { children, id, small, checked, size, onChange } = props;
	return (
		<div>
			<input
				id={id}
				checked={checked}
				onChange={onChange}
				className={classNames('tag', { 'tag-small': small }, { 'tag-size': size })}
				type='checkbox'
			/>
			<label className='descriptiveItems' htmlFor={id}>
				{children}
			</label>
		</div>
	);
};

Tag.propTypes = {
	children: PropTypes.string,
	id: PropTypes.string,
	size: PropTypes.bool,
	small: PropTypes.bool,
	checked: PropTypes.bool,
};

export default Tag;
