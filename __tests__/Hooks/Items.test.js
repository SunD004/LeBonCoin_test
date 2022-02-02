import { API_URL_ITEMS } from "@env";

import { expect } from '@jest/globals';
import axios from 'axios';

test('API_URL_ITEMS response 200', async () => {
    const res = await axios.get(API_URL_ITEMS)
    expect(res.status).toBe(200)
});