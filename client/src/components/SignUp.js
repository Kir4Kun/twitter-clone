import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import InputGroup from './UI/InputGroup';
import PrimaryButton from './UI/Buttons/PrimaryButton';

function SignUp({
  name,
  username,
  email,
  password,
  password2,
  onChange,
  onSubmit
}) {
  return (
    <div className="container">
      <div className="auth__container">
        <h1 className="auth__logo">Sign Up to Twitter</h1>
        <form className="auth__form" onSubmit={onSubmit}>
          <InputGroup
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Name"
          />
          <InputGroup
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            placeholder="Username"
          />
          <InputGroup
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Email"
          />
          <InputGroup
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
          />
          <InputGroup
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            placeholder="Repeat password"
          />
          <PrimaryButton type="submit" text="Sign Up" />
        </form>
        <p className="signin-helper">
          Already have an account?
          <Link to="/signin" className="login-signin-link">
            Sign In now <i className="fas fa-angle-double-right" />
          </Link>
        </p>
      </div>
    </div>
  );
}

SignUp.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  password2: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SignUp;