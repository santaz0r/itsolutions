const socialsData = {
  twitter: {
    path: './assets/twitter.svg',
  },
  facebook: {
    path: './assets/facebook.svg',
  },
  vk: {
    path: './assets/VK.svg',
  },
  instagram: {
    path: './assets/instagram.svg',
  },
};

type TProps = {
  data: (keyof typeof socialsData)[];
};

const Socials = ({ data }: TProps) => {
  console.log(data);
  return (
    <>
      {data?.map((item) => (
        <a href="#" key={item} className="h-[23px]">
          <img className="px-3 object-fill h-full" src={socialsData[item].path} alt={item} />
        </a>
      ))}
    </>
  );
};

export default Socials;
