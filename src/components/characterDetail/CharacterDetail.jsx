import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacterById } from '../../hooks/characters';
import styles from './CharacterDetail.css';

const CharacterDetail = () => {
  const { _id } = useParams();
  const { loading, character } = useCharacterById(_id);
  if(loading) return <h1>Loading...</h1>;

  return (
    <div className={styles.CharacterDetail}>
      <h1>
        {character.name}
      </h1>
      <img src={character.photoUrl} alt={character.name}/>
      <div>Affiliation: {character.affiliation}</div>
      {character.eye && <div>Eye color: {character.eye}</div>}
      {character.hair && <div>Hair color: {character.hair}</div>}
      {character.weapon && <div>Weapon: {character.weapon}</div>}
    </div>
    
  );
};

export default CharacterDetail;
