import { useEffect, useState } from 'react';
import { getCharacterById, getCharacters } from '../services/AvatarApi';

export const useCharacters = page => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters(page)
      .then(characters => setCharacters(characters))
      .finally(() => setLoading(false));
  }, [page]);
  return {
    loading,
    characters
  };
};

export const useCharacterById = _id => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState();

  useEffect(() => {
    getCharacterById(_id)
      .then(character => setCharacter(character))
      .finally(() => setLoading(false));
  }, [_id]);
  
  return {
    loading,
    character
  };
};
