import React from 'react';
import './Categories.sass';
import Heading from '../../../components/Heading/Heading';
import { connect } from 'react-redux';
import Button from '../../../components/Button/Button';
import { useParams, Link } from 'react-router-dom';

const ChooseCategory = (props) => {
	const { category } = props;
	let params = useParams();	
	let path = `${params.gen}/${params.category}`;
	

	return (
		<div>
			<Heading className='container' search>
				Categories
			</Heading>
			<section className='container'>
				<div className='category__btn'>
					<Button>VIEW ALL ITEMS</Button>
				</div>

				<h3 className='category__choose descriptiveItems'>Choose category</h3>
				<div className='category__items'>
					{category.map((cat) =>
						cat.name === path
							? cat.categories.map((el) => (
									<Link to={`/shop/${params.gen}/${params.category}/${el.name}`} key={el.name} >
										<div className='category__item'>
											<div className='category__label text'>{el.name}</div>
											<div className='category__line'></div>
										</div>
									</Link>
							  ))
							: null
					)}
				</div>
			</section>
		</div>
	);
};

const mapStateToProps = (state) => ({
	category: state.categories.category,
});

export default connect(mapStateToProps)(ChooseCategory);
