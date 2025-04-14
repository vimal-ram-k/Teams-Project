
import { render, screen } from '@testing-library/react'
import { describe , expect, it} from 'vitest';
import App from '../src/App';
import { MemoryRouter , Routes , Route } from 'react-router-dom';
import React from 'react';
import sum from '../src/helper/addnumber';

describe('App', () => {
  it('renders the App component', () => {
    const result = sum(12, 12);
    expect(result).equals(24);

  })
})