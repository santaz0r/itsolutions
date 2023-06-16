import FooterInfo from '../FooterInfo/FooterInfo';

const Footer = () => {
  return (
    <footer className="mt-[129px] bg-footer-bg  ">
      <div className="flex justify-between  pt-[35px] pl-[84px] pr-[79px]">
        <h1 className="font-arimo text-5xl flex items-center text-white">LOGO</h1>

        <FooterInfo title="Company name" info={['Reg. nr: 437568', 'Peterburi tee 710', 'Tallinn Harjumaa 34235']} />
        <FooterInfo
          title="Свяжитесь с нами"
          info={['+372 475685', 'info@example.ee']}
          pathIcons={['phone-green.svg', 'mail-green.svg']}
        />
        <FooterInfo title="Полезные ссылки" info={['О нас', 'Часто задаваемые вопросы', 'Контакты']} />
      </div>
      <div className="min-h-[56px] bg-footer-end-bg mt-8"></div>
    </footer>
  );
};

export default Footer;
