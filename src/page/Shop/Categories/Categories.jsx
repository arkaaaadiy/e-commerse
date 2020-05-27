import React, { useState } from 'react';
import Heading from '../../../components/Heading/Heading';
import Tabs from '../../../components/Tabs/Tabs';
import CategoryCard from '../../../components/CategoryCard/CategoryCard';
import './Categories.sass';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';

const Categories = (props) => {
	const [caterory, setCaterory] = useState(null);
	let history = useHistory();
	const { tabs } = props;
	const [currentTab, setCurrentTab] = useState('Women');

	const onChangeHendler = (name) => {
		setCurrentTab(name);
		history.push(`/shop/${name.toLowerCase()}`);
	};
	const onChangeCategory = (event) => {
		setCaterory(event.currentTarget.dataset.id.toLowerCase())
		// history.push(`/shop/${currentTab.toLowerCase()}/${event.currentTarget.dataset.id.toLowerCase()}`);
	};

	const var1 = (
		<>
			<Tabs tabs={tabs} onClick={onChangeHendler} currentTab={currentTab} />
			<section className='container'>
				<div className='categoryCards'>
					<div className='dicontCard'>
						<h3>SUMMER SALES</h3>
						<p>Up to 50% off</p>
					</div>
					{tabs.map((tab) =>
						tab.name === currentTab
							? tab.cards.map((card) => (
									<CategoryCard
										key={card.name}
										tabname={tab.name}
										onClick={onChangeCategory}
										title={card.name}
										photo={card.image}
									/>
							  ))
							: null
					)}
				</div>
			</section>
		</>
	);

	const var2 = (
		<>
			<section className='container'>
				<div className='category__btn'>
					<Button>VIEW ALL ITEMS</Button>
				</div>

				<h3 className='category__choose descriptiveItems'>Choose category</h3>
				<div className='category__items'>
					{tabs.map((tab) =>
						tab.name === currentTab
							? tab.cards.map((card) =>
									card.category && card.category.map((el) => (
										<Link to={`/shop/${currentTab}/${el.name}`} key={el.name}>
											<div className='category__item'>
												<div className='category__label text'>{el.name}</div>
												<div className='category__line'></div>
											</div>
										</Link>
									))
							  )
							: null
					)}
				</div>
			</section>
		</>
	);

	return (
		<div>
			<Heading className='container' search>
				Categories
			</Heading>
			{caterory ? var2 : var1}
		</div>
	);
};

const mapStateToProps = (state) => ({
	tabs: state.categories.tabs,
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(Categories);
