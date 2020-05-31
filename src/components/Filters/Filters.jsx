import React, { useState, useEffect } from 'react';
import filter from '../../assets/icon/filter.svg';
import grid from '../../assets/icon/grid1.svg';
import list from '../../assets/icon/list.svg';
import sort from '../../assets/icon/sort.svg';
import './Filters.sass';
import SlideDown from '../SlideDown/SlideDown';
import SortBy from '../SortBy/SortBy';

const Filters = ({ className, listShow, setListShow, onShowFiltersPage }) => {
	const [optionsSort, setOptionsSort] = useState([
		{ name: 'Popular' },
		{ name: 'Newest' },
		{ name: 'Customer rewiew' },
		{ name: 'Price: lowest to high' },
		{ name: 'Price: highest to low' },
	]);
	const [sortBy, setSortBy] = useState('');

	useEffect(() => {
		optionsSort.map((e) => (e.name === sortBy ? (e.selected = true) : (e.selected = false)));
		setOptionsSort([...optionsSort]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sortBy]);

	const [isShowSort, setShowSort] = useState(false);

	return (
		<div className={className}>
			<div className='filters helperText'>
				<div className='filters__item' onClick={onShowFiltersPage}>
					<img src={filter} alt='filter icon' className='filters__icon' />
					<span>Filters</span>
				</div>
				<div className='filters__item' onClick={() => setShowSort(!isShowSort)}>
					<img src={sort} alt='sort icon' className='filters__sorticon'></img>
					{!sortBy ? <span>Sort By</span> : <span>{sortBy}</span>}
				</div>
				<SlideDown head='Sort by' isShow={isShowSort} onShow={() => setShowSort(!isShowSort)}>
					<SortBy						
						options={optionsSort}
						onSort={setSortBy}
						onShow={() => setShowSort(!isShowSort)}
					/>
				</SlideDown>
				{/* <SelectUp
					sortBy
					isShow={isShowSort}
					options={optionsSort}
					onSort={setSortBy}
					onShow={() => setShowSort(!isShowSort)}
				/> */}
				{listShow ? (
					<div onClick={() => setListShow(!listShow)} className='filters__item'>
						<div className='filters__grid'>
							<img src={grid} alt='filter grid' />
						</div>
					</div>
				) : (
					<div onClick={() => setListShow(!listShow)} className='filters__item'>
						<div className='filters__grid'>
							<img src={list} alt='filter grid' />
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Filters;
