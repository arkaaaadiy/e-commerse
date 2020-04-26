import React from 'react';
import PropTypes from 'prop-types';
import './Headling.sass';

const Heading = props => {
	const { children, search, title, className, onClick, noback} = props;
	return (<div className={className}>
		<header>
			{!noback && <nav onClick={onClick}>
				<svg width='10' height='16' viewBox='0 0 10 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M0.225521 8.54307C-0.0751736 8.24288 -0.0751736 7.7579 0.225521 7.45693L7.362 0.325723C7.79608 -0.108574 8.50232 -0.108574 8.93717 0.325723C9.37125 0.76002 9.37125 1.46488 8.93717 1.89917L2.83231 8.00039L8.93717 14.1C9.37125 14.5351 9.37125 15.24 8.93717 15.6743C8.50232 16.1086 7.79608 16.1086 7.362 15.6743L0.225521 8.54307Z'
						fill='#F7F7F7'
					/>
				</svg>
			</nav>}
			<div className='header__title'>{!title && children}</div>
			<div>
				{search && (
					<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z'
							fill='#F7F7F7'
						/>
					</svg>
				)}
			</div>
		</header>
            {title && <h1 className='headling__title'>{children}</h1>}
        </div>
	);
};

Heading.propTypes = {
    children: PropTypes.string,
    title: PropTypes.bool,
    search: PropTypes.bool
};

export default Heading;
