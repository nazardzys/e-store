import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import React, { useEffect, useState } from 'react';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import { Route, Switch } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import firebase from 'firebase/compat/app';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    console.log(currentUser);

    return () => {
      unsubscribeFromAuth();
    };
  });

  return (
      <div>
        <Header currentUserState={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
  );
}

export default App;