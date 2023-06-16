type TProps = {
  imagePath: string;
  content: string;
};

const Advantages = ({ imagePath, content }: TProps) => {
  console.log(imagePath, imagePath.split('/')[2].split('.')[0]);
  return (
    <div className="flex items-center py-5">
      <img className="mr-3.5" src={imagePath} alt={imagePath.split('/')[2].split('.')[0]} />
      <p className="font-arimo font-bold text-base">{content}</p>
    </div>
  );
};

export default Advantages;
