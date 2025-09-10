import BrandSelect from '../../components/BrandSelect/BrandSelect';
import PriceSelect from '../../components/PriceSelect/PriceSelect';
import MileageSelect from '../../components/MileageSelect/MileageSelect';
import { useFilters } from '../../hooks/useFilters';
import css from './Filters.module.css';

export default function Filters() {
  const {
    brand,
    price,
    mileageFrom,
    mileageTo,
    setBrand,
    setPrice,
    setMileageFrom,
    setMileageTo,
    handleSearch,
  } = useFilters();

  return (
    <div className={css.container}>
      <BrandSelect value={brand} onChange={setBrand} />
      <PriceSelect value={price} onChange={setPrice} />
      <MileageSelect
        fromValue={mileageFrom}
        toValue={mileageTo}
        onFromChange={setMileageFrom}
        onToChange={setMileageTo}
      />
      <button onClick={handleSearch} className={css.btn}>Search</button>
    </div>
  );
}
