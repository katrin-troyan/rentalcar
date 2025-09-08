import Select from 'react-select';
import { useSelector } from 'react-redux';
import { selectBrands } from '../../redux/cars/selectors';

export default function BrandSelect({ value, onChange }) {
  const brands = useSelector(selectBrands);

  const options = brands.map(b => ({ value: b, label: b })) || [];

  return (
    <Select
      options={options}
      value={value ? { value, label: value } : null}
      onChange={(selected) => onChange(selected.value)}
      placeholder="Choose a brand"
      isSearchable={true} 
      getOptionLabel={(option) => option.label}
      getOptionValue={(option) => option.value}
      styles={{
        container: (provided) => ({ ...provided, width: 200 }),
      }}
    />
  );
}