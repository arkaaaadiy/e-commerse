import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './PromocodeCard.sass';
import classNames from 'classnames';

const PromocodeCard = (props) => {   
	const { time, name, code, img, discont, className } = props;
	return (
		<div className={className}>
			<div className='promocode'>
				<div className={classNames('promocode__percent', {'promocode__percent-black': img})} >
					{img && <img className='promocode__bg' src={img} alt='bg percent' />}
					<h1 className='promocode__number'>{discont} </h1>
					<div className='promocode__off'>
						<div>%</div>
						<div>off</div>
					</div>
				</div>
				<div className='promocode__info'>
					<div className='promocode__name descriptiveItems'>{name}</div>
					<div className='promocode__code helperText'>{code}</div>
				</div>
				<div className='promocode__apply'>
					<div className='promocode__time'>{time} days remaining</div>
					<div className='promocode__btn'>
						<Button small>Apply</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

PromocodeCard.propTypes = {
	time: PropTypes.string,
	name: PropTypes.string,
	code: PropTypes.string,
	img: PropTypes.string,
	discont: PropTypes.number,
	className: PropTypes.string,
};

export default PromocodeCard;
