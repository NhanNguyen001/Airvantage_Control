import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src="https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png" /> */}
        <div class="container">

          <div class="row">
            <div class="col-lg-4 col-md-3"></div>
            <div class="col-lg-4 col-md-6 user-profile-form">
              <h5>USER PROFILE</h5>
              <form class="form" role="form">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="user_name"
                    id="user_name"
                    placeholder="Username.." />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="first_name"
                    id="first_name"
                    placeholder="Firstname.." />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="last_name"
                    id="last_name"
                    placeholder="Lastname.." />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="mob_num"
                    id="mob_num"
                    placeholder="Mobile Number.." />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="address"
                    id="address"
                    placeholder="Address.." />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="date"
                    id="byear"
                    placeholder="Date of Birth.." />
                </div>
              </form>
              <button class="btn btn-success col-lg-12 btn-block btn-submit"><i class="fa fa-paper-plane-o" aria-hidden="true"></i>&nbsp; Submit</button>
              <button class="btn btn-danger col-lg-12 btn-block btn-submit"><i class="fa fa-key fa-rotate-180" aria-hidden="true"></i>&nbsp; Change Password</button>
            </div>
            <div class="col-lg-4 col-md-3"></div>
          </div>
        </div>

        {/* <p>
          This is the flipping 'add' button.
         </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Learn React</button>
        </a> */}
      </header>
    </div>
  );
}

export default App;



// import React, { Fragment, useState } from 'react';
// import { Link, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// // import PropTypes from 'prop-types';
// // import { login } from '../../actions/auth';
// import './addInfo.css';

// const App = ({ login, isAuthenticated }) => {
// 	const [formData, setFormData] = useState({
// 		email: '',
//         password: '',
//         username: '',
//         phone: '',
//         address: '',
//         city: '',
//         birthyear: '', //correct?
// 	});
// 	// Relate to state and setState in class component

// 	const { email, password } = formData;

// 	const onChange = e =>
// 		setFormData({ ...formData, [e.target.name]: e.target.value });

// 	const onSubmit = async e => {
// 		e.preventDefault();
// 		login(email, password, username, phone, address, city, birthyear);
// 	};

