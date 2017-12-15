import React, {Component} from 'react';
import HomeHeader from './homeHeader';
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
            return <div key={i} className="bins">Shelf {x}</div>
        })
        return(
            <div>
            <HomeHeader />
            {bins}
            </div>
        )
    }
}