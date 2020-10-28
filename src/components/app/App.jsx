import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CharacterDetailPage from '../../pages/CharacterDetailPage';
import CharacterPage from '../../pages/CharacterPage';
import { Header } from '../header/Header';
import styles from './App.css';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={CharacterPage} />
        <Route exact path="/character/:_id" component={CharacterDetailPage} />
      </Switch>
    </Router>
    
  );
}
