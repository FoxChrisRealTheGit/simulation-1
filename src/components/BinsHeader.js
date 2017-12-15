import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';
import logo from '../assets/logo.png';

export default class BinsHeader extends Component {
    constructor(){
    super();
    this.state={
        letter:[],
    }
}

componentWillReceiveProps(){
    this.setState({
        letter : this.props.match.params.id
    })
}

render(){
    return (
        <header className="headerbins">
            <div className="brandbins">
                <Link to="/"><img className="brandimgbins" src={logo} alt="logo" /></Link>
            </div>
            <div className="shelfName">
            <h1>Shelf {this.state.letter}</h1>
            </div>
        </header>
    )
}
}