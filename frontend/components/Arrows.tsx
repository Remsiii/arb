import React from 'react';

interface ArrowsProps {
  handleArrowClick: (direction: 'left' | 'right') => void;
  direction: 'left' | 'right';
}

const Arrows: React.FC<ArrowsProps> = ({ handleArrowClick, direction }) => {
  return (
    <button onClick={() => handleArrowClick(direction)} className="text-black mx-2 text-lg">
      {direction === 'left' ? '<' : '>'}
    </button>
  );
}

export default Arrows;
