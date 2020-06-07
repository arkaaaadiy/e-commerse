import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Info from '../../Info/Info';
import Button from '../../Button/Button';
import Tag from '../../Tag/Tag';

const SelectSize = (props) => {
	const { btn, options, addItemInFavorites, onShowSelect } = props;
	const [sizeValue, setSize] = useState(null);

	const onSubmitHandler = (e) => {
		e.preventDefault();
		addItemInFavorites(sizeValue);
		setSize(null);
		onShowSelect(e);
	};
	
	const onChange = ({ target }) => {
		setSize(target.id);
	};
	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<div className='select-size__head h3'>Select size</div>
				<div className='select-size__body'>
					{options.map((size) => (
						<Tag onChange={onChange} checked={size === sizeValue} key={size} id={size}>
							{size}
						</Tag>
					))}{' '}
				</div>
				<div className='select-size__info'>
					<Info>Size info</Info>
				</div>
				{btn && (
					<div className='select-size__btn'>
						<Button type='submit' primary>
							{btn.toUpperCase()}
						</Button>
					</div>
				)}
			</form>
		</div>
	);
};

SelectSize.propTypes = {
	btn: PropTypes.string,
	options: PropTypes.array,
};

export default SelectSize;
