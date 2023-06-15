import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <header>header</header>
      <main>
        <div>
          <Outlet />
        </div>
      </main>
      <footer>footer</footer>
    </>
  );
};

export default MainLayout;
