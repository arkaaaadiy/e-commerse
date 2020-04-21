import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.sass';
import classNames from 'classnames';

const Tabs = (props) => {
	const { onClick, currentTab, tabs } = props;
	return (
		<div className='tabs'>
			{tabs.map((tab) => (
				<div
					onClick={() => onClick(tab.name)}
					className={classNames('tab', { 'tab-active': currentTab === tab.name ? true : false })}
				>
					<h3>{tab.name}</h3>
				</div>
			))}
		</div>
	);
};

Tabs.propTypes = {
	onClick: PropTypes.func,
	currentTab: PropTypes.string,
	tabs: PropTypes.array,
};

export default Tabs;
