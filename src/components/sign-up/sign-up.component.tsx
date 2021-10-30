import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

const SignUp: React.FC = () => {
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords don\'t match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const stateMapper: any = {
      password: setPassword,
      confirmPassword: setConfirmPassword,
      displayName: setDisplayName,
      email: setEmail
    };

    stateMapper[name](value);
  };


  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form
        className="sign-up-form"
        onSubmit={handleSubmit}
      >
        <FormInput
          handleChange={handleChange}
          label="Display name"
          value={displayName}
          required
          name="displayName"
          type="text"
        />
        <FormInput
          handleChange={handleChange}
          label="Email"
          value={email}
          required
          name="email"
          type="email"
        />
        <FormInput
          handleChange={handleChange}
          label="Password"
          value={password}
          required
          name="password"
          type="password"
        />
        <FormInput
          handleChange={handleChange}
          label="Confirm password"
          value={confirmPassword}
          required
          name="confirmPassword"
          type="password"
        />
        <CustomButton type="submit">
          Sign Up
        </CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
