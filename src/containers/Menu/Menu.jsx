import React from "react";
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./Menu.css";
import Main from '../../containers/Main/Main'
import Projects from '../Projects/Projects'
import Stack from '../Stack/Stack'
import Menu from '../Menu/Menu'
import Menu1 from '../Menu/Menu1'

class Navbar extends React.Component {
  render() {
    return (
      <div className="Menu">
      <nav className="NavbarItems">
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li className="nav-links" key={index}>
                <Link className={item.cName} to={item.url}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
          <Routes>
          <Route path="/" element ={<Menu1/>}/>
           <Route path="/src/containers/Menu" element ={<Menu1/>}/>
            <Route path="/src/containers/Main" element ={<Main/>}/>
            <Route path="/src/containers/Stack" element ={<Stack/>}/>
            <Route path="/src/containers/Projects" element ={<Projects/>}/>
          </Routes>
      </div>
    );
  }
}

export default Navbar;