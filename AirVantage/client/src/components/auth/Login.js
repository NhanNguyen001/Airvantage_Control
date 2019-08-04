import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	// Relate to state and setState in class component

	const { email, password } = formData;

	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async e => {
		e.preventDefault();
		login(email, password);
	};

	// Redirect if logged in
	if (isAuthenticated) {
		return <Redirect to="/dashboard" />
	}

	return <Fragment>
		<form
			className="form my-n-2 form-sign-in"
			onSubmit={e => onSubmit(e)}>
			{/* <div 
					className="form-image">
					<img src="https://d29ctq871ma42a.cloudfront.net/resources/19.4.6/static/media/login_logo.c28e0894.png" />
				</div>  */}
			<h1 class="large text-primary">Sign Up</h1>
			<div className="form-group">
				<input
					type="email"
					placeholder="Email Address"
					name="email"
					value={email}
					onChange={e => onChange(e)} />
			</div>
			<div className="form-group">
				<input
					type="password"
					placeholder="Password"
					name="password"
					value={password}
					onChange={e => onChange(e)}
					minLength="6"
				/>
			</div>
			<div class="form-group sign-in">
				<input
					type="submit"
					class="btn btn-primary"
					value="Login" /> </div>
		</form>
		<p class="my-n-1 sign-up">
			Don't have an account?
				<Link to="/register">Sign Up</Link>
		</p>
	</Fragment>;
}

// <span>Forgotten pasword?</span>

Login.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(
	mapStateToProps,
	{ login })
	(Login);
