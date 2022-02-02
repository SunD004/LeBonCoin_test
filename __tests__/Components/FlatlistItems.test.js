import React from 'react';
import { render } from '@testing-library/react-native';
import { expect } from '@jest/globals';

import FlatlistItems from '../../src/Components/FlatlistItems';

const mockDataList = [
    { id: 1 },
    { id: 2 }
]

test('Render FlatlistItems Component', () => {
    const { getByTestId, getAllByTestId } = render(<FlatlistItems data={mockDataList} />)

    expect(getByTestId('FlatList')).toBeDefined()
    expect(getByTestId('FlatList').props.data).toEqual(mockDataList)
    expect(getAllByTestId('item').length).toBe(mockDataList.length)
});