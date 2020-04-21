import React from 'react';
import PropTypes from 'prop-types';
import './ButtonLike.sass';
import classNames from 'classnames';

const ButtonLike = props => {
	const { onClick, active } = props;
	
	return (
		<>
			<button className={classNames('ButtonLike ', { 'ButtonLike-activated': active })} onClick={onClick}>
				<svg
					className={classNames('ButtonLike__icon', { 'ButtonLike__icon-activated': active })}
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					{!active ? (
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M14.4823 6C13.3444 6 12.2523 6.5297 11.5395 7.36676C10.8267 6.5297 9.73461 6 8.59673 6C6.58256 6 5 7.58256 5 9.59673C5 12.0687 7.22343 14.0828 10.5913 17.1433L11.5395 18L12.4877 17.1368C15.8556 14.0828 18.079 12.0687 18.079 9.59673C18.079 7.58256 16.4965 6 14.4823 6ZM11.6049 16.1689L11.5395 16.2343L11.4741 16.1689C8.3613 13.3504 6.3079 11.4866 6.3079 9.59672C6.3079 8.28882 7.28882 7.3079 8.59672 7.3079C9.60381 7.3079 10.5847 7.95531 10.9313 8.85122H12.1542C12.4943 7.95531 13.4752 7.3079 14.4823 7.3079C15.7902 7.3079 16.7711 8.28882 16.7711 9.59672C16.7711 11.4866 14.7177 13.3504 11.6049 16.1689Z'
						/>
					) : (
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M11.5395 18L10.5913 17.1368C7.22343 14.0828 5 12.0687 5 9.59673C5 7.58256 6.58256 6 8.59673 6C9.7346 6 10.8267 6.5297 11.5395 7.36676C12.2523 6.5297 13.3444 6 14.4823 6C16.4965 6 18.079 7.58256 18.079 9.59673C18.079 12.0687 15.8556 14.0828 12.4877 17.1433L11.5395 18Z'
						/>
					)}
				</svg>
				<svg className='ButtonLike__icon-pressed' width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M11.5395 18L10.5913 17.1368C7.22343 14.0828 5 12.0687 5 9.59673C5 7.58256 6.58256 6 8.59673 6C9.7346 6 10.8267 6.5297 11.5395 7.36676C12.2523 6.5297 13.3444 6 14.4823 6C16.4965 6 18.079 7.58256 18.079 9.59673C18.079 12.0687 15.8556 14.0828 12.4877 17.1433L11.5395 18Z'
						
					/>
				</svg>
			</button>
		</>
	);
};

ButtonLike.propTypes = {
	onClick: PropTypes.func,
	active: PropTypes.bool
};

export default ButtonLike;
