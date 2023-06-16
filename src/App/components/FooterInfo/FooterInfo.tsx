type TProps = {
  title: string;
  info: string[];

  pathIcons?: string[];
};

const FooterInfo = ({ title, info, pathIcons }: TProps) => {
  return (
    <div className="text-sm text-white">
      <div className="font-arimo font-bold mb-2.5">{title}</div>
      <div>
        {info.map((item, index) => (
          <p key={item} className="flex items-center py-0.5">
            {pathIcons && <img className="mr-2.5" src={`src/assets/${pathIcons[index]}`} alt="test" />} {item}
          </p>
        ))}
      </div>
    </div>
  );
};

FooterInfo.defaultProps = {
  pathIcons: '',
};

export default FooterInfo;
