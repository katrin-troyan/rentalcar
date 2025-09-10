import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectBrands } from '../../redux/cars/selectors';
import css from './BrandSelect.module.css';

export default function BrandSelect({ value, onChange }) {
  const brands = useSelector(selectBrands);
  const options = brands.map(b => ({ value: b, label: b })) || [];
  const [isOpen, setIsOpen] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = option => {
    onChange(option.value);
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={css.container} ref={componentRef}>
      <label className={css.label}>Car brand</label>
      <div className={css.selectWrapper} onClick={handleToggle} tabIndex="0">
        <span className={css.selectedValue}>{value || 'Choose a brand'}</span>
        <span className={css.arrow}>
          <svg
            width="16"
            height="16"
          >
            <use href="/sprite.svg#icon-Property-1Active"></use>
          </svg>
        </span>
      </div>
      {isOpen && (
        <ul className={css.menu}>
          {options.map(option => (
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
