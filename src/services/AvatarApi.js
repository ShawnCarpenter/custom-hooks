export const getCharacters = async(page = 1) => {
  const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/?perPage=20&page=${page}`);
  
  if(!res.ok)  throw 'Uh-oh, something done broked!';

  const json = await res.json();

  return json.map(character => ({
    _id:character._id,
    name:character.name,
    photoUrl:character.photoUrl
  }));
};

export const getCharacterById = async(id) => {
  const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`, 
    { 
      headers: { 
        Origin:null 
      } 
    });
  if(!res.ok)  throw 'Uh-oh, something done broked!';

  const json = await res.json();
  return {
    _id:json._id,
    name:json.name,
    photoUrl:json.photoUrl,
    gender:json.gender,
    eye:json.eye,
    hair:json.hair,
    weapon:json.weapon,
    affiliation:json.affiliation
  };

};
