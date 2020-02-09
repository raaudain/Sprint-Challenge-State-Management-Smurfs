import {combineReducers} from "redux";
import {smurfReducer as smurfs} from "./SmurfReducer";
import {postSmurfReducer as newSmurf} from "./PostSmurfReducer";

export default combineReducers({
    smurfs,
    newSmurf
})