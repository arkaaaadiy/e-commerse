import React from 'react';
import PropTypes from 'prop-types';
import MainBlock from '../../components/MainBlock/MainBlock';
import photo from '../../assets/image.jpg';
import './Main.sass';
import Button from '../../components/Button/Button';
import bg from '../../assets/mainbig.png';
import smallbg from '../../assets/small-bg.png';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';



const Main = (props) => {
	const data = [
		{
			photo,
			name: 'Pullover',
			color: 'Black',
			size: 'L',
			price: '15',
			brand: 'Mango',
			rating: '4',
			// discont: '30',
			newItem: true,
			// voises: '3'
			// soldOut: true
		},
		{
			photo,
			name: 'Pullover',
			color: 'Black',
			size: 'L',
			price: '22',
			brand: 'Mango',
			rating: '4',
			// discont: '30',
			newItem: true,
			voises: '10',
			// soldOut: true
		},
		{
			photo,
			name: 'Pullover',
			color: 'Black',
			size: 'L',
			price: '45',
			brand: 'Mango',
			rating: '3',
			discont: '30',
			// newItem: true,
			voises: '7',
			// soldOut: true
		},
		{
			photo,
			name: 'Pullover',
			color: 'Black',
			size: 'L',
			price: '15',
			brand: 'Mango',
			rating: '4',
			// discont: '30',
			newItem: true,
			// voises: '3'
			// soldOut: true
		},
		{
			photo,
			name: 'Pullover',
			color: 'Black',
			size: 'L',
			price: '22',
			brand: 'Mango',
			rating: '4',
			// discont: '30',
			newItem: true,
			voises: '10',
			// soldOut: true
		},
		{
			photo,
			name: 'Pullover',
			color: 'Black',
			size: 'L',
			price: '45',
			brand: 'Mango',
			rating: '3',
			discont: '30',
			// newItem: true,
			voises: '7',
			// soldOut: true
		},
	];

	const main3 = (params) => {
		return (
			<div className="banners">
				<div className="banners__item grid-a">
					<div className="banners __bg"></div>
					<img src={image1} alt=""/>
					<h1>New collection</h1>
				</div>
				<div className="banners__item grid-b">
					<h1>Summer sale</h1>
				</div>
				<div className="banners__item grid-c">
					<img src={image2} alt=""/>
					<h1>Men`s hats</h1>
				</div>
				<div className="banners__item grid-d">
					<img src={image3} alt=""/>
					<h1>Black</h1>
				</div>
			</div>
		)
	}
	const main2 = (params) => {
		return (
			<div className="banner container">
				<div className="banner__label"><h1>Street clothes</h1></div>
				<div className="banner__bg">
					<img src={smallbg} alt="main small background"/>
				</div>
			</div>
		)
	}
	const main1 = (params) => {
		return (
			<div className='big-banner container'>
				<div className='big-banner__label'>
					<h1 className='h1'>Fashion sale</h1>
					<div className='big-banner__check'>
						<Button small>Check</Button>
					</div>
				</div>
				<div className='big-banner__bg'>
					<img src={bg} alt='main big backgraound' />
                    <div className="big-banner__bg__gradient"></div>
				</div>
			</div>
		)
	}
	
	return (
		<div>
			{main1()}
			{/* {main2()} */}
			{/* {main3()} */}
			<div className="container">
			<MainBlock title='New' subtitle='You’ve never seen it before!' data={data} />
			<MainBlock title='Sale' subtitle='Super summer sale' data={data} />
			</div>
		</div>
	);
};

Main.propTypes = {};

export default Main;
