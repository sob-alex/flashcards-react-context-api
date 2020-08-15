import React, { useContext } from 'react';
import Word from './Word';
import { WordsContext } from '../context/wordsContext';

const List = () => {
  const { state } = useContext(WordsContext);
  console.log(state);
  return (
    <ul className="list-group w-75">
      {state.map((word) => {
        return (
          <Word key={word.id} id={word.id} word={word.word} translatedWord={word.translatedWord} />
        );
      })}
    </ul>
  );
};

export default List;
