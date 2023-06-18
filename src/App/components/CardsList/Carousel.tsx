import { useState } from 'react';
import { cards } from './CardsList';
type TProps = {
  card: (typeof cards)[0];
  setSlide: React.Dispatch<React.SetStateAction<number>>;
  currentSlide: number;
};

const Carousel = ({ card, setSlide, currentSlide }: TProps) => {
  const cardsLength = 2;

  const setCardClass = (id: number) =>
    currentSlide === id
      ? 'border-main-color h-[273px] pt-[30px] bg-white w-[183px]'
      : 'border-[#ccc] h-[233px] pt-[14px]  w-[183px] min-[320px]:max-lg:w-[144px] min-[320px]:max-lg:bg-card-bg';

  const translateCard = (id: number) => {
    return currentSlide > id
      ? `min-[320px]:max-lg:translate-x-[50px]`
      : currentSlide < id
      ? `min-[320px]:max-lg:-translate-x-[50px]`
      : 'z-10';
  };

  const hideCardClass = (id: number) => {
    return currentSlide - 1 === cardsLength && id === 1
      ? 'scale-0'
      : currentSlide - 1 === 0 && id === cardsLength + 1
      ? 'scale-0'
      : '';
  };

  const handleClick = (id: number) => {
    console.log(id);
    setSlide(id);
  };

  return (
    <button
      onClick={() => handleClick(card.id)}
      key={card.id}
      className={` ${translateCard(card.id)} ${hideCardClass(
        card.id
      )} flex flex-col transition-all ease-linear duration-300 items-center rounded-lg shadow-sm shadow-gray-700/50 border-[1px] px-2 text-center ${setCardClass(
        card.id
      )}`}
    >
      <img className="w-[33px] mb-[15px]" src={card.image} alt={card.image.split('/')[2].split('.')[0]} />
      <h4 className={`${card.id === currentSlide ? 'text-lg' : 'text-sm'} font-bold  mb-[7px]`}>{card.title}</h4>
      <div className={`${card.id === currentSlide ? 'text-xs' : 'text-[10px]'}`}>{card.description}</div>
    </button>
  );
};

export default Carousel;
