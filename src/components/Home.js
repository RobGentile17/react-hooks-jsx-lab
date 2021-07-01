import React from "react";
import { name, city } from "../data/data.js";

function Home() {
 const color = "firebrick"
  return <div id="home">
    <h1 style={{color: color}}>
      {name} is a web developer from {city}
    </h1>
  </div>;
}

export default Home;
