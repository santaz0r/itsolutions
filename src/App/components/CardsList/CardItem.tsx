import { cards } from './CardsList';

type TProps = {
  card: (typeof cards)[0];
  currentSlide: number;
};

const CardItem = ({ card, currentSlide }: TProps) => {
  console.log(card.id, currentSlide);
  const setCardClass = (id: number) =>
    currentSlide === id ? 'border-main-color h-[273px] pt-[30px]' : 'border-[#ccc] h-[233px] pt-[14px] ';
  return (
    <div
      key={card.id}
      className={`flex flex-col w-[183px] items-center rounded-lg shadow-sm shadow-gray-700/50 border-[1px] px-2 text-center ${setCardClass(
        card.id
      )}`}
    >
      <img className="w-[33px] mb-[15px]" src={card.image} alt={card.image.split('/')[2].split('.')[0]} />
      <h4 className="font-bold text-lg mb-[7px]">{card.title}</h4>
      <div className="text-xs">{card.description}</div>
    </div>
  );
};

export default CardItem;
