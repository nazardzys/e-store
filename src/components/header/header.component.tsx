import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import firebase from 'firebase/compat/app';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

type Props = {
  currentUserState: firebase.User | null;
}

const Header: React.FC<Props> = ({ currentUserState }) => {
  const hangleSignOut = () => auth.signOut();

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {
          currentUserState ?
          <div className="option" onClick={hangleSignOut}>SIGN OUT</div>
          :
          <Link className="option" to="/signin">SIGN IN</Link>
        }
      </div>
    </div>
  );
};

export default Header;
