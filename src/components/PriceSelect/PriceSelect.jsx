import { useState, useRef, useEffect } from 'react';
import { priceOptions, formatPrice } from '../../utils/price';
import css from './PriceSelect.module.css';

export default function PriceSelect({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const componentRef = useRef(null);

  const options = priceOptions.map(p => ({
    value: p,
    label: formatPrice(p).listLabel
  }));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (componentRef.current && !componentRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const selectedValueLabel = value ? formatPrice(value).selectedLabel : 'Choose a price';

  return (
    <div className={css.container} ref={componentRef}>
      <label className={css.label}>Price / 1 hour</label>
      <div 
        className={css.selectWrapper} 
        onClick={handleToggle}
        tabIndex="0"
      >
        <span className={css.selectedValue}>{selectedValueLabel}</span>
        <span className={css.arrow}>
          <svg
            width="16"
            height="16"
          >
            <use href="/sprite.svg#icon-Property-1Active"></use>
          </svg></span>
      </div>
      {isOpen && (
        <ul className={css.menu}>
          {options.map((option) => (
            <li 
              key={option.value} 
              className={css.option} 
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}