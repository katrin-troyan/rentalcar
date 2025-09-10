import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBrand,
  selectPrice,
  selectMileageFrom,
  selectMileageTo,
} from '../../redux/filters/selectors';
import {
  setBrand,
  setPrice,
  setMileageFrom,
  setMileageTo,
} from '../../redux/filters/slice';
import { fetchCars, fetchBrands } from '../../redux/cars/operations';
import { selectBrands } from '../../redux/cars/selectors';

import BrandSelect from '../../components/BrandSelect/BrandSelect';
import PriceSelect from '../../components/PriceSelect/PriceSelect';
import MileageSelect from '../../components/MileageSelect/MileageSelect';
import css from './Filters.module.css';

export default function Filters() {
  const dispatch = useDispatch();

  const brand = useSelector(selectBrand);
  const price = useSelector(selectPrice);
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);

  const brands = useSelector(selectBrands);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(
      fetchCars({ brand, price, mileageFrom, mileageTo, page: 1, limit: 12 })
    );
  };

  return (
    <div className={css.container}>
      <BrandSelect value={brand} onChange={b => dispatch(setBrand(b))} />

      <PriceSelect value={price} onChange={p => dispatch(setPrice(p))} />
        
       <MileageSelect
        fromValue={mileageFrom}
        toValue={mileageTo}
        onFromChange={v => dispatch(setMileageFrom(v))}
        onToChange={v => dispatch(setMileageTo(v))}
      />

      <button onClick={handleSearch} className={css.btn}>Search</button>
    </div>
  );
}
