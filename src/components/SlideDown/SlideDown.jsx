import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SlideDown.sass';
import Info from '../Info/Info';
import Button from '../Button/Button';
import Tag from '../Tag/Tag';
import classNames from 'classnames';

const SlideDown = (props) => {
	const { head, onShow, isShow, sortBy, onSort, btn, children } = props;
	const onSubmitSelect = (fn, params) => {
		fn(params);
		onShow();
	};

	return (
		<>
			{isShow && <div className='SlideDown' onClick={onShow}></div>}
			<div
				className={classNames('SlideDown__wrapper', {
					'SlideDown-show': isShow,
					'SlideDown__wrapper-sort': sortBy,
				})}
			>
				<div className='SlideDown__lineclose'></div>
				{head && <div className="SlideDown__head">{head}</div>}
				 
				<div className='SlideDown__main'>{children}</div>				
			</div>
		</>
	);
};

SlideDown.propTypes = {
	btn: PropTypes.string.isRequired,
};

export default SlideDown;
