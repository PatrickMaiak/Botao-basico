import React, {useState} from 'react';
import './App.css';

function App() {

  var [str,setStr] = useState("Sem ação");

  function handleClick(){
    setStr("Com ação");
    
  }

  return (
    <div className="App">
     <h2>{str}</h2>
     <button id="box" onClick={()=>handleClick()}>click </button>   
    </div>
    
  );
}

export default App;
