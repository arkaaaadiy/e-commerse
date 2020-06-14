import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';

import Heading from '../../components/Heading/Heading';
import Filters from '../../components/Filters/Filters';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import FiltersPage from '../FiltersPage/FiltersPage';
import classNames from 'classnames';

import { deleteItemInFavorites } from '../../store/actions/Favorites';
import { addToBag } from '../../store/actions/Bag';

const Favorites = (props) => {
	const { data, deleteItemInFavorites, addToBag } = props;
	const [listShow, setListShow] = useState(false);
	const [filterShow, setFilterShow] = useState(false);

	const onShowFiltersPage = () => {
		setFilterShow(!filterShow);
	};

	const onDeleteItem = (id) => {
		deleteItemInFavorites(id);
	};

	return (
		<div>
			{filterShow ? (
				<FiltersPage onShowFiltersPage={onShowFiltersPage} />
			) : (
				<>
					<Heading noback className='container' search>
						Favorites
					</Heading>
					<div className='catalog__filter'>
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
						{data.length > 0 ? (
							data.map((card) =>
								listShow ? (
									<ProductList
										key={card.id}
										className='catalog__productItem'
										dataProduct={card}
										onClose={onDeleteItem}
										onAdd={addToBag}
									/>
								) : (
									<ProductItem
										key={card.id}
										className='product-item'
										dataProduct={card}
										onClose={onDeleteItem}
										onAdd={addToBag}
									/>
								)
							)
						) : (
							<h1>Favorite empty</h1>
						)}
					</div>
				</>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	data: state.favorites.data,
});

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps, { deleteItemInFavorites, addToBag })(Favorites);
