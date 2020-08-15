import React, { useReducer, useEffect } from 'react';
import { wordsReducer } from './wordsReducer';
import { WordsContext } from './wordsContext';
import { deleteWord, addWord as add } from './actions';
import { GET_NEW_WORD } from './types';

const WordsState = ({ children }) => {
  const [state, dispatch] = useReducer(wordsReducer, [], () => {
    const localData = localStorage.getItem('words');
    return localData ? JSON.parse(localData) : [];
  });

  const addWord = (word, translatedWord) => {
    dispatch(add(word, translatedWord));
  };

  const removeWord = (id) => {
    dispatch(deleteWord(id));
  };
  const getNewWord = () => {
    dispatch({
      type: GET_NEW_WORD,
    });
  };
  useEffect(() => {
    localStorage.setItem('words', JSON.stringify(state));
  }, [state]);
  return (
    <WordsContext.Provider value={{ state, addWord, removeWord, getNewWord }}>
      {children}
    </WordsContext.Provider>
  );
};

export default WordsState;
