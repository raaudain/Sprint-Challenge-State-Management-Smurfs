import React, {useState} from "react";
import {connect} from "react-redux";
import {postSmurfs} from "../../actions/SmurfAction"

function SmurfsForm(props){

    console.log("SmufsForm",props.smurfs)
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: 0,
        height: "",
        //id: Date.now()
    })



    const changeHandler = e => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: [e.target.value],
            
        })
    }

    console.log(setNewSmurf)

    const submitHandler = e => {
        e.preventDefault();
        props.postSmurfs(newSmurf);
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" name="name" placeholder="Name" onChange={changeHandler}></input>
                <input type="text" name="age" placeholder="Age" onChange={changeHandler}></input>
                <input type="text" name="height"placeholder="Height (in centimeters)" onChange={changeHandler}></input>
                <button>Submit Smurf</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    postSmurfs
}

// const mapStateToProps = state => {
//     console.log("SmurfsFormoo", state)
//     return{
//         smurfs: state.smurfs
//     }
    
// }
export default connect(null, mapDispatchToProps)(SmurfsForm)