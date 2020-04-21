import React from 'react';
import PropTypes from 'prop-types';
import heart from '../../assets/icon/heart.svg';
import home from '../../assets/icon/home.svg';
import bag from '../../assets/icon/bag.svg';
import cart from '../../assets/icon/cart.svg';
import profile from '../../assets/icon/profile.svg';
import homeActiv from '../../assets/icon/home-activeited.svg';
import heartActiv from '../../assets/icon/heart-activeited.svg';
import bagActiv from '../../assets/icon/bag-activeited.svg';
import cartActiv from '../../assets/icon/cart-activeited.svg';
import profileActiv from '../../assets/icon/profile-activeited.svg';
import './Topbar.sass';
import { useState } from 'react';
import classNames from 'classnames';

// const menus = [
// 	{ src: home, srcActive: homeActiv, label: 'Home', current: true },
// 	{ src: cart, srcActive: cartActiv, label: 'Cart', current: false },
// 	{ src: bag, srcActive: bagActiv, label: 'Bag', current: false },
// 	{ src: heart, srcActive: heartActiv, label: 'Favorites', current: false },
// 	{ src: profile, srcActive: profileActiv, label: 'Profile', current: false }
// ];
const Topbar = props => {	
	const [menu, setMenu] = useState([
		{ src: home, srcActive: homeActiv, label: 'Home', current: true },
		{ src: cart, srcActive: cartActiv, label: 'Shop', current: false },
		{ src: bag, srcActive: bagActiv, label: 'Bag', current: false },
		{ src: heart, srcActive: heartActiv, label: 'Favorites', current: false },
		{ src: profile, srcActive: profileActiv, label: 'Profile', current: false }
	]);

	const topbarLink = (src, srcActive, label, current) => {
		return (
			<div key={label} className='topbar__item' onClick={() => chengePage(label)}>
				<div className='icons'>
					<img src={srcActive} className={classNames('icon', { 'icon-current': current })} alt={label} />
					<img src={src} alt={label} className={classNames('icon icon-main', { 'icon-hide': current })} />
				</div>
				<span className={classNames('topbar__label', { 'topbar__label-current': current })}>{label}</span>
			</div>
		);
	};
	

	const chengePage = label => {
		menu.map(el => {
			if (el.current === true) {
				el.current = false;
			}
			if (el.label === label) {
				el.current = true;
			}
			return el
		});
				
		setMenu([...menu]);
	};

	return (
		<>
			<div className='topbar'>
				<div className='topbar__wrapper'>
					{menu.map(el => topbarLink(el.src, el.srcActive, el.label, el.current))}
				</div>
			</div>
		</>
	);
};

Topbar.propTypes = {

};

export default Topbar;
