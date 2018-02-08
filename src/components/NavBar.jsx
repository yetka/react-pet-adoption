import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  return (
    <div style={{padding: '40px', fontSize: '30px'}}>
      <Link style={{float: 'left', color: 'white'}} to='/'>Home</Link>
      <Link style={{float: 'right', color: 'white'}} to='/pets'>List of Pets</Link>
    </div>

  );
}

export default NavBar;
