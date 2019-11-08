import React from "react";
import Smurfs from "./Smurfs";

const SmurfsList = props => {
    console.log("SmurfsList", props.smurfs)
    return(
        <div className="container">
            {props.smurfs.map(smurf => <Smurfs key={smurf.id} smurf={smurf}/>)}
        </div>
    )
}

export default SmurfsList;