import { getShortNumericId } from '../../utils/getShortNumericId';
import { formatAddress } from '../../utils/formatAddress';
import { formatMileage } from '../../utils/formatMileage';
import css from './CarInfo.module.css';

export default function CarInfo({ car }) {
  const shortId = getShortNumericId(car.id);
  const { city, country } = formatAddress(car.address);
  const mileageStr = formatMileage(car.mileage);

  return (
    <div className={css.container}>
      <div className={css.header}>
        <h2 className={css.titleHeader}>
          {car.brand} {car.model}, {car.year}{' '}
          <span className={css.span}>Id: {shortId}</span>
        </h2>

        <div className={css.wrapper}>
          <svg width="12" height="15" className={css.iconLocation}>
            <use href="/sprite.svg#icon-Location"></use>
          </svg>
          <p className={css.text}>
            {city}, {country}
          </p>
          <p className={css.textMileage}>Mileage: {mileageStr}</p>
        </div>

        <p className={css.price}>${car.rentalPrice}</p>
        <p className={css.text}>{car.description}</p>
      </div>
      <div className={css.sectionWrapper}>
        <div className={css.section}>
          <h3 className={css.title}>Rental Conditions:</h3>
          <ul className={css.list}>
            {car.rentalConditions.map((cond, idx) => (
              <li key={idx} className={css.item}>
                <svg width="16" height="16" className={css.iconLocation}>
                  <use href="/sprite.svg#icon-check-circle"></use>
                </svg>
                <span className={css.text}>{cond}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={css.section}>
          <h3 className={css.titleHeader}>Car Specifications:</h3>
          <ul className={css.list}>
            <li className={css.item}>
              <svg width="16" height="16" className={css.iconLocation}>
                <use href="/sprite.svg#icon-calendar"></use>
              </svg>
              Year: {car.year}
            </li>
            <li className={css.item}>
              <svg width="16" height="16" className={css.iconLocation}>
                <use href="/sprite.svg#icon-car"></use>
              </svg>
              Type: {car.type}
            </li>
            <li className={css.item}>
              <svg width="16" height="16" className={css.iconLocation}>
                <use href="/sprite.svg#icon-fuel-pump"></use>
              </svg>
              Fuel Consumption: {car.fuelConsumption}
            </li>
            <li className={css.item}>
              <svg width="16" height="16" className={css.iconLocation}>
                <use href="/sprite.svg#icon-gear"></use>
              </svg>
              Engine Size: {car.engineSize}
            </li>
          </ul>
        </div>

        <div className={css.section}>
          <h3 className={css.titleHeader}>Accessories and functionalities:</h3>
          <ul className={css.list}>
            {car.accessories.map((a, idx) => (
              <li key={idx} className={css.item}>
                <svg width="16" height="16" className={css.iconLocation}>
                  <use href="/sprite.svg#icon-check-circle"></use>
                </svg>
                <span className={css.text}>{a}</span>
              </li>
            ))}
            {car.functionalities.map((f, idx) => (
              <li key={idx} className={css.item}>
                <svg width="16" height="16" className={css.iconLocation}>
                  <use href="/sprite.svg#icon-check-circle"></use>
                </svg>
                <span className={css.text}>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
