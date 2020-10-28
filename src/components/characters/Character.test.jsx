import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  afterEach(() => cleanup());
  it('renders Character', () => {
    const { asFragment } = render(<Character
      name="Analay"
      photoUrl="http://photo.com/img.jpg"/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
