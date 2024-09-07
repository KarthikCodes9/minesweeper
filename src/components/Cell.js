import React from 'react';

const Cell = ({ value, onClick, onContextMenu, isRevealed, isFlagged }) => {
  return (
    <div
      className={`flex items-center justify-center w-10 h-10 m-1 border-2 rounded-lg cursor-pointer transition-all duration-300 ease-in-out 
      ${isRevealed ? 'bg-white border-gray-300' : 'bg-gray-200 border-gray-400'} 
      ${isRevealed && value === 'X' ? 'text-red-600' : ''} 
      ${isRevealed && value !== 'X' ? 'text-blue-600' : ''}`}
      onClick={onClick}
      onContextMenu={onContextMenu}
    >
      {isRevealed ? (value === 0 ? '' : value) : isFlagged ? '🚩' : ''}
    </div>
  );
};

export default Cell;
