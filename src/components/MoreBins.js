import React ,{Component} from 'react';
//newheader
export default class MoreBins extends Component{
    constructor(){
        super();
        this.state={
                names: ['A', 'B', 'C', 'D']
        }

    }


    Render(){
        var bins = this.state.names.map((x, i)=>{
            return <Link key={i} to={`/bins/${x}`}><div className="bins">Bin {x}</div></Link>
        });

        return(
            <div>
                {bins}
            </div>
        )
    }
}