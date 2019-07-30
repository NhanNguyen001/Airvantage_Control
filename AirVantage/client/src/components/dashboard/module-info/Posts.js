import React from "react";
import { Table } from "reactstrap";

import "./Posts.css";

const Posts = (props) => {
  let table = props.posts.map((post, index) => {
    const { imei, macaddress, name, serialnumber } = post;
    return (
      <tr key={index}>
        <td>{name}</td>
        <td>{imei}</td>
        <td>{serialnumber}</td>
        <td>{macaddress}</td>
      </tr>
    );
  });

  return (
    <div>
      <Table bordered>
        <thead>
          <tr>
            <th scope="row">#</th>
            <th scope="row">Name</th>
            <th scope="row">Imei</th>
            <th scope="row">Macaddress</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </Table>
    </div>
  );
};

export default Posts;
