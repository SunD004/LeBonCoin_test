import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { expect } from '@jest/globals';

import Item from '../../src/Components/Item';

test('Render Item Component', () => {
    const { getAllByText, getByText, getByTestId } = render(<Item item={{
        url: "google.fr",
        thumbnailUrl: "google.com",
        albumId: "1",
        title: "Michael Jackson"
    }} />)
    const btnUrl = getByTestId(/link-url/i)
    const btnThumbnailUrl = getByTestId(/link-thumbnailUrl/i)

    fireEvent.press(btnUrl)
    fireEvent.press(btnThumbnailUrl)

    expect(getAllByText(/Voir plus/i)).toHaveLength(2)
    expect(getByText(/Michael Jackson/i)).toBeDefined()
    expect(getByText(/Album: 1/i)).toBeDefined()
    expect(btnUrl).toBeTruthy()
    expect(btnThumbnailUrl).toBeTruthy()

});