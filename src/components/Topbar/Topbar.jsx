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
import { useHistory, useLocation } from 'react-router-dom';

// const menus = [
// 	{ src: home, srcActive: homeActiv, label: 'Home', current: true },
// 	{ src: cart, srcActive: cartActiv, label: 'Cart', current: false },
// 	{ src: bag, srcActive: bagActiv, label: 'Bag', current: false },
// 	{ src: heart, srcActive: heartActiv, label: 'Favorites', current: false },
// 	{ src: profile, srcActive: profileActiv, label: 'Profile', current: false }
// ];
const Topbar = props => {	
	let location = useLocation();
	location.pathname.slice(0, 1)	
	let history = useHistory()
	const [menu, setMenu] = useState([
		{ src: home, srcActive: homeActiv, label: 'Home' },
		{ src: cart, srcActive: cartActiv, label: 'Shop' },
		{ src: bag, srcActive: bagActiv, label: 'Bag' },
		{ src: heart, srcActive: heartActiv, label: 'Favorites'},
		{ src: profile, srcActive: profileActiv, label: 'Profile'}
	]);

	let path = location.pathname	
	let initialState = path !== '/' ? path[1].toUpperCase() + path.slice(2) : 'Home'

	const [activeLink, setActiveLink] = useState(initialState)
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
		setActiveLink(label)
		switch (label) {
			case menu[0].label:
				history.push('home')
				break
			case menu[1].label:
				history.push('shop')
				break;
			case menu[2].label:
				history.push('bag')
				break;
			case menu[3].label:
				history.push('favorites')
				break;
			case menu[4].label:
				history.push('profile')	
				break;	
			default:
				break;
		}
		
	};

	return (
		<>
			<div className='topbar'>
				<div className='topbar__wrapper'>
					{menu.map(el => topbarLink(el.src, el.srcActive, el.label, el.label === activeLink ))}
				</div>
			</div>
		</>
	);
};

Topbar.propTypes = {

};

export default Topbar;
