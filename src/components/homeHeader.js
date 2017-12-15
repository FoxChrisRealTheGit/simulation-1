import React from 'react';
import '../css/home.css';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';

export default function HomeHeader(){
    return(
            <header className="headerhome">
            <Link to="/"><div className = "brandhome">
                <img className="brandimghome" src={logo} alt="logo" />
                <p>Shelfie</p>
                </div></Link>
            </header>
    )
}