import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './components/Loader/Loader.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog.jsx'));
const CarDetails = lazy(() => import('./pages/CarDetails/CarDetails.jsx'));

export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<CarDetails />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer position="top-right" autoClose={2000} />
      </>
  );
}
