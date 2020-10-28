import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacterById } from '../../hooks/characters';


const CharacterDetail = () => {
  const { _id } = useParams();
  const { loading, character } = useCharacterById(_id);
  if(loading) return <h1>Loading</h1>;

  return (
    <>
      <h1>
        {character.name}
      </h1>
      <img src={character.photoUrl} alt={character.name}/>
      <div>Affliliation: {character.affiliation}</div>
      <div>Eye color: {character.eye}</div>
      <div>Hair color: {character.hair}</div>
      <div>Weapon: {character.weapon}</div>
    </>
    
  );
};

export default CharacterDetail;
