import { cards } from './CardsList';
type TProps = {
  card: (typeof cards)[0];
  currentSlide: number;
};

const CardItem = ({ card, currentSlide }: TProps) => {
  const setCardClass = (id: number) =>
    currentSlide === id
      ? 'border-main-color h-[273px] pt-[30px] bg-white w-[183px]'
      : 'border-[#ccc] h-[233px] pt-[14px]  w-[183px] min-[320px]:max-lg:w-[144px] min-[320px]:max-lg:bg-card-bg';

  const translateCard = (id: number) =>
    currentSlide > id
      ? 'min-[320px]:max-lg:translate-x-[42px] '
      : currentSlide === id
      ? 'z-10'
      : 'min-[320px]:max-lg:-translate-x-[42px]';

  return (
    <div
      key={card.id}
      className={`${translateCard(
        card.id
      )} flex flex-col  items-center rounded-lg shadow-sm shadow-gray-700/50 border-[1px] px-2 text-center ${setCardClass(
        card.id
      )}`}
    >
      <img className="w-[33px] mb-[15px]" src={card.image} alt={card.image.split('/')[2].split('.')[0]} />
      <h4 className={`${card.id === currentSlide ? 'text-lg' : 'text-sm'} font-bold  mb-[7px]`}>{card.title}</h4>
      <div className={`${card.id === currentSlide ? 'text-xs' : 'text-[10px]'}`}>{card.description}</div>
    </div>
  );
};

export default CardItem;
