import React from 'react';
import './App.sass'
import Headling from './components/Heading/Heading'
import Topbar from './components/Topbar/Topbar';
// import InputText from './components/InputText/InputText'
// import SearchBar from './components/SearchBar/SearchBar'
// import Button from './components/Button/Button';
// import ButtonAdd from './components/ButtonAdd/ButtonAdd';
// import ButtonLike from './components/ButtonLike/ButtonLike';
// import Checkbox from './components/Checkbox/Checkbox';
// import Tag from './components/Tag/Tag';
// import Label from './components/Label/Label';
// import Range from './components/Range/Range';
import Select from './components/Select/Select';
// import Rating from './components/Rating/Rating';
// import Colors from './components/Colors/Colors';
import Filters from './components/Filters/Filters';
// import ProductCard from './components/ProductCard/ProductCard';
// import CategoryCard from './components/ProductCard/CategoryCard/CategoryCard';
// import category from './assets/category.png'
import ProductList from './components/ProductCard/ProductList/ProductList'
import photo from './assets/image.png';
import ProductItem from './components/ProductCard/ProductItem/ProductItem';
import SignUp from './containers/Auth/SignUp/SignUp';
import Login from './containers/Auth/Login/Login'
import ForgotPassword from './containers/Auth/ForgotPassword/component/ForgotPassword';
import Main from './page/Main/Main';

function App() {
  // const options = [
  //   {name: '12.5', value: '1'},
  //   {name: '13', value: '2'},
  //   {name: '13.5', value: '3'},
  //   {name: '14', value: '4'}
  // ]
  const options2 = [{name: 'XS'},{name: 'S'},{name: 'M'},{name: 'L'},{name: 'XL'},]
  
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
  const product = {
    photo,
    name: 'Pullover',
    color: 'Black',
    size: 'L',
    price: '55',
    brand: 'Mango',
    rating: '4',
    // discont: '30', 
    newItem: true,
    // voises: '3'
    // soldOut: true
}
  return (
    <div className='App'>
      {/* <SignUp /> */}
      {/* <Login /> */}
      {/* <ForgotPassword /> */}
      <main>

      <Main />
      </main>
      {/* <Headling title search>Women’s tops</Headling>
      <main>  
          <Button label='PRIMARY' outline/>
          <Button label='PRIMARY' primary />
          <Button label='PRIMARY' primary small/>
          <Button label='PRIMARY' outline small/>
           <ButtonAdd />          
          <ButtonLike />
          <Checkbox id='checked' text='male'/>
          <Checkbox id='list' primary/>
          <Tag ordinary id='tag' text='Tag'/>
          <Tag small id='tag2' text='Tag' /> 
          <Label>NEW</Label>
          <Label hot>HOT</Label>
          <Label hot>-20%</Label>
          <Range min='0' max='200'/>          
          <Select options={options2} title='Size' className='Select' style={{width: '200px'}}/>          
          <Filters></Filters>
          <Rating stars='1' />
          <Colors colors={colors} ></Colors>
          <CategoryCard title='New' photo={category} />
          <CategoryCard title='Clothes' photo={category} />
          <CategoryCard title='Shoes' photo={category} />
          <ProductCard dataProduct={product} />
          <ProductCard variant='category' dataProduct={product} />
          <ProductCard variant='order' dataProduct={product} />         
          <div className="product-items">
          <ProductList dataProduct={product} />
          <ProductItem dataProduct={product} />
          <ProductItem catalog dataProduct={product} />
          </div>
      </main>
      <Topbar></Topbar> */}
      <Topbar/>
    </div>
  )
}

export default App;
