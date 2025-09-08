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
} from '../../redux/filters/filtersSlice';
import { fetchCars } from '../../redux/cars/operations';
import { selectBrands } from '../../redux/cars/slice';

import { formatMileage, parseNumberInput } from '../../utils/format';
import { PRICE_OPTIONS } from '../../utils/constants';

import css from './Filters.module.css';

export default function Filters() {
  const dispatch = useDispatch();

  const brand = useSelector(selectBrand);
  const price = useSelector(selectPrice);
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);

  const brands = useSelector(selectBrands);

  const handleSearch = () => {
    dispatch(
      fetchCars({ brand, price, mileageFrom, mileageTo, page: 1, limit: 12 })
    );
  };

  return (
    <div className={css.filters}>
      <select value={brand} onChange={e => dispatch(setBrand(e.target.value))}>
        <option value="">Choose a brand</option>
        {brands.map(b => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>

      <select value={price} onChange={e => dispatch(setPrice(e.target.value))}>
        <option value="">Choose a price</option>
        {PRICE_OPTIONS.map(p => (
          <option key={p} value={p}>
            To ${p}
          </option>
        ))}
      </select>

      <div className={css.mileage}>
        <input
          type="number"
          placeholder="From"
          value={mileageFrom ? formatMileage(mileageFrom) : ''}
          onChange={e =>
            dispatch(setMileageFrom(parseNumberInput(e.target.value)))
          }
        />
        <input
          type="number"
          placeholder="To"
          value={mileageTo ? formatMileage(mileageTo) : ''}
          onChange={e =>
            dispatch(setMileageTo(parseNumberInput(e.target.value)))
          }
        />
      </div>

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
