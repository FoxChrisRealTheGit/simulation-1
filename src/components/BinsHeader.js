import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';
import logo from '../assets/logo.png';

export default function  BinsHeader(){
    




    return (
        // 54D
        <header className="headerbins">
        {/* 54C */}
            <div className="brandbins">
            {/* 54E */}
            {/* 54H */}
            {/* 54J */}
                <Link to="/"><img className="brandimgbins" src={logo} alt="logo" /></Link>
            </div>
            <div className="shelfName">
            {/* 54F */}
            <h1>Shelf {this.props.id}</h1>
            </div>
        </header>
    )
}
