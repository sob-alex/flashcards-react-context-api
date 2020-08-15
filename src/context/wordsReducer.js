import { ADD_WORD, DELETE_WORD, GET_NEW_WORD } from './types';

export const wordsReducer = (state, action) => {
  switch (action.type) {
    case ADD_WORD:
      return [...state, action.payload];
    case DELETE_WORD:
      return state.filter((word) => action.payload.id !== word.id);
    case GET_NEW_WORD:
      return [...state];
    default:
      return state;
  }
};
