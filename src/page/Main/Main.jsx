import React from 'react';
import MainBlock from '../../components/MainBlock/MainBlock';
import './Main.sass';
import Button from '../../components/Button/Button';
import bg from '../../assets/mainbig.png';
// import image1 from '../../assets/image1.png';
// import image2 from '../../assets/image2.png';
// import image3 from '../../assets/image3.png';
import { connect } from 'react-redux';

const Main = (props) => {
	const { data } = props;
	// const main3 = (params) => {
	// 	return (
	// 		<div className="banners">
	// 			<div className="banners__item grid-a">
	// 				<div className="banners __bg"></div>
	// 				<img src={image1} alt=""/>
	// 				<h1>New collection</h1>
	// 			</div>
	// 			<div className="banners__item grid-b">
	// 				<h1>Summer sale</h1>
	// 			</div>
	// 			<div className="banners__item grid-c">
	// 				<img src={image2} alt=""/>
	// 				<h1>Men`s hats</h1>
	// 			</div>
	// 			<div className="banners__item grid-d">
	// 				<img src={image3} alt=""/>
	// 				<h1>Black</h1>
	// 			</div>
	// 		</div>
	// 	)
	// }
	// const main2 = (params) => {
	// 	return (
	// 		<div className="banner container">
	// 			<div className="banner__label"><h1>Street clothes</h1></div>
	// 			<div className="banner__bg">
	// 				<img src={smallbg} alt="main small background"/>
	// 			</div>
	// 		</div>
	// 	)
	// }
	const main1 = (params) => {
		return (
			<div className='big-banner container'>
				<div className='big-banner__label'>
					<h1 className='h1'>Fashion sale</h1>
					<div className='big-banner__check'>
						<Button small>Check</Button>
					</div>
				</div>
				<div className='big-banner__bg'>
					<img src={bg} alt='main big backgraound' />
					<div className='big-banner__bg__gradient'></div>
				</div>
			</div>
		);
	};

	return (
		<div>
			{main1()}
			{/* {main2()} */}
			{/* {main3()} */}
			<div className='container'>
				{data.map((el) => (
					<MainBlock key={el.title} title={el.title} subtitle={el.subtitle} data={el.product} />
				))}
				{/* <MainBlock title='New' subtitle='You’ve never seen it before!' data={data} />
			<MainBlock title='Sale' subtitle='Super summer sale' data={data} /> */}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	data: state.main.maindata,
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(Main);
