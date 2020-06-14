import React from 'react';
import PropTypes from 'prop-types';
import './ProfileLink.sass';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ProfileLink = (props) => {
	const { children, className, to } = props;
	return (
		<div className={className}>
			<Link to={to} className='profile-link'>
				<div className='profile-link__text'>{children}</div>				
				<svg
					className='profile-link__arrow'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M8.59998 7.4L9.99998 6L16 12L9.99998 18L8.59998 16.6L13.2 12L8.59998 7.4Z'
						fill='#ABB4BD'
					/>
				</svg>
			</Link>
		</div>
	);
};

ProfileLink.propTypes = {
	children: PropTypes.array,
	href: PropTypes.string,
	className: PropTypes.string,
};

export default ProfileLink;
