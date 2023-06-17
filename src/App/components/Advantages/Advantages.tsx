type TProps = {
  imagePath: string;
  content: string;
  rightSpacing: string;
  ySpacing: string;
};

const Advantages = ({ imagePath, content, rightSpacing, ySpacing }: TProps) => {
  return (
    <div
      className={`min-[320px]:max-lg:w-[111px] flex items-center ${ySpacing} min-[320px]:max-lg:flex-col min-[320px]:max-lg:text-sm`}
    >
      <img
        className={rightSpacing + ' w-[33px] h-[33px] min-[320px]:max-lg:mb-[10px]'}
        src={imagePath}
        alt={imagePath.split('/')[2].split('.')[0]}
      />
      <p className="min-[320px]:max-lg:text-center leading-4">{content}</p>
    </div>
  );
};

export default Advantages;
