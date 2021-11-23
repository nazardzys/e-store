import './App.css';

import React from 'react';
import { useSelector } from 'react-redux';
import { Route,Switch, Redirect } from 'react-router-dom';

import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { selectCurrentUser } from './redux/user/user.selector';


const App = () => {
  const currentUser = useSelector(selectCurrentUser)

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser
              ? <Redirect to="/" />
              : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};
export default App;
