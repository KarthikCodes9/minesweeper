import React, { useEffect, useState } from 'react';
import Cell from './Cell';

function GameBoard({ game }) {
  const [board, setBoard] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    initBoard();
  }, [game]);

  const initBoard = () => {
    const newBoard = Array(game.size).fill(null).map(() => Array(game.size).fill({
      revealed: false,
      isMine: false,
      neighborMines: 0
    }));
    placeMines(newBoard);
    setBoard(newBoard);
  };

  const placeMines = (board) => {
    let minesPlaced = 0;
    while (minesPlaced < game.mines) {
      const x = Math.floor(Math.random() * game.size);
      const y = Math.floor(Math.random() * game.size);
      if (!board[x][y].isMine) {
        board[x][y].isMine = true;
        minesPlaced++;
      }
    }
    calculateNeighborMines(board);
  };

  const calculateNeighborMines = (board) => {
    const directions = [
      [0, 1], [1, 0], [0, -1], [-1, 0],
      [1, 1], [1, -1], [-1, 1], [-1, -1]
    ];
    for (let i = 0; i < game.size; i++) {
      for (let j = 0; j < game.size; j++) {
        if (board[i][j].isMine) continue;
        let count = 0;
        directions.forEach(([dx, dy]) => {
          const ni = i + dx;
          const nj = j + dy;
          if (ni >= 0 && nj >= 0 && ni < game.size && nj < game.size) {
            if (board[ni][nj].isMine) count++;
          }
        });
        board[i][j].neighborMines = count;
      }
    }
  };

  const handleClick = (x, y) => {
    if (board[x][y].isMine) {
      setGameOver(true);
      revealBoard();
    } else {
      revealCell(x, y);
    }
  };

  const revealCell = (x, y) => {
    const newBoard = [...board];
    if (newBoard[x][y].revealed) return;

    newBoard[x][y].revealed = true;
    if (newBoard[x][y].neighborMines === 0) {
      const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0],
        [1, 1], [1, -1], [-1, 1], [-1, -1]
      ];
      directions.forEach(([dx, dy]) => {
        const ni = x + dx;
        const nj = y + dy;
        if (ni >= 0 && nj >= 0 && ni < game.size && nj < game.size) {
          revealCell(ni, nj);
        }
      });
    }
    setBoard(newBoard);
  };

  const revealBoard = () => {
    const newBoard = board.map(row => row.map(cell => ({ ...cell, revealed: true })));
    setBoard(newBoard);
  };

  return (
    <div className="text-center p-5">
      <h2 className="text-2xl mb-4">{game.name} - {gameOver ? "Game Over" : "In Progress"}</h2>
      <div className="grid" style={{ gridTemplateColumns: `repeat(${game.size}, minmax(0, 1fr))` }}>
        {board.map((row, i) =>
          row.map((cell, j) => (
            <Cell
              key={`${i}-${j}`}
              value={cell.isMine ? 'X' : cell.neighborMines}
              onClick={() => handleClick(i, j)}
              isRevealed={cell.revealed}
              onContextMenu={(e) => { e.preventDefault(); }}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default GameBoard;
