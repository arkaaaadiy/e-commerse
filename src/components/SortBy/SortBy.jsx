import React from 'react'
// import PropTypes from 'prop-types'
import classNames from 'classnames';
import './SortBy.sass'
const SortBy = props => {
	const { onShow, options, onSort} = props
	
    const onSubmitSelect = (fn, params) => {
		fn(params);
		onShow();
	};
    return (
        <>            
			<div className='sortBy__list'>
				{options.map((e) => (
					<div
						id={e.name}
						key={e.name}
						onClick={() => onSubmitSelect(onSort, e.name)}
						className={classNames('sortBy__item', { 'sortBy__selected' : e.selected })}
					>
						{e.name}
					</div>
				))}
			</div>
        </>
    )
}

SortBy.propTypes = {

}

export default SortBy
