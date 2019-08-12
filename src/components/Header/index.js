import React from "react";
import "./style.css";

function Header(props) {
    return <div className="header">
    <nav className="navbar navbar-light bg-light">
    <span className="title navbar-brand mb-0 h1">GOT CLICKY</span>
    <span className="scores navbar-brand mb-0 h1">
      Score: {props.score} | Top Score: {props.topScore}
    </span>
    </nav>
    <hearder className="header">
      <h1>Transformer Clicky Game!</h1>
      <h2>"Click on any image to earn a point, but don't click on the same image more than once. Click all 12 characters, and you win!"</h2>


    </hearder>
  </div>


}

export default Header;
