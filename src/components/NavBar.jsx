import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  return (
    <div style={{padding: '20px', fontSize: '20px'}}>
        <Link style={{float: 'left', color: '#008080'}} to='/'>Home</Link>
        <Link style={{float: 'right', color: '#008080'}} to='/pets'>List of Pets</Link>
    </div>

  );
}

export default NavBar;
