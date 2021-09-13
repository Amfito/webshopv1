import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import HomeIcon from '@material-ui/icons/Home';
const NavBar = ({ title, subTitle }) => {
  return (
    <nav className='navbar bg-primary'>
      <ul className='navBarChoices'>
        <Link to = "/"><HomeIcon fontSize="medium"/></Link>
        <Link to='/pcParts' className=''>
          PC PARTS
        </Link>
        <Link to='/homeTech'>HOME TECH</Link>
        <Link to='/gaiming'>GAMING</Link>
      </ul>
      <ul className='navBarMenu'>
          <Link to ="/cart"><ShoppingCartOutlinedIcon fontSize="large"/></Link>
          <Link to ="/about"><InfoOutlinedIcon fontSize="large"/></Link>
          
      </ul>
      
    </nav>
  );
};
export default NavBar;