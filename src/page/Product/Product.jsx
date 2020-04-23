import React from 'react';
import PropTypes from 'prop-types';
import photo from '../../assets/product1.png';
import photo1 from '../../assets/product2.png';
import photo2 from '../../assets/alsodress.png';
import Heading from '../../components/Heading/Heading';
import Select from '../../components/Select/Select';
import './Product.sass';
import ButtonLike from '../../components/ButtonLike/ButtonLike';
import Rating from '../../components/Rating/Rating';
import Info from '../../components/Info/Info';
import Button from '../../components/Button/Button';
import MainBlock from '../../components/MainBlock/MainBlock';

const Product = (props) => {
	const sizeOptions = [{ name: 'XS' }, { name: 'S' }, { name: 'M' }, { name: 'L' }, { name: 'XL' }];
	const colorOptions = [
		{ name: 'Black' },
		{ name: 'Orange' },
		{ name: 'Blue' },
		{ name: 'Gray' },
		{ name: 'Green' },
	];

	const data = [
		{
			photo: photo2,
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
			photo: photo2,
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
			photo: photo2,
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
			photo: photo2,
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
	];

	return (
		<div>
			<div className='product-page'>
				<Heading className='container'>Short dress</Heading>
				<div className='slider-photo'>
					<img src={photo} alt='' />
					<img src={photo1} alt='' />
					<img src={photo} alt='' />
					<img src={photo1} alt='' />
				</div>
				<div className='container'>
					<div className='product-selects'>
						<div className='select-item'>
							<Select title='Size' options={sizeOptions} btn='Select'></Select>
						</div>
						<div className='select-item'>
							<Select title='Color' options={colorOptions} btn='Select'></Select>
						</div>
						<ButtonLike />
					</div>
					<div className='product-info'>
						<h2 className='product-info__brand'>H&M</h2>
						<h5 className='product-info__name'>Short black dress</h5>
						<div className='product-info__raiting'>
							<Rating stars={'5'} voises={'10'} />
						</div>
						<h2 className='product-info__pricing'>$19.99</h2>
						<p className='description product-info__description'>
							Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed
							square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves
							with a small frill trim.
						</p>
					</div>
				</div>
				<div className='product-blockinfo'>
					<Info>Item details</Info>
					<Info>Shipping info</Info>
					<Info>Support</Info>
				</div>
				<div className='container'>
					<MainBlock title='You can also like this' also data={data} />
				</div>
				<div className='product-button'>
					<Button>ADD TO CART</Button>
				</div>
			</div>
		</div>
	);
};

Product.propTypes = {};

export default Product;
