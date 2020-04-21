import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Checkbox from '../../../../components/Checkbox/Checkbox';

const BrandItem = (props) => {
	const { name, check, onChangeValue, primary, id} = props;
    console.log('render');

    const onClickHandler = (e) => {
        e.preventDefault();
        onChangeValue(name)
    }
    
	return (
		<div className='brand__item' onClick={(e) => onClickHandler(e)}>
			<div  className={classNames('brand__name', { 'brand__name-primary': primary })}>{name}</div>           
			<Checkbox className='brand__check' id={id} readOnly={true} primary={primary} value={check} />            
		</div>
	);
};

BrandItem.propTypes = {};

export default memo(BrandItem);
