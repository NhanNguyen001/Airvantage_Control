import React from "react";
import Posts from "./module-info/Posts"

const Dashboard = () => {
  let posts = [
    {
      name: "Module 1",
      serialnumber: 1234456,
      imei: 98979799,
      macaddress: "ADFDSCCCCC"
    },
    {
      name: "Module 2",
      serialnumber: 2323231234456,
      imei: 98978879799,
      macaddress: "abcdssasd"
    }

  ]
  return (
    <div>
      <p><Posts posts={posts}/></p>
      {/* <h1>Hello</h1> */}
    </div>
  );
};

export default Dashboard;
