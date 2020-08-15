import React, { useContext } from 'react';
import { WordsContext } from '../context/wordsContext';

const Word = ({ id, word, translatedWord }) => {
  const { removeWord } = useContext(WordsContext);
  return (
    <li
      onClick={() => {
        removeWord(id);
      }}
      className="list-group-item"
    >
      {word + ' — ' + translatedWord}
    </li>
  );
};

export default Word;
