import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger"
import {composeWithDevTools} from "redux-devtools-extension";
import smurfReducer from "./reducers/SmurfReducer";

const store = createStore(smurfReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
