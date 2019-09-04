import { START_PLAYING, STOP_PLAYING } from "../constants";

const startPlaying = () => ({ type: START_PLAYING });

const stopPlaying = () => ({ type: STOP_PLAYING });

const setCurrentSong = currentSong => ({
  type: SET_CURRENT_SONG,
  currentSong
});

const setCurrentSongList = currentSongList => ({
  type: SET_LIST,
  currentSongList
});

export const start = (song, list) => dispatch => {
  dispatch(setCurrentSong(song));
  dispatch(setCurrentSongList(list));
  dispatch(loadSong(song.audioUrl));
};

export const loadSong = audioUrl => dispatch => {
  audio.src = audioUrl;
  audio.load();
  dispatch(audio.play());
};

export const play = () => dispatch => {
  audio.play();
  dispatch(startPlaying());
};

export const stop = () => dispatch => {
  audio.stop();
  dispatch(stopPlaying());
};

const findSongIndex = (currentSong, currentSongList) => {
  return currentSongList.findIndex(song => song.id === currentSong.id);
};

export const next = () => (dispatch, getState) => {
  const { currentSongList, currentSong } = getState().player;
  let index = findSongIndex(currentSongList, currentSong) + 1;
  if (index > currentSongList.length - 1) {
    index = 0;
  }
  const song = currentSongList[index];
  dispatch(setCurrentSong(song));
  dispatch(loadSong(song.audioUrl));
};
export const previous = () => (dispatch, getState) => {
  const { currentSongList, currentSong } = getState().player;
  let index = findSongIndex(currentSongList, currentSong) - 1;
  if (index < 0) {
    index = currentSongList.length - 1;
  }
  const song = currentSongList[index];
  dispatch(setCurrentSong(song));
  dispatch(loadSong(song.audioUrl));
};
import {
  START_PLAYING,
  STOP_PLAYING,
  SET_CURRENT_SONG,
  SET_LIST
} from "../constants";

export const initialPlayerState = {
  currentSong: {},
  currentSongList: [],
  isPlaying: false,
  progress: 0
};
export default function(state = initialPlayerState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SET_CURRENT_SONG:
      newState.currentSong = action.currentSong;
      break;
    case SET_LIST:
      newState.currentSongList = action.currentSongList;
      break;
    case START_PLAYING:
      newState.isPlaying = true;
      break;
    case STOP_PLAYING:
      newState.isPlaying = false;
      break;
    default:
      return state;
  }
  return newState;
}
