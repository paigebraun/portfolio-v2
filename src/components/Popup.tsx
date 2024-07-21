import React, { useEffect, useRef, useState } from 'react';
import { MdClose, MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';

interface PopupProps {
  isOpen: boolean;
  src: string;
  onClose: () => void;
  currentIndex: number;
  totalImages: number;
  nextImage: () => void;
  prevImage: () => void;
  showCounter?: boolean;
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  src,
  onClose,
  currentIndex,
  totalImages,
  nextImage,
  prevImage,
  showCounter = false
}) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const [startTouchX, setStartTouchX] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeydown);
    } else {
      window.removeEventListener('keydown', handleKeydown);
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [isOpen, nextImage, prevImage, onClose]);

  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartTouchX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startTouchX === null) return;

    const endTouchX = e.changedTouches[0].clientX;
    const swipeThreshold = 50; // Minimum distance for swipe to be recognized

    if (startTouchX - endTouchX > swipeThreshold) {
      nextImage(); // Swipe left
    } else if (endTouchX - startTouchX > swipeThreshold) {
      prevImage(); // Swipe right
    }

    setStartTouchX(null); // Reset touch start position
  };

  if (!isOpen) return null;

  return (
    <div
      ref={popupRef}
      className={`fixed inset-0 bg-white flex items-center justify-center z-50 overflow-hidden`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 text-2xl z-10"
        onClick={onClose}
      >
        <MdClose />
      </button>
      <img
        src={src}
        alt="Popup"
        className="max-w-full max-h-full transition-opacity duration-300"
      />
      {showCounter && (
        <div className="absolute bottom-4 left-4 text-gray-400">
          <span>{currentIndex + 1}</span>/<span>{totalImages}</span>
        </div>
      )}
      <div className="fixed inset-0 flex justify-between items-center">
        <button
          className="text-2xl text-gray-400 hover:text-gray-200"
          onClick={prevImage}
        >
          <MdOutlineArrowBackIos />
        </button>
        <button
          className="text-2xl text-gray-400 hover:text-gray-200"
          onClick={nextImage}
        >
          <MdOutlineArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default Popup;