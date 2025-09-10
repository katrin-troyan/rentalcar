import { getShortNumericId } from '../../utils/getShortNumericId';
import { formatAddress } from '../../utils/formatAddress';
import { formatMileage } from '../../utils/formatMileage';

export default function CarInfo({ car }) {
  const shortId = getShortNumericId(car.id);
  const { city, country } = formatAddress(car.address);
  const mileageStr = formatMileage(car.mileage);

  return (
    <div>
      <div>
        <h2>
          {car.brand} {car.model}, {car.year} <span>Id: {shortId}</span>
        </h2>

        <div>
          <svg width="12" height="15">
            <use href="/sprite.svg#icon-Location"></use>
          </svg>
          <p>
            {city}, {country}
          </p>
          <p>Mileage: {mileageStr}</p>
        </div>

        <p>${car.rentalPrice}</p>
        <p>{car.description}</p>
      </div>

      <div>
        <h3>Rental Conditions:</h3>
        <ul>
          {car.rentalConditions.map((cond, idx) => (
            <li key={idx}>
              <svg width="16" height="16">
                <use href="/sprite.svg#icon-check-circle"></use>
              </svg>
              <span>{cond}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Car Specifications:</h3>
        <ul>
          <li>
            <svg width="16" height="16">
              <use href="/sprite.svg#icon-calendar"></use>
            </svg>
            Year: {car.year}
          </li>
          <li>
            <svg width="16" height="16">
              <use href="/sprite.svg#icon-car"></use>
            </svg>
            Type: {car.type}
          </li>
          <li>
            <svg width="16" height="16">
              <use href="/sprite.svg#icon-fuel-pump"></use>
            </svg>
            Fuel Consumption: {car.fuelConsumption}
          </li>
          <li>
            <svg width="16" height="16">
              <use href="/sprite.svg#icon-gear"></use>
            </svg>
            Engine Size: {car.engineSize}
          </li>
        </ul>
      </div>

      <div>
        <h3>Accessories and functionalities:</h3>
        <ul>
          {car.accessories.map((a, idx) => (
            <li key={idx}>
              <svg width="16" height="16">
                <use href="/sprite.svg#icon-check-circle"></use>
              </svg>
              <span>{a}</span>
            </li>
          ))}
          {car.functionalities.map((f, idx) => (
            <li key={idx}>
              <svg width="16" height="16">
                <use href="/sprite.svg#icon-check-circle"></use>
              </svg>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
