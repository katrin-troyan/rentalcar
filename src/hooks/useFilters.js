import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBrand,
  selectPrice,
  selectMileageFrom,
  selectMileageTo,
} from '../redux/filters/selectors';
import {
  setBrand,
  setPrice,
  setMileageFrom,
  setMileageTo,
} from '../redux/filters/slice';
import { fetchCars, fetchBrands } from '../redux/cars/operations';
import {
  selectBrands,
  selectIsLoadingCars,
  selectCars,
} from '../redux/cars/selectors';
import { toast } from 'react-toastify';

export function useFilters() {
  const dispatch = useDispatch();

  const brand = useSelector(selectBrand);
  const price = useSelector(selectPrice);
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);
  const brands = useSelector(selectBrands);
  const isLoading = useSelector(selectIsLoadingCars);
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  useEffect(() => {
    if (
      !isLoading &&
      cars.length === 0 &&
      (brand || price || mileageFrom || mileageTo)
    ) {
      toast.warn('No cars were found for your request.');
    }
  }, [isLoading, cars, brand, price, mileageFrom, mileageTo]);

  const handleSearch = () => {
    dispatch(
      fetchCars({ brand, price, mileageFrom, mileageTo, page: 1, limit: 12 })
    );
  };

  return {
    brand,
    price,
    mileageFrom,
    mileageTo,
    brands,
    setBrand: b => dispatch(setBrand(b)),
    setPrice: p => dispatch(setPrice(p)),
    setMileageFrom: v => dispatch(setMileageFrom(v)),
    setMileageTo: v => dispatch(setMileageTo(v)),
    handleSearch,
  };
}
