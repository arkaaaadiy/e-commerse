import React, { useState } from 'react';
import Heading from '../../../components/Heading/Heading';
import Tabs from '../../../components/Tabs/Tabs';
import CategoryCard from '../../../components/ProductCard/CategoryCard/CategoryCard';
import photo from '../../../assets/imageCategory.png';
import './Categories.sass';
import Button from '../../../components/Button/Button';

const Categories = () => {
	const [currentTab, setCurrentTab] = useState('Women');
	const tabs = [
		{ name: 'Women', path: '/women' },
		{ name: 'Men', path: '/men' },
		{ name: 'Kids', path: '/kids' },
	];
	const onChangeHendler = (name) => {
		setCurrentTab(name);
	};
	const categories = [
		{ name: 'Tops' },
		{ name: 'Shirts & Blouses' },
		{ name: 'Cardigans & Sweaters' },
		{ name: 'Knitwear' },
		{ name: 'Blazers' },
		{ name: 'Outerwear' },
		{ name: 'Pants' },
		{ name: 'Jeans' },
		{ name: 'Shorts' },
		{ name: 'Skirts' },
		{ name: 'Dresses' },
		{ name: 'Pants' },
		{ name: 'Jeans' },
		{ name: 'Shorts' },
		{ name: 'Skirts' },
		{ name: 'Dresses' },
	];
	return (
		<div>
			<Heading className='container' search>
				Categories
			</Heading>
			{/* <Tabs tabs={tabs} onClick={onChangeHendler} currentTab={currentTab} /> */}
			<section className='container'>
				<div className='category__btn'>
					<Button>VIEW ALL ITEMS</Button>
				</div>

				<h3 className='category__choose descriptiveItems'>Choose category</h3>
				<div className='category__items'>
					{categories.map((cat) => (
						<div className='category__item'>
							<div className='category__label text'>{cat.name} </div>
							<div className='category__line'></div>
						</div>
					))}
				</div>

				{/* <div className='categoryCards'>
					<div className='dicontCard'>
						<h3>SUMMER SALES</h3>
						<p>Up to 50% off</p>
					</div>
					<CategoryCard title='New' photo={photo} />
					<CategoryCard title='New' photo={photo} />
					<CategoryCard title='New' photo={photo} />
					<CategoryCard title='New' photo={photo} />
					<CategoryCard title='New' photo={photo} />
				</div> */}
			</section>
		</div>
	);
};

export default Categories;
