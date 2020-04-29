import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Heading from '../../components/Heading/Heading';
import './Bag.sass';
import photo1 from '../../assets/bag1.png';
import photo2 from '../../assets/bag2.png';
import photo3 from '../../assets/bag3.png';
import ProductCard from '../../components/ProductCard/ProductCard';
import InputText from '../../components/InputText';
import Button from '../../components/Button/Button';
import PromocodeCard from '../../components/PromocodeCard/PromocodeCard';
import SlideDown from '../../components/SlideDown/SlideDown';
import bg from '../../assets/bgpercent.png'

const Bag = (props) => {
	const data = [
		{
			photo: photo1,
			name: 'Pullover',
			color: 'Black',
			size: 'L',
			price: '51',
			brand: 'Mango',
			// discont: '30',
			newItem: true,
			// voises: '3'
			// soldOut: true
		},
		{
			photo: photo2,
			name: 'T-shirt',
			color: 'Gray',
			size: 'L',
			price: '30',
			brand: 'Mango',
			// discont: '30',
			newItem: true,
			voises: '10',
			// soldOut: true
		},
		{
			photo: photo3,
			name: 'Pullover',
			color: 'Black',
			size: 'M',
			price: '43',
			brand: 'Mango',
			discont: '30',
			// newItem: true,
			voises: '7',
			// soldOut: true
		},
	];
	const discontCode = [
		{ name: 'Personal offer', time: '6', code: 'mypromocode2020', discont: 10 },
		{ name: 'Summer Sale', time: '23', code: 'summer2020', discont: 15, img: bg },
		{ name: 'Personal offer', time: '14', code: 'mypromocode2020', discont: 22 },
	];
	const [showPromoCode, setShowPromoCode] = useState(false);
	const renderCard = () => {
		return data.map((card) => <ProductCard key={card.name + card.price} variant='bag' dataProduct={card} />);
	};
	
	const [promocode, setPromocode] = useState('');
	return (
		<div>
			<div className='container'>
				<Heading noback title search>
					My Bag
				</Heading>
				<div className='bag__productCards'>{renderCard()}</div>
				<div className='bag__promocode' onClick={(e) => setShowPromoCode(true)}>
					<InputText
						size='small'
						id='promocode1'
						label='Enter your promo code'
						onClick={(e) => setShowPromoCode(true)}
						value={promocode}
						onChange={setPromocode}
					/>
				</div>
				<SlideDown isShow={showPromoCode} onShow={() => setShowPromoCode(!showPromoCode)}>
					<div className='bag__promocode'>
						<InputText
							size='small'
							id='promocode'
							label='Enter your promo code'
							onClick={(e) => console.log(e.target)}
							value={promocode}
							onChange={setPromocode}
						/>
					</div>
					<h3>Your promo code</h3>
					<div className='bag__promocodes'>
						{discontCode.map((code) => (
							<PromocodeCard name={code.name} time={code.time} code={code.code}  img={code.img} discont={code.discont} />
						))}
					</div>
				</SlideDown>
				<div className='bag__total'>
					<div className='bag__label'>Total amount:</div>
					<h3 className='bag__cost'>124$</h3>
				</div>
				<Button>CHECK OUT</Button>
			</div>
		</div>
	);
};

Bag.propTypes = {};

export default Bag;
