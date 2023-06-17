type TProps = {
  imagePath: string;
  content: string;
  rightSpacing: string;
  ySpacing: string;
};

const AdvantagesList = ({ imagePath, content, rightSpacing, ySpacing }: TProps) => {
  return (
    <div className={`flex items-center ${ySpacing} min-[320px]:max-lg:text-sm`}>
      <img
        className={rightSpacing + ' w-[33px] h-[33px] min-[320px]:max-lg:w-[22px] min-[320px]:max-lg:h-[22px] '}
        src={imagePath}
        alt={imagePath.split('/')[2].split('.')[0]}
      />
      <p className="min-[320px]:max-lg:text-start leading-4">{content}</p>
    </div>
  );
};

export default AdvantagesList;
