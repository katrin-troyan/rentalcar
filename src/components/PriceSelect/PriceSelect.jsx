import Select from 'react-select';
import { priceOptions, formatPrice } from '../../utils/price';

export default function PriceSelect({ value, onChange }) {
  const options = priceOptions.map(p => ({ value: p, label: formatPrice(p).listLabel }));

  return (
    <Select
      options={options}
      value={value ? { value: value, label: formatPrice(value).selectedLabel } : null}
      onChange={(selected) => onChange(selected.value)}
      placeholder="Choose a price"
      isSearchable={false}
      getOptionLabel={(option) => option.label} 
      getOptionValue={(option) => option.value}
    />
  );
}