import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './Pages/HomePage/HomePage';
import NotFoundPage from './Pages/notFoundPage/NotFoundPage';
import AboutPage from './Pages/About/About';
import FAQPage from './Pages/FAQ/FAQ';
import OfferPage from './Pages/Offer/Offer';
import ContactsPage from './Pages/Contacts/Contacts';
import BlogPage from './Pages/Blog/Blog';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/FAQ" element={<FAQPage />} />
      <Route path="/offer" element={<OfferPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
