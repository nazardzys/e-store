import './header.styles.scss';
import React from 'react';
import firebase from 'firebase/compat/app';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

type Props = {
  currentUser: firebase.User | null;
}

const Header: React.FC<Props> = ({ currentUser }) => {
  const handleSignOut = () => auth.signOut();

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
          currentUser ?
          <div className="option" onClick={handleSignOut}>SIGN OUT</div>
          :
          <Link className="option" to="/signin">SIGN IN</Link>
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
