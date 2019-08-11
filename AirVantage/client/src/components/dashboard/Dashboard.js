import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import { getProfiles } from "../../actions/module";
import './Dashboard.css';

const Dashboard = ({
  getProfiles, profiles: { profiles, loading }
}) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = profiles.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container'>
      <Posts
        posts={currentPosts}
        loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={profiles.length}
        paginate={paginate} />
    </div>
  );
};

Dashboard.propTypes = {
  profiles: PropTypes.object.isRequired,
  getProfiles: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profiles: state.module
});

export default connect(
  mapStateToProps,
  { getProfiles}
)(Dashboard);