// hooks/useFilters.js
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
import { selectBrands } from '../redux/cars/selectors';
import { clearCars } from '../redux/cars/slice';

export function useFilters() {
  const dispatch = useDispatch();

  const brand = useSelector(selectBrand);
  const price = useSelector(selectPrice);
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);
  const brands = useSelector(selectBrands);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const handleClear = () => {
    dispatch(setBrand(''));
    dispatch(setPrice(''));
    dispatch(setMileageFrom(''));
    dispatch(setMileageTo(''));
  };

  const handleSearch = () => {
    dispatch(clearCars());
    dispatch(
      fetchCars({ brand, price, mileageFrom, mileageTo, page: 1, limit: 12 })
    );
    handleClear();
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
