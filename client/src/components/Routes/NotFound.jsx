import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => (
  <div>
    <h1>Not found</h1>
    <center>
      <Link to="/">Return to Home Page</Link>
    </center>
  </div>
);

export default Notfound;
