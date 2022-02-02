import React from 'react';
import { render } from '@testing-library/react-native';
import { expect } from '@jest/globals';

import App from '../App';

test('Render App Screen', () => {
  const { getByTestId } = render(<App />)
  expect(getByTestId("app")).toBeDefined()
});