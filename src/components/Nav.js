import React from 'react';

export default function Nav(props) {
    return (
        <div class='navbar'>
            <div class='nav-buttons' style={{marginLeft: 45}}><a href="/"><p>Home</p></a></div>
            <div class='nav-buttons'><a href="/Search"><p>Locate</p></a></div>
            <div class='nav-buttons'><a href="/Learn"><p>Learn</p></a></div>
            <div class='nav-buttons'><a href="/Donate"><p>Donate</p></a></div>
            </div>
    );
}