import { createStore, applyMiddleware, compose, thunkMiddleware } from "redux";
import reducer from "./reducers/root-reducer";
import { logger } from "redux-logger";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger), thunkMiddleware())//agustinadimatteo
);
