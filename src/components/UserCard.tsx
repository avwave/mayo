import React, { createRef, useCallback, useEffect, useState } from 'react';

const imgPlaceholder = '/mayo/assets/Frame 18.png'
const imgPlaceholder2 = '/mayo/assets/png.png'
const imgPlaceholder3 = '/mayo/assets/profile_image 40.png'

const UserCard = () => {

  const images = [imgPlaceholder, imgPlaceholder2, imgPlaceholder3]

  const [scrolling, setScrolling] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const refs = images.reduce((acc: { [key: number]: React.RefObject<HTMLElement> }, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {} as { [key: number]: React.RefObject<HTMLDivElement> });


  const scrollToImage = useCallback(
    async (index: number): Promise<void> => {
      refs[index].current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
      setCurrentImageIndex(index);    

    }, [refs, setCurrentImageIndex]
  );


  useEffect(
    () => {
      scrollToImage(currentImageIndex)
    }, [currentImageIndex, scrollToImage]
  );

  const totalImages = images.length;

  const nextImage = useCallback(
    () => {
      if (currentImageIndex >= (totalImages - 1)) {
        setCurrentImageIndex(0);
      } else {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    }, [currentImageIndex, totalImages]
  );

  const previousImage = useCallback(
    () => {
      if (currentImageIndex === 0) {
        setCurrentImageIndex(totalImages - 1);
      } else {
        setCurrentImageIndex(currentImageIndex - 1);
      }
    }, [currentImageIndex, totalImages]
  );



  // tailwind classes
  const arrowStyle =
    'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-25 flex items-center justify-center';


  const sliderControl = (isLeft: boolean) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
      style={{ top: '40%' }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
        {isLeft ? '◀' : '▶'}
      </span>
    </button>
  );

  return (
    <div className="pt-[50px] flex justify-center items-center">
      <div className="relative">
        <div className="carousel
        inline-flex
        overflow-x-hidden
        snap-x
        snap-mandatory
        scrollbar-width-none
        ">
          {sliderControl(true)}
          {images.map((img, i) => (
            <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
              <img src={img} className="w-full object-contain" />
            </div>
          ))}
          {sliderControl(false)}
        </div>
      </div>
    </div>
  )

};

export default UserCard;