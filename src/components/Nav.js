import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
    return (
        <div class='navbar'>
            <div class='nav-buttons'><Link to="/Search" style={{ textDecoration: 'none', color:'white' }}><p>Locate</p></Link></div>
            <div class='nav-buttons'><Link to="" style={{ textDecoration: 'none', color:'white' }}><p>Learn</p></Link></div>
            <div class='nav-buttons'><Link to="" style={{ textDecoration: 'none', color:'white' }}><p>Donate</p></Link></div>
        </div>
    );
}