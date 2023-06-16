type TProps = {
  imagePath: string;
  content: string;
  rightSpacing: string;
  ySpacing: string;
};

const Advantages = ({ imagePath, content, rightSpacing, ySpacing }: TProps) => {
  console.log(imagePath, imagePath.split('/')[2].split('.')[0]);
  return (
    <div className={`flex items-center ${ySpacing}`}>
      <img className={rightSpacing} src={imagePath} alt={imagePath.split('/')[2].split('.')[0]} />
      <p>{content}</p>
    </div>
  );
};

export default Advantages;
