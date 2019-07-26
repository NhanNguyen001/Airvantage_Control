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
