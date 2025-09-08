import './App.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Layout from './components/Layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const CarDetails = lazy(() => import('./pages/CarDetails/CarDetails'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

//const Navigation = lazy(() => import('./components/Navigation/Navigation'));

export default function App() {
  return (
    <>
      <Suspense fallback={<div>Loading page...</div>}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/cars" element={<Catalog />} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
