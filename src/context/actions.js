import { DELETE_WORD, ADD_WORD } from './types';

export function addWord(word, translatedWord) {
  return {
    type: ADD_WORD,
    payload: {
      id: Math.random(),
      word,
      translatedWord,
    },
  };
}

export function deleteWord(id) {
  return {
    type: DELETE_WORD,
    payload: {
      id,
    },
  };
}
