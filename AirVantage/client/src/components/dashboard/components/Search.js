import React from 'react';

import './Search.css';

function Search({ posts, updateLists, empty }) {

  const filterPosts = (e, posts, empty) => {
    if (e.target.value.trim() === "") {
      return updateLists(posts, empty);
    }
    let content = e.target.value;
    let updatePosts = posts.filter(post => {
      const { title } = post;
      return title.toLowerCase().search(content.toLowerCase()) !== -1
    });
    empty = false;
    return updateLists(updatePosts, empty);
  };

  return (
    <div className="Search">
      <input
        onChange={(e) => filterPosts(e, posts, empty)}
        type="text"
        placeholder="Please Search.."
        name="search" />

      {/* <button
        className="profileButton"
        type="button"
      >Profile <img src="https://image.flaticon.com/icons/png/512/25/25634.png" /></button> */}

      <button
        className="addButton"
        type="button"
      >Add <img src="http://www.pngmart.com/files/8/Plus-PNG-Transparent-Image.png" /></button>

    </div>
  );
}

export default Search;