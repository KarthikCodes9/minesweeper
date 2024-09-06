

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/games';

export const saveGame = async (board, gameOver) => {
    const response = await axios.post(`${API_URL}/save`, { board, gameOver });
    return response.data;
};

export const loadGame = async (id) => {
    const response = await axios.get(`${API_URL}/load/${id}`);
    return response.data;
};