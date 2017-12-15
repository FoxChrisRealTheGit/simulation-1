import React, {Component} from 'react';
import HomeHeader from './homeHeader';
import {Link} from 'react-router-dom';
import '../css/home.css';

export default class Home extends Component{
    constructor(){
        super();
        this.state={
                names: ['A', 'B', 'C', 'D']
        }

    }


    render(){
        var bins = this.state.names.map((x, i)=>{
            return <Link key={i} to={`/bins/${x}`}><div className="bins">Shelf {x}</div></Link>
        });

        return(
            <div>
            <HomeHeader />
            {bins}
            </div>
        )
    }
}