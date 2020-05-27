import React from 'react';
import Heading from '../../../components/Heading/Heading';
import SearchBar from '../../../components/SearchBar/SearchBar';
import { useState } from 'react';
import './Brand.sass';
import BrandItem from './Branditem/BrandItem';
import Button from '../../../components/Button/Button';

const Brand = (props) => {
    const {onClick} = props
	const initialList = [
		{ name: 'adidas', check: false },
		{ name: 'adidas Originals', check: false },
		{ name: 'Blend', check: false },
		{ name: 'Boutique Moschino', check: false },
		{ name: 'Champion', check: false },
		{ name: 'Diesel', check: false },
		{ name: 'Jack & Jones', check: false },
		{ name: 'Naf Naf', check: false },
		{ name: 'Red Valentino', check: false },
		{ name: 's.Oliver', check: false },		
	];
	const [list, setList] = useState(initialList);
	const [search, setSearch] = useState('');

	const onChangeList = (e) => {
		const name = e.target.id	

		let copy = [...list];
		copy.map((item) => (item.name === name ? (item.check = !item.check) : null));
		setList(copy);
	};

	const findBrand = (e) => {
		let value = e.target.value;
		setSearch(value);
		let copy = [...initialList];
		setList(copy.filter((item) => item.name.search(new RegExp(value, 'ig')) !== -1));
	};

	const branditems = list.map((brand, index) => (
		<BrandItem
			key={brand.name}
			name={brand.name}			
			check={brand.check}
            onChangeValue={onChangeList}
            id={brand.name}
		/>
	));

	return (
		<div>
			<div className='brand container'>
				<Heading onClick={onClick}>Brand</Heading>
				<SearchBar value={search} onChange={findBrand} className='brand__search' />
				<div className='brands' onClickCapture={e => onChangeList(e)} >{branditems}</div>
			</div>
			<div className='filtersProduct__buttons container'>
				<Button outline small>
					Discard
				</Button>
				<Button small>Apply</Button>
			</div>
		</div>
	);
};

Brand.propTypes = {};

export default Brand;
