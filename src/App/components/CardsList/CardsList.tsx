import { useState } from 'react';
import CardItem from './CardItem';
import Carousel from './Carousel';

export const cards = [
  {
    id: 1,
    image: './assets/time.svg',
    title: 'Быстро',
    description:
      'Наша цель помочь вам продать машину как можно быстрее, оформив все необходимые докуметы в ускоренном порядке, и мы сделаем для этого всё от себя зависящее.',
  },
  {
    id: 2,
    image: './assets/ok.svg',
    title: 'Просто',
    description:
      'Мы купим вашу машину при любом условии! Не важно есть ли на ней техосмотр, нуждается ли она в ремонте или имеет неисправности; Мы приобритём вашу машину без лишних задержек и вопросов.',
  },
  {
    id: 3,
    image: './assets/euro.svg',
    title: 'Прибыльно',
    description:
      'Разумеется вы хотели бы продать свою машину с максимальной выгодой. Мы способны предложить вам за ваш автомобиль самую высокую цену на рынке.',
  },
];

const config = {
  steps1: '-translate-x-[150px]',
  steps2: 'translate-x-[150px]',
};

const CardsList = () => {
  const [currentSlide, setCurrentSlide] = useState(2);

  return (
    <>
      <div className="flex items-center min-[320px]:max-sm:hidden">
        {cards.map((card) => (
          <CardItem key={card.id} card={card} currentSlide={currentSlide} />
        ))}
      </div>
      <div className={`overflow-hidden h-[280px] sm:hidden`}>
        <div
          className={`flex items-center w-[471px] transition-all ease-linear duration-300 ${
            currentSlide === 3 ? config.steps1 : currentSlide === 1 ? config.steps2 : ''
          }`}
        >
          {cards.map((card) => (
            <Carousel key={card.id} card={card} currentSlide={currentSlide} setSlide={setCurrentSlide} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardsList;
