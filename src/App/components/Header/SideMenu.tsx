import CustomNavLink from '../CustomNavLink/CustomNavLink';
import Socials from '../Socials/Socials';
type TProps = {
  isActive: boolean;
};
const SideMenu = ({ isActive }: TProps) => {
  return (
    <nav className="">
      <ul
        className={`lg:hidden absolute z-10 top-0 ${
          isActive ? 'right-0' : 'right-[-100%]'
        } flex flex-col text-white pt-[27px] h-[980px] px-9 bg-header-nav transition-all duration-300 ease-linear`}
      >
        <h1 className="font-arimo text-5xl mb-24">LOGO</h1>
        <li className=" flex items-center justify-start mb-[50px]">
          <img className="mr-5" src="./assets/home.svg" alt="home" />
          <CustomNavLink path={'/'} content="ГЛАВНАЯ" />
        </li>
        <li className=" flex items-center  justify-start mb-[50px]">
          <img className="mr-5" src="./assets/about.svg" alt="about" />
          <CustomNavLink path={'/about'} content="О НАС" />
        </li>
        <li className=" flex items-center justify-start mb-[50px]">
          <img className="mr-5" src="./assets/mail-outline.svg" alt="mail-outline" />
          <CustomNavLink path={'/offer'} content="ОТПРАВЬТЕ НАМ ПРЕДЛОЖЕНИЕ " />
        </li>
        <li className=" flex items-center justify-start mb-[50px]">
          <img className="mr-5" src="./assets/help-circle.svg" alt="help-circle" />
          <CustomNavLink path={'/FAQ'} content="ЧЗВ" />
        </li>
        <li className=" flex items-center justify-start mb-[50px]">
          <img className="mr-5" src="./assets/chatbox.svg" alt="chatbox" />
          <CustomNavLink path={'/blog'} content="БЛОГ" />
        </li>
        <li className=" flex items-center justify-start mb-[50px]">
          <img className="mr-5" src="./assets/location.svg" alt="location" />
          <CustomNavLink path={'/contacts'} content="КОНТАКТЫ" />
        </li>
        <li className=" flex items-center justify-start mb-[50px]">
          <img className="mr-5" src="./assets/flag.svg" alt="flag" />
          Русский
        </li>
        <li className="flex items-center justify-start">
          <Socials />
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;
