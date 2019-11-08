import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from "../actions/SmurfAction";


// const initialState = {
//     name: "Brainey",
//     age: 5,
//     height: "5cm",
//     id: 0
// }

const initialState = {
    smurfs: [],
    isFetching: false,
    error: null
}

const smurfReducer = (state=initialState, action) => {
    switch(action.type){
        case START_FETCHING:
            return{
                ...state,
                isFetching: true,
                error: null
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                isFetching: false,
                error: null,
                smurfs: action.payload
            }
        case FETCH_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export default smurfReducer;