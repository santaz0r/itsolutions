type TProps = {
  isActive: boolean;
  onClick: () => void;
};

const BurgerMenu = ({ isActive, onClick }: TProps) => {
  const setClass = () => 'block w-full h-[2px] bg-white transition-all duration-300 ease-linear';

  return (
    <button
      onClick={onClick}
      className={`flex-col justify-between items-center w-[28px] h-[17.5px] min-[320px]:max-lg:flex hidden z-20`}
    >
      <span className={`${setClass()} ${isActive ? 'translate-y-[5px] -rotate-45 mb-[6px]' : ''}`}></span>
      <span className={`${setClass()} ${isActive ? 'hidden mb-[6px]' : ''}`}></span>
      <span className={`${setClass()} ${isActive ? '-translate-y-[5px] rotate-45 mb-[6px]' : ''}`}></span>
    </button>
  );
};

export default BurgerMenu;
