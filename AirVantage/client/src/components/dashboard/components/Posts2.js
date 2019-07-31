import React from 'react';
import './Posts2.css';

const Posts2 = ({ posts, loading }) => {

  // if(loading) return <Spinner />
  let table = posts.map((post, index) => {
      const { id, title } = post
      return (
        <tr key={id}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{id}</td>
            <td>{title}</td>
        </tr>
      )
    })

  return (
    <div>
      {/* <h1 id='title'>React Dynamic Table</h1> */}
      <table border="1">
        <thead>
          <tr>
            <th>Number</th>
            <th>Content</th>
            <th>Number</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {table}
        </tbody>
      </table>
    </div>
  );
};

export default Posts2;
