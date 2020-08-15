import React, { useState, useContext } from 'react';
import { WordsContext } from '../context/wordsContext';

const Form = () => {
  const [word, setWord] = useState('');
  const [translatedWord, setTranslatedWord] = useState('');

  const { addWord } = useContext(WordsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(word, translatedWord);
    addWord(word, translatedWord);
    setWord('');
    setTranslatedWord('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group w-75">
        <input
          value={word}
          type="text"
          onChange={(e) => {
            setWord(e.target.value);
          }}
          className="form-control"
          placeholder="Введите слово"
        />
        <input
          value={translatedWord}
          type="text"
          onChange={(e) => {
            setTranslatedWord(e.target.value);
          }}
          className="form-control"
          placeholder="Введите перевод"
        />
        <button className="invisible-button" type="submit"></button>
      </div>
    </form>
  );
};

export default Form;
