import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { WordsContext } from '../context/wordsContext';

const Navbar = () => {
  return (
    <ul className="nav nav-pills nav-fill border border-light">
      <li className="nav-item">
        <NavLink className="nav-link " to="/" exact>
          Flashcards
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/list">
          Add new word
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
