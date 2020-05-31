import React from 'react';
// import PropTypes from 'prop-types';
import Heading from '../../../components/Heading/Heading';
import Filters from '../../../components/Filters/Filters';
import Tag from '../../../components/Tag/Tag';
import './Catalog.sass';
// import photo from '../../../assets/image.jpg';
import ProductList from '../../../components/ProductList/ProductList';
import ProductItem from '../../../components/ProductItem/ProductItem';
import { useState } from 'react';
import SlideDown from '../../../components/SlideDown/SlideDown';
import SelectSize from '../../../components/Select/SelectSize/SelectSize';
import { useParams } from 'react-router-dom';
import { ucFirst } from '../../../utils/utils';
import FiltersPage from '../FiltersPage/FiltersPage';
import { connect } from 'react-redux';
import classNames from 'classnames';

const Catalog = (props) => {
	const { data } = props;
	let params = useParams();
	const options = [{ name: 'XS' }, { name: 'S' }, { name: 'M' }, { name: 'L' }, { name: 'XL' }];
	const [listShow, setListShow] = useState(false);
	const [select, setSelect] = useState(false);
	const [filterShow, setFilterShow] = useState(false);

	const onShowFiltersPage = () => {
		setFilterShow(!filterShow);
	};

	const onShowSelect = () => {
		setSelect(!select);
	};

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
						<SelectSize options={options} btn='add to card' />
					</SlideDown>
				</>
			)}
		</div>
	);
};

Catalog.propTypes = {};

const mapStateToProps = (state) => ({
	data: state.product.data,
});

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(Catalog);
