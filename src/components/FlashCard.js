import React, { useContext } from 'react';
import { WordsContext } from '../context/wordsContext';

const FlashCard = () => {
  const { state, getNewWord } = useContext(WordsContext);
  const random = Math.floor(Math.random() * state.length);
  const randomWord = state[random];
  return state.length ? (
    <div className="container">
      <div className="card text-center w-75 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{randomWord.word}</h5>
          <p className="card-text">{randomWord.translatedWord}</p>
          <button onClick={getNewWord} className="btn btn-primary">
            Следующее слово
          </button>
        </div>
      </div>
    </div>
  ) : (
    <h2>Пусто...</h2>
  );
};

export default FlashCard;
