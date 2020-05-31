import React from 'react';
import Heading from '../../../components/Heading/Heading';
import './FiltersPage.sass';
import Range from '../../../components/Range/Range';
import Colors from '../../../components/Colors/Colors';
import Tag from '../../../components/Tag/Tag';
import Button from '../../../components/Button/Button';
import { useState } from 'react';
import Brand from '../Brand/Brand';

const FiltersPage = (props) => {
	const {onShowFiltersPage} = props
	const colors = [
		{ color: '#020202' },
		{ color: '#F6F6F6' },
		{ color: '#F48117' },
		{ color: '#BEA9A9' },
		{ color: '#91BA4F' },
		{ color: '#2CB1B1' },
		{ color: '#020202' },
		{ color: '#F6F6F6' },
		{ color: '#F48117' },
		{ color: '#BEA9A9' },
		{ color: '#91BA4F' },
		{ color: '#2CB1B1' },
	];
	const sizes = [
		'XS','S','M','L','XL'
	]
	const category = [
		{name: 'All', check: false},
		{name: 'Women', check: false},
		{name: 'Men', check: false},
		{name: 'Boys', check: false},
		{name: 'Girls', check: false},
	]
	const [brandShow, setBrandShow] = useState(false);
	// const [filters, setFilters] = useState([])


	const onShowBrand = () => {
		setBrandShow(!brandShow)
	}

	return (
		<div>
			{brandShow ? (
				<Brand onClick={onShowBrand} />
			) : (
				<>
					<Heading onClick={onShowFiltersPage} className='container'>Filters</Heading>

					<div className='filtersProduct'>
						<div className='filtersProduct__item '>
							<h4 className='filtersProduct__label container subheads'>Price range</h4>
							<div className='filtersProduct__body'>
								<Range className='filtersProduct__inner' min='0' max='3000' />
							</div>
						</div>
						<div className='filtersProduct__item container'>
							<h4 className='filtersProduct__label  subheads'>Colors</h4>
							<div className='filtersProduct__body '>
								<Colors className='filtersProduct__inner' colors={colors} />
							</div>
						</div>
						<div className='filtersProduct__item container'>
							<h4 className='filtersProduct__label  subheads'>Sizes</h4>
							<div className='filtersProduct__body '>
								<div className='filtersProduct__tags'>
									{sizes.map(el => <div className='filtersProduct__tag'>
										<Tag id={el} size>{el} </Tag>
									</div>)}									
								</div>
							</div>
						</div>
						<div className='filtersProduct__item container'>
							<h4 className='filtersProduct__label  subheads'>Category</h4>
							<div className='filtersProduct__body '>
								<div className='filtersProduct__tags filtersProduct__tags-cat'>
									{category.map(el =><div className='filtersProduct__tag-cat'>
										<Tag id={el.name} >{el.name} </Tag>
									</div> )}							
									
								</div>
							</div>
						</div>

						<div className='filtersProduct__item container' onClick={onShowBrand}>
							<h4 className='filtersProduct__label subheads'>Brand</h4>
							<p className='helperText filtersProduct__sublabel'>adidas Originals, Jack & Jones, s.Oliver</p>
							<div className='filtersProduct__arrow'>
								<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M8.59009 16.59L13.1701 12L8.59009 7.41L10.0001 6L16.0001 12L10.0001 18L8.59009 16.59Z'
										fill='#F7F7F7'
									/>
								</svg>
							</div>
						</div>

						<div className='filtersProduct__buttons container'>
							<Button outline small>
								Discard
							</Button>
							<Button small>Apply</Button>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default FiltersPage;
