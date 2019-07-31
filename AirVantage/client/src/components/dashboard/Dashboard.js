import React, { useState, useEffect, Fragment } from 'react';

// import Posts from './components/Posts';
import Posts2 from './components/Posts2';
import Pagination from './components/Pagination';
import Search from './components/Search';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      // const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_start=10&_limit=10');
      setPosts(res.data);
      setLoading(false);
      setData(res.data);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  let empty = true;

  const updateLists = (updateLists, empty) => {
    if (!empty) {
      return setPosts(updateLists);
    }
    setPosts(data);
  };

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Your Information</h1>
      <Search
        empty={empty}
        posts={data}
        updateLists={updateLists}
      />
      {/* <Posts 
        posts={currentPosts} 
        loading={loading} /> */}

      <Posts2
        posts={currentPosts}
        loading={loading} />

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate} />
    </div>
  );
};

export default Dashboard;
