import React  ,{Component} from 'react'

class Checkpoint extends Component {
  
    state = { 
      Persone :{
      nom : 'Kadri',
      prenom :'Imrane',
      bio :'Nothing',
      
    },
    
    start : false,
    counter : 0

     };
     incrementationCounter =()=> ({
      counter: this.setState({ counter : this.state.counter + 1})
    });
    componentDidMount() {
      setInterval(
         this.incrementationCounter,
        1000
      );
    }

  
   clicked = () =>
    this.setState({
      start: !this.state.start
    });
  
  render(){
    
    return(
        <div>
       <h2>{ this.state.counter} </h2>
  
       <button onClick={this.clicked}>{this.state.start ? "hide" :"show"}</button>
        {this.state.start && 
        <div>
          <h1>
            {this.state.Persone.nom} 
            </h1>
            <h1>
            {this.state.Persone.prenom}
            </h1>
            <h1>
            {this.state.Persone.bio}
          </h1>
        </div>
        
        }
        </div>
    )
}
}
 
export default Checkpoint;