import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Search from './Search';
import 'bootstrap/dist/css/bootstrap.css';
import './Posts.css';

// PAGINATION
// import Pagination from './components/Pagination';
// import { getProfiles } from "../../actions/module";


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


  render() {
    const { posts } = this.props;
    const { searchField } = this.state;
    const filteredMonsters =
      posts.filter(post => post.name.toLowerCase().includes(searchField.toLowerCase()))
        .map((post, index) => {
          const { name, imei, macaddress, serialnumber, remove } = post
          return (
            <tr key={index} className="row100 body">
              <td className="cell100 column1">{name}</td>
              <td className="cell100 column2">{imei}</td>
              <td className="cell100 column3">{macaddress}</td>
              <td className="cell100 column4">{serialnumber}</td>
              <td className="cell100 column5">{remove} <i class="fas fa-times"></i></td>
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
            // class="addButton"
            type="button"
            className="addButton"
            // className="addButton"
            to='/create-module'>
            Add</Link>

          {/* <Link
            type="button"
            className="btn btn-primary"
            // className="removeButton"
            to="/remove-module">
            Remove
          </Link> */}

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

              {/* <Pagination
                postsPerPage={postsPerPage}
                totalPosts={profiles.length}
                paginate={paginate} /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
