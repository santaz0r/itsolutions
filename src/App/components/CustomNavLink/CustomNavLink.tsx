import { NavLink } from 'react-router-dom';

type TProps = {
  content: string;
  path: string;
};

const CustomNavLink = ({ path, content }: TProps) => {
  const setActiveLink = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'border-b-4 pb-3 border-main-color rounded font-bold text-xs' : 'font-bold text-xs';
  return (
    <NavLink to={path} className={setActiveLink}>
      {content}
    </NavLink>
  );
};

export default CustomNavLink;
