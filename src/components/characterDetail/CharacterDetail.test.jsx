import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';
import { getCharacterById } from '../../services/AvatarApi';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../services/AvatarApi.js');

describe('CharacterDetail component', () => {
  it('renders a loading page then a CharacterDetail', async() => {
    getCharacterById.mockResolvedValue({
      _id:'id',
      name:'Peter Parker',
      photoUrl:'http://www.img.com/pic.jpg',
      affiliation:'Daily Bugle',
      eye:'brown',
      hair:'brown',
      weapon:'Camera'
    });

    render(<MemoryRouter>
      <CharacterDetail />
    </MemoryRouter>);

    screen.getByText('Loading...');
    const photo = await screen.findByAltText('Peter Parker');

    return waitFor(() => {
      expect(photo).toHaveAttribute('src', 'http://www.img.com/pic.jpg');

    });
  });
});
