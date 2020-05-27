import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Checkbox from '../../../../components/Checkbox/Checkbox';

const BrandItem = (props) => {
	const { name, check, id } = props;	

	return (
		<div id={id} className='brand__item'>
			<div id={id} className={classNames('brand__name', { 'brand__name-primary': check })}>
				{name}
			</div>
			<Checkbox className='brand__check' id={id} readOnly={true} primary={check} value={check} />
		</div>
	);
};

function areEqual(prevProps, nextProps) {	
	return prevProps.check === nextProps.check ? true : false
  }

BrandItem.propTypes = {
	name: PropTypes.string,
	check: PropTypes.bool,
	id: PropTypes.number,
};

export default React.memo(BrandItem, areEqual);
