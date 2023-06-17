type TProps = {
  path: string;
  content: string;
};

const PocketAdv = ({ path, content }: TProps) => {
  return (
    <div className="min-[320px]:max-lg:w-[111px] shadow-md shadow-[#E5E5E5] rounded-bl-[10px] rounded-br-[10px] flex flex-col items-center w-[118px] h-[118px] pt-[21px] px-[21px] border-[1px] border-t-0">
      <img src={path} alt={path.split('/')[2].split('.')[0]} />
      <p className="text-base font-bold font-arimo mt-5">{content}</p>
    </div>
  );
};
export default PocketAdv;
