import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="pt-[4.81rem] container mx-auto">
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};

export default MainLayout;
