import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WordList from './pages/WordList';
import WordsState from './context/WordsState';
function App() {
  return (
    <WordsState>
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/list" component={WordList} />
          </Switch>
        </BrowserRouter>
      </div>
    </WordsState>
  );
}

export default App;
