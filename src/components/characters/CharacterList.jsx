import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { useCharacters } from '../../hooks/characters';
import { Link } from 'react-router-dom';
import styles from './CharacterList.css';

const CharacterList = ({ page }) => {
  const { loading, characters } = useCharacters(page);
  
  if(loading) return <h1>Loading...</h1>;

  const characterElements = characters.map(character => (
    <li key={character._id}>
      <Link to={`/character/${character._id}`}>
        <Character {...character} />  
      </Link>
      
    </li>
  ));
  return (
    <ul data-testid="characters" className={styles.CharacterList}>
      {characterElements}
    </ul>
  );
};

CharacterList.propTypes = {
  page:PropTypes.number
};

export default CharacterList;
