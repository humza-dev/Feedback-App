import React from "react";
import { Link } from "react-router-dom";

import Card from "../shared/card";

function Aboutpage() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>This a react app to leave feedback for product or service</p>
        <p>Version : 1.0.0</p>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default Aboutpage;
