import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterList from './CharacterList';
import { getCharacters } from '../../services/AvatarApi';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../services/AvatarApi.js');

describe('CharacterList component', () => {
  it('renders a loading page then a CharacterList', async() => {
    getCharacters.mockResolvedValue([{
      _id:'id',
      name:'Dude',
      photoUrl:'http://www.img.com/pic.jpg'
    }]);
    render(<MemoryRouter>
      <CharacterList />
    </MemoryRouter>);

    screen.getByText('Loading...');
    const characterList = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
      expect(characterList).toHaveTextContent('Dude');

    });
  });
});
