import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createProfile } from '../../actions/profile';

const CreateModule = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    name: '',
    serialNumber: '',
    imei: '',
    macAddress: ''
  });

  const {
    name,
    serialNumber,
    imei,
    macAddress
  } = formData;

  const onChange = e => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  }

  return (
    <Fragment>
      <h1 className="large text-primary my-2">
        Create Your Module
      </h1>
      <form
        className="form"
        onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => onChange(e)} />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="SerialNumber"
            name="serialNumber"
            value={serialNumber}
            onChange={e => onChange(e)} />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Imei"
            name="imei"
            value={imei}
            onChange={e => onChange(e)} />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="MacAddress"
            name="macAddress"
            value={macAddress}
            onChange={e => onChange(e)} />
        </div>

        <div className="form-group sign-in">
          <Link className="my-1" to="/dashboard">
            <input
              type="submit"
              className="btn btn-primary bg-radient"
              value="Go back" />
          </Link>
          <input
            type="submit"
            className="btn btn-primary bg-radient"
            value="Accept" />
        </div>
      </form>
    </Fragment>
  );
}
// <input type="submit" class="btn btn-primary" value="Go Back" />

CreateModule.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default CreateModule;



// const Login = ({ login, isAuthenticated }) => {
// 	const [formData, setFormData] = useState({
// 		email: '',
// 		password: '',
// 	});
// 	// Relate to state and setState in class component

// 	const { email, password } = formData;

// 	const onChange = e =>
// 		setFormData({ ...formData, [e.target.name]: e.target.value });

// 	const onSubmit = async e => {
// 		e.preventDefault();
// 		login(email, password);
// 	};

// 	// Redirect if logged in
// 	if (isAuthenticated) {
// 		return <Redirect to="/dashboard" />
// 	}

// 	return <Fragment>
// 		<form
// 			className="form my-2 form-sign-in"
// 			onSubmit={e => onSubmit(e)}>
// 			{/* <div 
// 					className="form-image">
// 					<img src="https://d29ctq871ma42a.cloudfront.net/resources/19.4.6/static/media/login_logo.c28e0894.png" />
// 				</div>  */}
// 			<h1 class="large text-primary">Sign In</h1>
// 			<div className="form-group">
// 				<input
// 					type="email"
// 					placeholder="Email Address"
// 					name="email"
// 					value={email}
// 					onChange={e => onChange(e)} />
// 			</div>
// 			<div className="form-group">
// 				<input
// 					type="password"
// 					placeholder="Password"
// 					name="password"
// 					value={password}
// 					onChange={e => onChange(e)}
// 					minLength="6"
// 				/>
// 			</div>
// 			<div class="form-group sign-in">
// 				<input
// 					type="submit"
// 					class="btn btn-primary"
// 					value="Login" /> </div>
// 		</form>
// 		<p class="my-1 sign-up">
// 			Don't have an account?
// 				<Link to="/register"> Sign Up</Link>
// 		</p>
// 	</Fragment>;
// }

// // <span>Forgotten pasword?</span>

// Login.propTypes = {
// 	login: PropTypes.func.isRequired,
// 	isAuthenticated: PropTypes.bool
// };

// const mapStateToProps = state => ({
// 	isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(
// 	mapStateToProps,
// 	{ login })
// 	(Login);