import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';

export default function BinsHeader() {

    return (
        <header>
            <div className="brand">
                <Link to="/"><img className="brandimg" src="../assets/logo.png" alt="logo" /></Link>
            </div>
        </header>
    )
}