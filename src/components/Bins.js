import React, { Component } from 'react';
import BinsHeader from './BinsHeader';
import {Link} from 'react-router-dom';

export default class Bins extends Component {
    constructor() {
        super();
        this.state = {
            number:[1, 2, 3, 4, 5],
        }
    }


    render() {
        var bins = this.state.number.map((x, i, arr)=>{
            return <Link key={i} to={`/bins/${x}`}><div className="bins">Shelf {x}</div></Link>
        })

        return (
            <div>
                <BinsHeader 
                id = {this.props.match.params.id}/>
                {bins}
            </div>
        )
    }
}