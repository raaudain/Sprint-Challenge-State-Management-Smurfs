import React, {useEffect} from "react";
import "./App.css";
import {fetchSmurfs} from "../actions/SmurfAction";
import {connect} from "react-redux";
import SmurfsList from "./Smurfs/SmurfsList";
import SmurfsForm from "./Smurfs/SmurfsForm"

function App(props) {

  useEffect(() => {
    props.fetchSmurfs()
  },[])


  
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <SmurfsList smurfs={props.smurfs}/>
      <SmurfsForm 
      smurfs={props.smurfs}
      />
    </div>
  );
}

// const mapDispatchToProps = {
//   fetchSmurfs
// }

const mapStateToProps = state => {

  console.log("state", state.smurfs)
  return{
    smurfs: state.smurfs
  }
}
  

export default connect(mapStateToProps, {fetchSmurfs})(App);
