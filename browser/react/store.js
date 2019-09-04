import {
  createStore,
  applyMiddleware,
  compose,
  thunkMiddleware,
  combineReducers
} from "redux";
import lyricsReducer from "./reducers/lyrics-reducer";
import { createLogger } from "redux-logger";
import playerReducer from "./reducers/player-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers({
    lyrics: lyricsReducer,
    player: playerReducer
  }),
  composeEnhancers(applyMiddleware(createLogger(), thunkMiddleware()))
);
