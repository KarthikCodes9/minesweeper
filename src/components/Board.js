import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import { saveGame, loadGame } from '../api';

const Board = ({ rows, cols, mines }) => {
  const [board, setBoard] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    initBoard();
  }, []);

  const initBoard = () => {
    let board = Array(rows).fill().map(() => Array(cols).fill({
      value: 0,
      isRevealed: false,
      isFlagged: false,
    }));
    setMines(board);
    setBoard(board);
  };

  const setMines = (board) => {
    let minesPlaced = 0;
    while (minesPlaced < mines) {
      let x = Math.floor(Math.random() * rows);
      let y = Math.floor(Math.random() * cols);

      if (board[x][y].value !== 'X') {
        board[x][y].value = 'X';
        minesPlaced++;
      }
    }
  };

  const handleClick = (x, y) => {
    if (gameOver || board[x][y].isRevealed) return;
    revealCell(x, y);
  };

  const revealCell = (x, y) => {
    let newBoard = [...board];
    newBoard[x][y].isRevealed = true;

    if (newBoard[x][y].value === 'X') {
      setGameOver(true);
      alert("Game Over");
      saveGame(newBoard, true);
    }

    setBoard(newBoard);
  };

  const handleRightClick = (e, x, y) => {
    e.preventDefault();
    if (gameOver || board[x][y].isRevealed) return;

    let newBoard = [...board];
    newBoard[x][y].isFlagged = !newBoard[x][y].isFlagged;
    setBoard(newBoard);
  };

  const handleLoadGame = async (id) => {
    const gameData = await loadGame(id);
    setBoard(gameData.board);
    setGameOver(gameData.gameOver);
  };

  return (
    <div className="p-4">
      {board.map((row, i) => (
        <div key={i} className="flex">
          {row.map((cell, j) => (
            <Cell
              key={j}
              value={cell.value}
              isRevealed={cell.isRevealed}
              isFlagged={cell.isFlagged}
              onClick={() => handleClick(i, j)}
              onContextMenu={(e) => handleRightClick(e, i, j)}
            />
          ))}
        </div>
      ))}
      <button onClick={() => handleLoadGame('some_game_id')} className="mt-4 p-2 bg-blue-500 text-white rounded-lg">Load Game</button>
    </div>
  );
};

export default Board;
