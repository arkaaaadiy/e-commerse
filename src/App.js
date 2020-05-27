import React from 'react';
import './App.sass'
import Profile from './page/Profile/MyProfile/Profile';
import SignUp from './containers/Auth/SignUp/SignUp';
import Login from './containers/Auth/Login/Login'
import ForgotPassword from './containers/Auth/ForgotPassword/component/ForgotPassword';
import Topbar from './components/Topbar/Topbar';
import OrderDetails from './page/Profile/OrderDetails/OrderDetails';
import FiltersPage from './page/Shop/FiltersPage/FiltersPage';
import Main from './page/Main/Main';
import Categories from './page/Shop/Categories/Categories';
import Catalog from './page/Shop/Catalog/Catalog';
import Product from './page/Product/Product';
import Bag from './page/Bag/Bag';
import photo from './assets/image.jpg';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthLayout from './hoc/AuthLayout';

function App() {
  const isAuthenticated = true
  
  const data = {
    number: '1947034', 
    date: '05-12-2019', 
    traking: 'IW3475453455', 
    quantity: '3', 
    total: '112', 
    deliverStatus: 'Delivered',
    products: [
      {
        photo,
        name: 'Pullover',
        color: 'Black',
        size: 'L',
        price: '51',
        brand: 'Mango',
        units: '1'
      },
      {
        photo,
        name: 'Pullover',
        color: 'Black',
        size: 'L',
        price: '51',
        brand: 'Mango',
        units: '1'
      },
      {
        photo,
        name: 'Pullover',
        color: 'Black',
        size: 'L',
        price: '51',
        brand: 'Mango',
        units: '1'
      },
    ]
}

  let routes = (
    <AuthLayout>
    <Switch>
      <Route path='/signup' component={SignUp}></Route>
      <Route path='/signin' component={Login}></Route>
      <Route path='/forgotpassword'component={ForgotPassword}></Route>  
      <Redirect to='/signin'/>   
    </Switch> 
    </AuthLayout>  
  )

  if (isAuthenticated) {
   routes = ( 
   <>
   <main>  
      <Switch>
      <Route path='/filter' component={FiltersPage} />
      
      <Route path='/shop/:sex/:subcategory'><Catalog /></Route>
      <Route path='/shop' component={Categories} />
      <Route path='/catalog' component={Catalog} />
      <Route path='/order-details' ><OrderDetails data={data} /></Route>
      <Route path='/profile' component={Profile} />
      <Route path='/product' component={Product} />
      <Route path='/bag' component={Bag} />
      <Route path='/' component={Main} />
      <Redirect to='/'/>
      </Switch> 
    </main> 
      <Topbar />
    </>
    )
  }
  return (
    <div className='App'>
        {routes}  
    </div>
  )
}

export default App;
