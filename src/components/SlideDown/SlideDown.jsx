import React from 'react';
import PropTypes from 'prop-types';
import './SlideDown.sass';

import classNames from 'classnames';

const SlideDown = (props) => {
	const { head, onShow, isShow, sortBy, children } = props;

	// const onSubmitSelect = (fn, params) => {
	// 	fn(params);
	// 	onShow();
	// };

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
	head: PropTypes.string,
	onShow: PropTypes.func,
	isShow: PropTypes.bool,
	sortBy: PropTypes.bool,
	children: PropTypes.any,
};

export default SlideDown;
