import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Heading from '../../../components/Heading/Heading';
import Filters from '../../../components/Filters/Filters';
import Tag from '../../../components/Tag/Tag';
import ProductList from '../../../components/ProductList/ProductList';
import ProductItem from '../../../components/ProductItem/ProductItem';
import FiltersPage from '../../FiltersPage/FiltersPage';
import SlideDown from '../../../components/SlideDown/SlideDown';
import SelectSize from '../../../components/Select/SelectSize/SelectSize';

import './Catalog.sass';
import { ucFirst } from '../../../utils/utils';
import classNames from 'classnames';

import {getProducts} from '../../../store/actions/Product';
import {addItemToFavorites} from '../../../store/actions/Favorites';

const Catalog = (props) => {
	const { data, getProducts, addItemToFavorites } = props;
	let params = useParams();	
	const [options, setOptions] = useState([]);
	const [currentItem, setCurrentItem] = useState(null)
	const [listShow, setListShow] = useState(false);
	const [select, setSelect] = useState(false);
	const [filterShow, setFilterShow] = useState(false);

	useEffect(() => {
		if(data.length === 0){getProducts()} 
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const onShowFiltersPage = () => {
		setFilterShow(!filterShow);
	};

	const onShowSelect = (data) => {	
		if (!data.target)  {
			setOptions([...data.size])
			setCurrentItem(data)
		}			
		setSelect(!select);
	};

	const addItemInFavorites = (size) => {
		const resutl = {
			...currentItem,
			size
		}
		addItemToFavorites(resutl)
	}

	const name = (params) => {
		
	}

	return (
		<div>
			{filterShow ? (
				<FiltersPage onShowFiltersPage={onShowFiltersPage} />
			) : (
				<>
					<Heading className='container' search>
						{`${ucFirst(params.sex)}'s ${params.subcategory.toLowerCase()}`}
					</Heading>
					<div className='catalog__filter'>
						<div className='tags'>
							<div className='tags__item'>								
								<Tag checked={false} onChange={name} small>
									T-shirt
								</Tag>
							</div>
							<div className='tags__item'>
								<Tag checked={false} onChange={name} small>
									Crop tops
								</Tag>
							</div>
							<div className='tags__item'>
								<Tag checked={false} onChange={name} small>
									Blouses
								</Tag>
							</div>
							<div className='tags__item'>
								<Tag checked={false} onChange={name} small>
									Shirts
								</Tag>
							</div>
						</div>
						<Filters
							onShowFiltersPage={onShowFiltersPage}
							setListShow={setListShow}
							listShow={listShow}
							className='container'
						/>
					</div>

					<div
						className={classNames(
							'container',
							{ catalog__products: !listShow },
							{ 'catalog__products-list': listShow }
						)}
					>
						{data.map((card) =>
							listShow ? (
								<ProductList
									key={card.name + card.price}
									className='catalog__productItem'
									catalog
									dataProduct={card}
								/>
							) : (
								<ProductItem key={card.name + card.price} dataProduct={card} catalog onClick={onShowSelect} />
							)
						)}
					</div>

					<SlideDown isShow={select} onShow={onShowSelect}>
						<SelectSize options={options} onShowSelect={onShowSelect} addItemInFavorites={addItemInFavorites} btn='add to favorite'  />
					</SlideDown>
				</>
			)}
		</div>
	);
};


const mapStateToProps = (state) => ({
	data: state.product.data,
});


export default connect(mapStateToProps, {getProducts, addItemToFavorites})(Catalog);
