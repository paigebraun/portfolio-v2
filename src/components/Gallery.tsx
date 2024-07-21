import { useState, useEffect, useRef } from 'react';
import Popup from './Popup';

// Import images
const importAll = (r: Record<string, () => Promise<{ default: string }>>) => {
  const images: { [key: string]: () => Promise<{ default: string }> } = {};
  Object.keys(r).forEach((key) => {
    images[key.replace('./', '')] = r[key];
  });
  return images;
};

const images1920 = importAll(import.meta.glob<{ default: string }>('../assets/images-1920/*.{png,jpg,jpeg,svg}'));
const images400 = importAll(import.meta.glob<{ default: string }>('../assets/images-400/*.{png,jpg,jpeg,svg}'));

const minWidth = 100;

const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<{ [key: string]: () => Promise<{ default: string }> }>(images1920);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [popupImageSrc, setPopupImageSrc] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [sliderValue, setSliderValue] = useState<number>(3);
  const [imageData, setImageData] = useState<{ [key: string]: { src: string; loaded: boolean } }>({});
  const containerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Load images and adjust width per container size
  useEffect(() => {
    const updateImageWidths = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.clientWidth;
      const newWidths: { [key: string]: number } = {};

      Object.keys(imageData).forEach((key) => {
        newWidths[key] = calculateImageSize(sliderValue, containerWidth);
      });

      requestAnimationFrame(() => {
        Object.keys(newWidths).forEach((key) => {
          if (containerRefs.current[key]) {
            containerRefs.current[key]!.style.width = `${newWidths[key]}px`;
          }
        });
      });
    };

    const loadImages = () => {
      if (window.innerWidth <= 800) {
        setImages(images400);
      } else {
        setImages(images1920);
      }
      updateImageWidths();
    };

    loadImages();
    window.addEventListener('resize', updateImageWidths);

    return () => {
      window.removeEventListener('resize', updateImageWidths);
    };
  }, [sliderValue, imageData]);

  // Open popup when image clicked
  const openPopup = async (src: () => Promise<{ default: string }>, index: number) => {
    const module = await src();
    setPopupImageSrc(module.default);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  // Close popup when close button clicked
  const closePopup = () => {
    setIsOpen(false);
    setPopupImageSrc(null);
  };

  const loadImage = async (index: number) => {
    const key = Object.keys(images)[index];
    const module = await images[key]();
    setPopupImageSrc(module.default);
    setCurrentIndex(index);
  };

  const nextImage = () => {
    if (currentIndex < Object.keys(images).length - 1) {
      loadImage(currentIndex + 1);
    } else {
      loadImage(0);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      loadImage(currentIndex - 1);
    } else {
      loadImage(Object.keys(images).length - 1);
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
  };

  const calculateImageSize = (value: number, containerWidth: number) => {
    const sliderRange = value / 7; // Slider ranges from 0 to 7
    const minContainerWidth = 50; // Minimum width for smaller images
    const maxContainerWidth = containerWidth; // Maximum width for larger images on mobile

    // Calculate the width based on the slider value
    const imageWidth = Math.max(minWidth, minContainerWidth + (maxContainerWidth - minWidth) * sliderRange);

    return imageWidth;
  };

  // Load image data
  const loadImageData = async (src: () => Promise<{ default: string }>, key: string) => {
    const module = await src();
    const img = new Image();
    img.src = module.default;
    return new Promise<{ src: string; loaded: boolean }>((resolve) => {
      img.onload = () => {
        setImageData((prevData) => ({
          ...prevData,
          [key]: { src: module.default, loaded: true },
        }));
        resolve({ src: module.default, loaded: true });
      };
    });
  };

  return (
    <div
      className="flex flex-col items-end gap-10 max-w-3xl"
      ref={containerRef}
      style={{ flexGrow: 1, width: '100%' }}
    >
      <input
        type="range"
        min={0}
        max={7}
        step={0.1}
        value={sliderValue}
        onChange={handleSliderChange}
        className="range-input"
        style={{
          width: '200px',
          background: `linear-gradient(to right, #000 ${sliderValue * 14.2857}%, #d3d3d3 ${sliderValue * 14.2857}%)`, // 14.2857% = 100% / 7
        }}
      />
      <div className="image__section flex flex-wrap gap-2 justify-center items-center w-full">
        {Object.keys(images).map((key, index) => {
          const [imageSrc, setImageSrc] = useState<string>('');
          const [imageLoaded, setImageLoaded] = useState<boolean>(false);

          useEffect(() => {
            loadImageData(images[key], key).then(({ src, loaded }) => {
              setImageSrc(src);
              setImageLoaded(loaded);
            });
          }, [images, key]);

          return (
            <div
              key={index}
              data-key={key}
              ref={(el) => (containerRefs.current[key] = el)}
              className={`transition-all duration-300 ease-in-out image-container ${imageLoaded ? 'visible' : 'invisible'} max-w-fit`}
              onClick={() => openPopup(images[key], index)}
              style={{ transition: 'width 0.3s ease-in-out' }}
            >
              <img
                src={imageSrc}
                alt={`image-${index}`}
                className="cursor-pointer h-full w-full object-cover"
                style={{
                  opacity: imageLoaded ? 1 : 0,
                  transition: 'opacity 0.5s',
                }}
                loading='lazy'
              />
            </div>
          );
        })}
      </div>

      <Popup 
        isOpen={isOpen} 
        src={popupImageSrc || ''} 
        onClose={closePopup} 
        currentIndex={currentIndex} 
        totalImages={Object.keys(images).length} 
        nextImage={nextImage} 
        prevImage={prevImage}
        showCounter={true}
      />
    </div>
  );
};

export default Gallery;