import { useState } from 'react';
import ContactsTemplate from '../ContactsTemplate/ContactsTemplate';
import CustomNavLink from '../CustomNavLink/CustomNavLink';
import BurgerMenu from './BurgerMenu';
import SideMenu from './SideMenu';
import Socials from '../Socials/Socials';

const Header = () => {
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive((prev) => !prev);
  };
  return (
    <header className="fixed z-20 w-full bg-main-color h-16 rounded-bl-xl min-[320px]:max-lg:pl-2">
      <div className="flex justify-between min-[320px]:max-lg:items-start">
        <div
          className={` py-3 pl-[5.25rem] min-[320px]:max-lg:pl-[0px] min-[320px]:max-lg:py-3  min-[320px]:max-lg:flex min-[320px]:max-lg:flex-col-reverse`}
        >
          <ContactsTemplate content="+372 43675 476" path="./assets/phone.svg" alt="phone" />

          <div className="min-[320px]:max-lg:hidden">
            <ContactsTemplate content="info@example.ee" path="./assets/Mail.svg" alt="mail" />
          </div>
          <div className="lg:hidden font-bold text-sm">
            <ContactsTemplate content="Покупка авто по одному звонку!" path="" alt="" />
          </div>
        </div>
        <div className="min-[320px]:max-lg:h-16 min-[320px]:max-lg:py-[23px] min-[320px]:max-lg:pl-[112px] min-[320px]:max-lg:pr-[16px] bg-header-nav pt-[0.75rem] h-[5.875rem] rounded-bl-full flex flex-col items-center justify-between">
          <div className="min-[320px]:max-lg:hidden flex justify-end w-full pr-7">
            <img src="./assets/logo.svg" alt="carLogo" />
            <div className="flex items-center justify-end ml-[17.31rem]">
              <Socials data={['facebook', 'vk']} />
            </div>
          </div>
          <BurgerMenu isActive={isActive} onClick={handleClick} />
          <SideMenu isActive={isActive} />
          <nav className="min-[320px]:max-lg:hidden">
            <ul className="flex items-center text-white pr-6">
              <li className="ml-28 px-3">
                <CustomNavLink path={'/'} content="ГЛАВНАЯ" />
              </li>
              <li className="px-3">
                <CustomNavLink path={'/about'} content="О НАС" />
              </li>
              <li className="px-3">
                <CustomNavLink path={'/offer'} content="ОТПРАВЬТЕ НАМ ПРЕДЛОЖЕНИЕ " />
              </li>
              <li className="px-3">
                <CustomNavLink path={'/FAQ'} content="ЧЗВ" />
              </li>
              <li className="px-3">
                <CustomNavLink path={'/blog'} content="БЛОГ" />
              </li>
              <li className="px-3">
                <CustomNavLink path={'/contacts'} content="КОНТАКТЫ" />
              </li>
              <li className="px-3">
                <img src="./assets/flag.svg" alt="flag" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
