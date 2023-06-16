import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="pt-[4.81rem] container mx-auto text-main-text-color min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
