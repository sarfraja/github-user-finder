import React from 'react'
import {Link} from 'react-router-dom';
import './FrontPage.css';

const FrontPage= () => {
    return (
      
        <div class="Header">
        <div class="Header-background"></div>
        <div class="Header-content">
          <div class="Header-hero">
            <h1>Github Finder</h1>
            <p>The best app you've ever seen</p>
           
            <Link to="/search" class="Button">FIND</Link>
            
          </div>
          <div class="Header-visuals">
            <div class="Iphone"></div>
          </div>
        </div>
        
      </div>
    )
}

export default FrontPage;

