import FooterInfo from '../FooterInfo/FooterInfo';
import Socials from '../Socials/Socials';
//min-[320px]:max-lg:
const Footer = () => {
  return (
    <footer className="mt-[129px] bg-footer-bg  ">
      <div
        className="min-[320px]:max-lg:text-center min-[320px]:max-lg:flex-col min-[320px]:max-lg:items-center min-[320px]:max-lg:px-0
       flex justify-between  pt-[35px] pl-[84px] pr-[79px]"
      >
        <h1 className="font-arimo text-5xl flex items-center text-white min-[320px]:max-lg:mb-[30px]">LOGO</h1>
        <div className="min-[320px]:max-lg:order-2 min-[320px]:max-lg:mt-4">
          <FooterInfo title="Company name" info={['Reg. nr: 437568', 'Peterburi tee 710', 'Tallinn Harjumaa 34235']} />
        </div>
        <div className="min-[320px]:max-lg:order-1 ">
          <FooterInfo
            title="Свяжитесь с нами"
            info={['+372 475685', 'info@example.ee']}
            pathIcons={['phone-green.svg', 'mail-green.svg']}
          />
        </div>
        <div className="min-[320px]:max-lg:order-3 min-[320px]:max-lg:mt-4">
          <FooterInfo title="Полезные ссылки" info={['О нас', 'Часто задаваемые вопросы', 'Контакты']} />
        </div>
        <div className="lg:hidden flex items-center order-4 h-[23px] mt-[23px]">
          <Socials data={['facebook', 'vk', 'instagram', 'twitter']} />
        </div>
      </div>
      <div className="min-h-[56px] bg-footer-end-bg mt-8"></div>
    </footer>
  );
};

export default Footer;
