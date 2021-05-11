import React , { Component } from 'react'


class Something extends Component{
    constructor(props){
        super(props);
        this.state= {
            count :0,
        }
    }

    addone=()=>{
        this.setState({count: this.state.count + 1})
    }
    minusOne=()=>{
        this.setState({count:this.state.count - 1})
    }
    // reste =()=>{this.setState({count:0})}

    
    render(){
        const count= this.state.count
        return(
            <div>
            <h1>{count} </h1>
            <button onClick={this.addone}>+1</button>
            <button onClick={ this. minusOne}>-1</button>
            </div>
        )
    }
}
export default Something;
