import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

export default function Learn(props) {
    return (
        <div>
            <div id="static-pages-text">
                <h1>Learn more about life under water</h1>
                <h4>Take a dive into the world of aquatic life and discover a new love for the natural world.</h4>
                <h4>Click on the links below to learn more about the ocean and how to navigate it.</h4>
                <iframe width="700" height="400"
                    src="https://www.youtube.com/embed/9GljSvw7r3g">
                </iframe>

            </div>
        </div>
    );
}