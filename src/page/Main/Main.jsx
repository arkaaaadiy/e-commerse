import React from 'react';
import PropTypes from 'prop-types';
import MainBlock from '../../components/MainBlock/MainBlock';
import photo from '../../assets/image.jpg';
import './Main.sass';
import Button from '../../components/Button/Button';
import bg from '../../assets/mainbig.png';

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

	return (
		<div>
			<div className='big-banner'>
				<div className='big-banner__label'>
					<h1 className='h1'>Fashion sale</h1>
					<div className='big-banner__check'>
						<Button small>Check</Button>
					</div>
				</div>
				<div className='big-banner__bg'>
					<img src={bg} alt='' />
                    <div className="big-banner__bg__gradient"></div>
				</div>
			</div>

			<MainBlock title='New' subtitle='You’ve never seen it before!' data={data} />
			<MainBlock title='Sale' subtitle='Super summer sale' data={data} />
		</div>
	);
};

Main.propTypes = {};

export default Main;
