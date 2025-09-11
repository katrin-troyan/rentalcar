import { useEffect } from 'react';
import {useSelector } from 'react-redux';
import {
  selectCars,
  selectIsLoadingCars,
  selectCarsError,
} from '../redux/cars/selectors';
import { toast } from 'react-toastify';

export const useCars = () => {


  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoadingCars);
  const error = useSelector(selectCarsError);



  useEffect(() => {
    if (error) {
      toast.error(`Error fetching cars: ${error}`);
    }
  }, [error, cars.length, isLoading]);

  return { cars, isLoading, error };
};