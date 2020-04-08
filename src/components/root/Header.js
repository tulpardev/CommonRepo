import React,{useState} from "react";
import { Link,NavLink } from "react-router-dom";

function Header() {

  const [isNavOpen,setIsNavOpen]= useState(false)
   const buttonClicked=()=> {
    setIsNavOpen(!isNavOpen)
    }
  return (
    <header>
      <nav className="container navbar navbar-expand-lg justify-content-between">
        <a className="navbar-brand">
          Histogram
        </a>
        <button onClick={buttonClicked} className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse" style={{display:isNavOpen?"block":"none"}}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/dashboard" activeClassName="active" className="nav-link">
                Ana Sayfa
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
