import React from "react";
import { NavLink } from "react-router-dom";

const Games = () => (
  <>
    <div className="header">
      <NavLink to="/" >‹</NavLink>
      <h1>Free Games DB</h1>
    </div>
    <div>
      games
    </div>
  </>
)

export default Games;