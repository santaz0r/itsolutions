import ContactsTemplate from '../ContactsTemplate/ContactsTemplate';
import CustomNavLink from '../CustomNavLink/CustomNavLink';

const Header = () => {
  return (
    <header className="bg-main-color h-16 rounded-bl-xl">
      <div className="flex justify-between ">
        <div className="py-3 pl-[5.25rem] ">
          <ContactsTemplate content="+372 43675 476" path="/src/assets/phone.svg" alt="phone" />
          <ContactsTemplate content="info@example.ee" path="/src/assets/Mail.svg" alt="mail" />
        </div>
        <div className="bg-header-nav pt-[0.75rem] h-[5.875rem] rounded-bl-full flex flex-col items-center justify-between">
          <div className="flex justify-end w-full pr-7">
            <img src="src/assets/logo.svg" alt="carLogo" />
            <div className="flex items-center justify-end ml-[17.31rem]">
              <img className="px-3" src="src/assets/facebook.svg" alt="facebook" />
              <img className="px-3" src="src/assets/VK.svg" alt="vk" />
            </div>
          </div>

          <nav>
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
                <img src="src/assets/flag.svg" alt="flag" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
