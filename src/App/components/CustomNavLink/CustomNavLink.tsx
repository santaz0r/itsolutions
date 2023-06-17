import { NavLink } from 'react-router-dom';

type TProps = {
  content: string;
  path: string;
};

const CustomNavLink = ({ path, content }: TProps) => {
  const setActiveLink = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'lg:border-b-4 lg:pb-3 lg:border-main-color lg:rounded font-bold text-xs' : 'font-bold text-xs';
  return (
    <NavLink to={path} className={setActiveLink}>
      {content}
    </NavLink>
  );
};

export default CustomNavLink;
