import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import Search from './Search';
import { deleteProfile } from '../../../actions/module';

import 'bootstrap/dist/css/bootstrap.css';
import './Posts.css';

class Posts extends Component {
  constructor() {
    super();

    this.state = {
      searchField: ''
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

 
  render(){
    const { posts, deleteProfile } = this.props;
    const { searchField } = this.state;
    const filteredMonsters = 
      posts.filter(post => post.name.toLowerCase().includes(searchField.toLowerCase()))
            .map((post, index) => {
              const { name, imei, macaddress, serialnumber, _id } = post
              return (
                <tr key={index} className="row100 body">
                  <td className="cell100 column1">{name}</td>
                  <td className="cell100 column2">{imei}</td>
                  <td className="cell100 column3">{macaddress}</td>
                  <td className="cell100 column4">{serialnumber}</td>
                  <td className="cell100 column5" class="removeButton" onClick={() => deleteProfile(_id)}>
                    {/* <i 
                      className="fas fa-times"
                      // class="removeButton"
                      onClick={() => deleteProfile(_id)}
                      ></i> */}
                  </td>
                </tr>
                )
              });       
    return (
      <div className="limiter">
        <div>
          <h2>Information Board</h2>
        </div>
        <div class="d-flex flex-row justify-content-between">
          <Search 
            placeholder="Search Profile"
            handleChange={this.handleChange}
          />
          
          <Link 
            type="button" 
            className="btn btn-primary"
            to='/create-module'>
            Add</Link>

        </div>
        <div className="container-table100">
          <div className="wrap-table100">
            <div className="table100 ver1 m-b-110">
              <div className="table100-head">
                <table>
                  <thead>
                    <tr className="row100 head">
                    <th className="cell100 column1">Name</th>
                      <th className="cell100 column2">IMEI</th>
                      <th className="cell100 column3">MAC Address</th>
                      <th className="cell100 column4">SERIAL NUMBER</th>
                      <th className="cell100 column5">Remove</th>
                    </tr>
                  </thead>
                </table>
              </div>

              <div className="table100-body">
                <table><tbody>{filteredMonsters}</tbody></table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  // education: PropTypes.array.isRequired,
  deleteProfile: PropTypes.func.isRequired
};

export default connect(null, 
  { deleteProfile }
)(Posts);
