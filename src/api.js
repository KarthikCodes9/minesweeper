

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/games';

export const listGames = async () => {
    const response = await fetch('/api/games');
    return await response.json();
};

export const loadGame = async (id) => {
    const response = await fetch(`/api/games/${id}`);
    return await response.json();
};

export const saveGame = async (game) => {
    const response = await fetch('/api/games', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(game)
    });
    return await response.json();
};