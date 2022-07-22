import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};


function NavBar(){
    return(
      <div>
      <NavLink to="/" exact={linkStyles} activeStyle={{background: "darkblue", }}>Home</NavLink>
      <NavLink to="/about" exact={linkStyles} activeStyle={{background: "darkblue", }}>about</NavLink>
      <NavLink to="/login" exact={linkStyles} activeStyle={{background: "darkblue", }}>Home</NavLink>
      </div>
    )
  }

  export default NavBar;