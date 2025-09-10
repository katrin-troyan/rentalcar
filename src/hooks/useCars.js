import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../redux/cars/operations';
import {
  selectCars,
  selectIsLoadingCars,
  selectCarsError,
  selectHasFilter,
} from '../redux/cars/selectors';
import { toast } from 'react-toastify';

export const useCars = () => {
  const dispatch = useDispatch();

  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoadingCars);
  const error = useSelector(selectCarsError);
  const hasFilter = useSelector(selectHasFilter);

  useEffect(() => {
    if (cars.length === 0 && !hasFilter) {
      dispatch(fetchCars({ page: 1 }));
    }
  }, [dispatch, cars.length, hasFilter]);

  useEffect(() => {
    if (error) {
      toast.error(`Error fetching cars: ${error}`);
    }
  }, [error, cars.length, isLoading]);

  return { cars, isLoading, error };
};