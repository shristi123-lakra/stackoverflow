import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../asset/Logo.png';
import  search from '../../asset/search-solid.svg';
import Avatar from '../Avatar/Avatar';

import  './Navbar.css';

 const Navbar =()=>{
  const User = null
  return(
    <nav>
  <div className='main-nav'>
<div className='navbar'>
  <>
    <Link to='/' className='nav-item nav-logo'>
      <img src ={Logo} alt='logo'/>
    </Link>
  <Link to='/'  className='nav-item nav-btn'>About </Link>
    <Link to='/'  className='nav-item nav-btn'>Product </Link>
    <Link to='/'  className='nav-item nav-btn'>For Terms</Link>
    <form>  
      <input type='text' placeholder='search...'/>
      <img src={search} alt="search"  width="18" className="search-icon"/>
       </form>
  
{User === null ?
 
   <Link  to='/Auth' className='nav-item nav-links'>Log in</Link>:
   <>
  <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%"
  color='white'><Link to='/User'  style={{color:"white", textDecoration:"none"}}></Link>M</Avatar> 
   <button className='nav-item nav-links'>Log out</button>
     </>
   }
  
  
    </>
    
    </div>
    </div>
    </nav>
    
    
)
 }
 export default Navbar