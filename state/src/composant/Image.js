
import './Image.css'


function Image(props) {

  const handleAlert=e=>{

    props.handleName(props.name)
}
    return (
      <div className="img-container">
       <div>{props.children} </div>
       <button onClick={handleAlert} > {props.button} </button>
       <div className='container'>
        <h1>  {props.name}  </h1>
        <h3> {props.job} </h3>
        <p> {props.bio} </p>
       </div>
      </div>
    );
  }
  

  export default Image;