import { Field, reduxForm } from 'redux-form';
import React, { PropTypes } from 'react';
import { compose, graphql } from 'react-apollo';

import BorderedButton from '../../../components/BorderedButton';
import RenderTextField from '../util/RenderTextField';
import Router from 'next/router';
import { registerMutation } from '../util/mutations';
import { registerValidations } from '../util/validations';

const RegisterForm = props => {
  const registerUser = () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    props.register(firstName, lastName, username, password);

    Router.push('/');
  };

  return (
    <div className="container-fluid">
      <div
        className="row full-height middle-xs middle-sm middle-md middle-lg center-xs center-sm center-md center-lg"
      >
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
          <h1 className="header-text">Register</h1>
          <form onSubmit={props.handleSubmit(registerUser)}>
            <Field
              name="firstName"
              id="firstName"
              component={RenderTextField}
              type="text"
              label="First Name"
            />
            <Field
              name="lastName"
              id="lastName"
              component={RenderTextField}
              type="text"
              label="Last Name"
            />
            <Field
              name="username"
              id="username"
              component={RenderTextField}
              type="text"
              label="Username"
            />
            <Field
              name="password"
              id="password"
              component={RenderTextField}
              type="password"
              label="Password"
              style={{ marginBottom: 20 }}
            />
            <BorderedButton type="submit" label="Register" />
          </form>
        </div>
      </div>
      <style jsx>
        {
          `
          .full-height {
            height: 90vh;
          }
          .text-field-email {
            margin-bottom: 15px;
          }
          .text-field-password {
            margin-bottom: 15px;
          }
          .header-text {
            color: white;
            margin-bottom: 50px;
          }
        `
        }
      </style>
    </div>
  );
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func,
  register: PropTypes.func
};

export default compose(
  reduxForm({
    form: 'registerForm',
    validate: registerValidations
  }),
  graphql(registerMutation, {
    props: ({ mutate }) => ({
      register: (firstName, lastName, username, password) =>
        mutate({ variables: { firstName, lastName, username, password } })
    })
  })
)(RegisterForm);
