import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCarById } from '../redux/cars/operations';
import {
  selectCarDetails,
  selectIsLoadingCarDetails,
  selectCarDetailsError,
} from '../redux/cars/selectors';

export const useCarDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const car = useSelector(selectCarDetails);
  const isLoading = useSelector(selectIsLoadingCarDetails);
  const error = useSelector(selectCarDetailsError);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  return { car, isLoading, error };
};