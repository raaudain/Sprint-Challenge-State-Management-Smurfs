import React from "react";

const Smurfs = props => {

    console.log("Smurfs", props.smurf)

    return(
        <div>
            <p>Name: {props.smurf.name}</p>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
            <p>ID: {props.smurf.id}</p>
        </div>
    )
}

export default Smurfs;