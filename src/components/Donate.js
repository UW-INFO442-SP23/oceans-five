import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

export default function Donate(props) {
    return (
        <div class='landing'>
            <Nav />
            <div class="landing-text">
                <div><h1>Discover life underwater through snorkeling</h1></div>
                <div>
                    <Link to='/Search'>
                        <button type="button" id="dive-in">
                            <h4>Dive in!</h4>
                        </button>
                    </Link>
                </div>
                <div><p>New to snorkeling? Learn more.</p></div>
            </div>
        </div>
    );
}