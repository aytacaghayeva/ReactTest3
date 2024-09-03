import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";


class Header extends Component {
    render() {
      return (
        <div className="logo">
            <p className="disney">WALT DISNEY</p>
        </div>
      );
    }
  }
  
  export default Header;
  