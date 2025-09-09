import Select from 'react-select';
import { useSelector } from 'react-redux';
import { selectBrands } from '../../redux/cars/selectors';
import css from './BrandSelect.module.css';

export default function BrandSelect({ value, onChange }) {
  const brands = useSelector(selectBrands);

  const options = brands.map(b => ({ value: b, label: b })) || [];

  return (
    <div className={css.container}>
      <label className={css.label} >Car brand</label>
    <Select
      options={options}
      value={value ? { value, label: value } : null}
      onChange={(selected) => onChange(selected.value)}
      className={css.select}
      placeholder="Choose a brand"
      isSearchable={true} 
      getOptionLabel={(option) => option.label}
      getOptionValue={(option) => option.value}

      />
    </div>
  );
}