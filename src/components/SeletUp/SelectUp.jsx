import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SelectUp.sass';
import Info from '../Info/Info';
import Button from '../Button/Button';
import Tag from '../Tag/Tag';
import classNames from 'classnames';

const SelectUp = (props) => {
	const { options, head, onShow, isShow, sortBy, onSort, btn } = props;
	const onSubmitSelect = (fn, params) => {
		fn(params);
		onShow();
	};

	const sort = () => (
		<>
			<div className='selectUp__head h3'>Sort by</div>
			<div className='selectUp__sortList'>
				{options.map((e) => (
					<div
						id={e.name}
						key={e.name}
						onClick={() => onSubmitSelect(onSort, e.name)}
						className={classNames('selectUp__sortItem', { selectUp__selected: e.selected })}
					>
						{e.name}
					</div>
				))}
			</div>
		</>
	);

	const select = () => (
		<>
			<div className='selectUp__head h3'>{`Select ${head.toLowerCase()}`}</div>
			<div className='selectUp__body'>
				{options.map((e) => (
					<Tag key={e.name} id={e.name}>
						{e.name}
					</Tag>
				))}{' '}
			</div>
			<Info>{head} info</Info>			
			{btn && <div className='selectUp__btn'>
				<Button primary>{btn.toUpperCase()}</Button>
			</div>}
		</>
	);

	return (
		<>
			{isShow && <div className='selectUp' onClick={onShow}></div>}
			<div
				className={classNames('selectUp__wrapper', { 'selectUp-show': isShow, 'selectUp__wrapper-sort': sortBy })}
			>
				<div className='selectUp__lineclose'></div>
				{sortBy && sort()}
				{!sortBy && select()}
			</div>
		</>
	);
};

SelectUp.propTypes = {
	btn: PropTypes.string.isRequired
};

export default SelectUp;
