import './header.styles.scss';

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectHidden } from '../../redux/cart/cart.selectors';
import { userSignOutStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, hidden, signOut }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {
      !hidden && <CartDropdown />
    }
  </div>
);

const mapStateToProps = createStructuredSelector(  {
    currentUser: selectCurrentUser,
    hidden: selectHidden
  });

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(userSignOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
