import React, { useState } from 'react';
import Heading from '../../components/Heading/Heading';
import './Bag.sass';

import ProductCard from '../../components/ProductCard/ProductCard';
import InputText from '../../components/InputText';
import Button from '../../components/Button/Button';
import PromocodeCard from '../../components/PromocodeCard/PromocodeCard';
import SlideDown from '../../components/SlideDown/SlideDown';
import bg from '../../assets/bgpercent.png';
import { connect } from 'react-redux';
import { addCount, subCount } from '../../store/actions/Bag';

const Bag = (props) => {
	const { data, addCount, subCount } = props;
	const discontCode = [
		{ name: 'Personal offer', time: '6', code: 'mypromocode2020', discont: 10 },
		{ name: 'Summer Sale', time: '23', code: 'summer2020', discont: 15, img: bg },
		{ name: 'Personal offer1', time: '14', code: 'mypromocode2020', discont: 22 },
	];
	const [showPromoCode, setShowPromoCode] = useState(false);

	const total = data.reduce((total, item) => total + item.count * item.price, 0) || 0;


	const renderCard = () => {
		return data.map((card) => (
			<ProductCard key={card.id} addCount={addCount} subCount={subCount} variant='bag' dataProduct={card} />
		));
	};

	const showPromocode = (e) => {
		e.preventDefault()
		e.stopPropagation()
		setShowPromoCode(!showPromoCode)
	};

	const [promocode, setPromocode] = useState('');
	return (
		<div>
			<div className='container'>
				<Heading noback title search>
					My Bag
				</Heading>
				<div className='bag__productCards'>{renderCard()}</div>

				<div className='bag__promocode' onClick={showPromocode}>
					<InputText
						size='small'
						id='promocode1'
						label='Enter your promo code'						
						value={promocode}	
						disabled					
					/>
				</div>
				<SlideDown isShow={showPromoCode} onShow={showPromocode }>
					<div className='bag__promocode'>
						<InputText
							size='small'
							id='promocode'
							label='Enter your promo code'
							onClick={(e) => console.log(e.currentTarget)}
							value={promocode}
							onChange={setPromocode}
						/>
					</div>
					<h3>Your promo code</h3>
					<div className='bag__promocodes'>
						{discontCode.map((code) => (
							<PromocodeCard
								key={code.name}
								name={code.name}
								time={code.time}
								code={code.code}
								img={code.img}
								discont={code.discont}
							/>
						))}
					</div>
				</SlideDown>
				<div className='bag__total'>
					<div className='bag__label'>Total amount:</div>
					<h3 className='bag__cost'>{total}$</h3>
				</div>
				<Button>CHECK OUT</Button>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	data: state.bag.products,
});

export default connect(mapStateToProps, { addCount, subCount })(Bag);
