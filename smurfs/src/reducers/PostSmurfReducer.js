import {START_POSTING, POST_SUCCESS, POST_FAILURE} from "../actions/SmurfAction";


const initialState = {
    smurfs: [{
    name: "Brainey",
    age: 5,
    height: "5cm",
    id: 0
    }]
}



const postSmurfReducer = (state=initialState, action) => {
   switch(action.type){
       case START_POSTING:
           return{
               ...state,
               isFetching: true,
               error: null
           }
       case POST_SUCCESS:

           return{
               ...state,
               isFetching: false,
               error: null,
               smurfs: [...state.smurfs, action.payload]
           }
       case POST_FAILURE:
           return{
               ...state,
               isFetching: false,
               error: action.payload
           }
       default:
           return state;
   }
}

export default postSmurfReducer;