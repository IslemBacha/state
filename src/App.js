
import './App.css';
import Person from './Component/Person';
import React from 'react';
class App extends React.Component{
  constructor(){
    super()
    this.state={
      show:false
    }
  }
handlshow=()=>this.setState ({show:!this.state.show}) 
render(){
 return (
    <div className='bb'>
      <h3>STATE</h3>
      <button  onClick={this.handlshow}>{this.state.show? "hide" : "show"}</button>
      {
        this.state.show && <Person/>
      }
   
    </div>

  );
}
}


export default App;
