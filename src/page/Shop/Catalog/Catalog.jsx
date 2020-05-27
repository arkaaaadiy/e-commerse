import React from 'react';
// import PropTypes from 'prop-types';
import Heading from '../../../components/Heading/Heading';
import Filters from '../../../components/Filters/Filters';
import Tag from '../../../components/Tag/Tag';
import './Catalog.sass';
import photo from '../../../assets/image.jpg';
import ProductList from '../../../components/ProductList/ProductList';
import ProductItem from '../../../components/ProductItem/ProductItem';
import { useState } from 'react';
import SlideDown from '../../../components/SlideDown/SlideDown';
import SelectSize from '../../../components/Select/SelectSize/SelectSize';
import { useParams } from 'react-router-dom';

const Catalog = (props) => {
	let params = useParams()
	const data = [
		{
			photo,
			name: 'Pullover',
			color: 'Black',
			size: 'L',
			price: '16',
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
			price: '23',
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
			price: '47',
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
	const options = [{ name: 'XS' }, { name: 'S' }, { name: 'M' }, { name: 'L' }, { name: 'XL' }];
	const [listShow, setListShow] = useState(false);
	const [select, setSelect] = useState(false);
	return (
		<div>
			<Heading className='container' search>
				{`${params.sex}'s ${params.subcategory}`}
			</Heading>
			<div className='catalog__filter'>
				<div className='tags'>
					<div className='tags__item'>
						<Tag checked={true} small>
							T-shirt
						</Tag>
					</div>
					<div className='tags__item'>
						<Tag checked={true} small>
							Crop tops
						</Tag>
					</div>
					<div className='tags__item'>
						<Tag checked={true} small>
							Blouses
						</Tag>
					</div>
					<div className='tags__item'>
						<Tag checked={true} small>
							Shirts
						</Tag>
					</div>
				</div>
				<Filters setListShow={setListShow} listShow={listShow} className='container' />
			</div>
			{listShow ? (
				<div className='catalog__products-list container'>
					{data.map((card) => (
						<ProductList key={card.name + card.price} className='catalog__productItem' catalog dataProduct={card} />
					))}
				</div>
			) : (
				<div className='catalog__products container'>
					{data.map((card) => (
						<ProductItem key={card.name + card.price} dataProduct={card} catalog onClick={() => setSelect(true)} />
					))}
				</div>
			)}
			<SlideDown
				isShow={select}
				onShow={() => setSelect(!select)}
			>
				<SelectSize options={options} btn='add to card' />
			</SlideDown>
		</div>
	);
};

Catalog.propTypes = {};

export default Catalog;
