import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './InputField.sass';
import classNames from 'classnames';

const Input = (props) => {
	const {
		id,
		name,
		size,
		valid,
		error,
		value,
		onClick,
		onChange = () => {},
		onBlur,
		label = 'label',
		type = 'text',
		className,
		disabled,
	} = props;

	const [_value, setValueInput] = useState(value);

	const onChangeHendler = (e) => {
		setValueInput(e.target.value);
		onChange(e.target.value);
	};
	

	const small = size === 'small' ? true : false;
	const NextButton = (onClick) => (
		<>
			<svg
				className='input__button input__button-small'
				onClick={onClick}
				width='36'
				height='36'
				viewBox='0 0 36 36'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle cx='18' cy='18' r='18' fill='#ABB4BD' />
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M18 12L16.95 13.05L21.15 17.25H12V18.75H21.15L16.95 22.95L18 24L24 18L18 12Z'
					fill='#2A2C36'
				/>
			</svg>
		</>
	);
	

	const OkIcon = ({className}) => {
		return <div className={className}>
			<svg
							className='input__icon'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M9.03809 16.6234L4.53383 11.648L3 13.3303L9.03809 20L22 5.68233L20.477 4L9.03809 16.6234Z'
								fill='#55D85A'
							/>
						</svg>
		</div>
	}
	const ErrorIcon = ({className}) => {
		return <div className={className}>
			<svg
							className='input__icon'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z'
								fill='#FF2424'
							/>
						</svg>
		</div>
	}
	const ClearIcon = ({className, onClick}) => {
		return <div className={className}>
			<svg
							onClick={onClick}
							className='input__icon input__icon-small'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M18 7.2L16.8 6L12 10.8L7.2 6L6 7.2L10.8 12L6 16.8L7.2 18L12 13.2L16.8 18L18 16.8L13.2 12L18 7.2Z'
								fill='#ABB4BD'
							/>
						</svg>
		</div>
	}

	return (
		<div className={className}>
			<div className='TextField'>
				<div className='inputText'>
					<input
						type={type}
						id={id}
						onChange={onChangeHendler}
						value={_value}
						onBlur={onBlur}
						name={name}
						disabled={disabled}
						className={classNames(
							'input', 
							{ 'input-error': error }, 
							{ 'input-small': small },
							{ 'input-button': small && onClick}
						)}
					/>
					<label
						htmlFor={id}
						className={classNames(
							'input__label',
							{ 'input__label-active': _value },
							{ 'input__label-small': small },
							{ 'input__label-small-active': _value && small }
						)}
					>
						{label}
					</label>
					{valid && <OkIcon/>}
					{error && <ErrorIcon/> }
					{_value && small && <ClearIcon/> }

					{small && onClick && NextButton(onClick)}
				</div>
				{error && <span className='input__error helperText'>{error}</span>}
			</div>
		</div>
	);
};

Input.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	error: PropTypes.string,
};

export default Input;
