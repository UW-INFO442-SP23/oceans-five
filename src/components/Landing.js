import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

export default function Landing(props) {
    return (
        <div class='landing'>
            <div class="landing-text">
                <div><h1>Discover life underwater through snorkeling</h1></div>
                <div>
                    <Link to='/Search'>
                        <button type="button" id="dive-in">
                            <h4>Dive in!</h4>
                        </button>
                    </Link>
                </div>
                <div><p id="landing-p">New to snorkeling? <a id='landing-link' href="/Learn">Learn more.</a></p></div>
            </div>
        </div>
    );
}
