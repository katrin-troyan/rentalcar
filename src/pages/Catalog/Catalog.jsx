import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetFilters } from '../../redux/filters/slice';
import { resetCars } from '../../redux/cars/slice';
import { fetchCars } from '../../redux/cars/operations';

import Filters from "../../components/Filters/Filters";
import CarList from "../../components/CarList/CarList";

export default function Catalog() {
 const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilters());
    dispatch(resetCars());
    dispatch(fetchCars({ page: 1, limit: 12 }));
  }, [dispatch]);

  return (
    <div>
      <Filters />
      <CarList />
    </div>
  );
}