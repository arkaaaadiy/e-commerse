import React from 'react';
import './App.sass'
// import Headling from './components/Heading/Heading'
// import InputText from './components/InputText/InputText'
// import SearchBar from './components/SearchBar/SearchBar'
// import Button from './components/Button/Button';
// import ButtonAdd from './components/ButtonAdd/ButtonAdd';
// import ButtonLike from './components/ButtonLike/ButtonLike';
// import Checkbox from './components/Checkbox/Checkbox';
// import Tag from './components/Tag/Tag';
// import Label from './components/Label/Label';
// import Range from './components/Range/Range';
// import Select from './components/Select/Select';
// import Rating from './components/Rating/Rating';
// import Colors from './components/Colors/Colors';
// import Filters from './components/Filters/Filters';
// import ProductCard from './components/ProductCard/ProductCard';
// import CategoryCard from './components/ProductCard/CategoryCard/CategoryCard';
// import category from './assets/category.png'
// import ProductList from './components/ProductCard/ProductList/ProductList'
// import ProductItem from './components/ProductCard/ProductItem/ProductItem';
// import SignUp from './containers/Auth/SignUp/SignUp';
// import Login from './containers/Auth/Login/Login'
// import ForgotPassword from './containers/Auth/ForgotPassword/component/ForgotPassword';
// import Topbar from './components/Topbar/Topbar';
// import FiltersPage from './page/Shop/FiltersPage/FiltersPage';
// import photo from './assets/image.png';
// import Main from './page/Main/Main';
// import Categories from './page/Shop/Categories/Categories';
// import Catalog from './page/Shop/Catalog/Catalog';
// import Product from './page/Product/Product';
// import Main from './page/Main/Main';
import Bag from './page/Bag/Bag';
// import Checkout from './page/Сheckout/Сheckout'

function App() {
  // const options = [
  //   {name: '12.5', value: '1'},
  //   {name: '13', value: '2'},
  //   {name: '13.5', value: '3'},
  //   {name: '14', value: '4'}
  // ]
  // const options2 = [{name: 'XS'},{name: 'S'},{name: 'M'},{name: 'L'},{name: 'XL'},]
  
  // const colors = [
  //   {color: '#020202'},
  //   {color: '#F6F6F6'},
  //   {color: '#F48117'},
  //   {color: '#BEA9A9'},
  //   {color: '#91BA4F'},
  //   {color: '#2CB1B1'},
  //   {color: '#020202'},
  //   {color: '#F6F6F6'},
  //   {color: '#F48117'},
  //   {color: '#BEA9A9'},
  //   {color: '#91BA4F'},
  //   {color: '#2CB1B1'},
  // ]
  return (
    <div className='App'>
      <div className="container">
      {/* <SignUp /> */}
      {/* <Login /> */}      
      </div>
      {/* <ForgotPassword /> */}
      <main>
        {/* <Checkout /> */}
        {/* <Main/> */}
        {/* <Product/> */}
        <Bag />
        {/* <Catalog /> */}
        {/* <FiltersPage  /> */}
      </main>     
      {/* <Topbar/> */}
    </div>
  )
}

export default App;
