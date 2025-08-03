import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaRedoAlt } from 'react-icons/fa';

interface FlipCardProps {
  index: number;
  flippedCard: number | null;
  onFlip: (index: number) => void;
  className?: string;
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  cardVariants?: Variants;
  flipVariants?: Variants;
}

export const FlipCard: React.FC<FlipCardProps> = ({
  index,
  flippedCard,
  onFlip,
  className = '',
  frontContent,
  backContent,
  cardVariants = {
    hidden: { scale: 1, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0 },
  },
  flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  }
}) => {
  const isFlipped = flippedCard === index;

  return (
    <motion.div
      className={`relative cursor-pointer perspective-1000 ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      onClick={() => onFlip(index)}
    >
      {/* Front side */}
      <motion.div
        className="absolute inset-0 bg-gray-900/80 backdrop-blur-md rounded-lg p-4 flex flex-col items-center justify-center text-center"
        variants={flipVariants}
        animate={isFlipped ? 'back' : 'front'}
        style={{ 
          transformStyle: 'preserve-3d', 
          backfaceVisibility: 'hidden', 
          WebkitBackfaceVisibility: 'hidden' 
        }}
      >
        {/* Flip indicator */}
        <div className="absolute top-2 right-2">
          <FaRedoAlt className="text-yellow-300/60 text-sm animate-pulse" />
        </div>
        {frontContent}
        <p className="text-yellow-300/80 text-xs mt-2">Click to flip</p>
      </motion.div>

      {/* Back side */}
      <motion.div
        className="absolute inset-0 bg-gray-800/90 backdrop-blur-md rounded-lg p-4 overflow-y-auto"
        variants={flipVariants}
        animate={isFlipped ? 'front' : 'back'}
        style={{ 
          transformStyle: 'preserve-3d', 
          backfaceVisibility: 'hidden', 
          WebkitBackfaceVisibility: 'hidden' 
        }}
      >
        {/* Flip back indicator */}
        <div className="absolute top-2 right-2">
          <FaRedoAlt className="text-yellow-300/60 text-sm animate-pulse" />
        </div>
        {backContent}
        <p className="text-yellow-300/80 text-xs mt-2 text-center">Click to flip back</p>
      </motion.div>
    </motion.div>
  );
};
