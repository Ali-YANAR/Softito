import { createStore, combineReducers } from 'redux';

// Action Types
export const SET_CONTENT   = 'SET_CONTENT';
export const SET_FILENAME  = 'SET_FILENAME';

// Reducers
function fileReducer(state = { content: '{"isim": "Ahmet", "yas": 30}', filename: 'veri' }, action) {
  switch (action.type) {
    case SET_CONTENT:  return { ...state, content: action.payload };
    case SET_FILENAME: return { ...state, filename: action.payload };
    default: return state;
  }
}

const store = createStore(combineReducers({ file: fileReducer }));
export default store;
