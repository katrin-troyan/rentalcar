import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favorites/slice';
import { selectIsFavorite } from '../../redux/favorites/selectors';
import { formatAddress } from "../../utils/formatAddress";
import { formatMileage } from "../../utils/formatMileage";
import css from './CarCard.module.css';

export default function CarCard({ car }) {
  const {
    id,
    img,
    brand,
    model,
    year,
    type,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = car;

  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite(id));

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(car));
    }
  };

  const formattedType = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();

  const { city, country } = formatAddress(address);
  const mileageStr = formatMileage(mileage);

  return (
    <div className={css.card}>
      <div className={css.imageWrapper}>
        <img src={img} alt={`${brand} ${model}`} className={css.image} />
        <button
          type="button"
          onClick={toggleFavorite}
          className={css.favoriteBtn}
        >
          <svg
            width="20"
            height="20"
            className={isFavorite ? css.unsaveIcon : css.saveIcon}
          >
            <use href="/sprite.svg#icon-Vector"></use>
          </svg>
        </button>
      </div>

      <div className={css.content}>
        <div className={css.header}>
          <h3 className={css.title}>
            {brand} <span className={css.span}>{model}</span>, {year}
          </h3>
          <p className={css.price}>${rentalPrice}</p>
        </div>

        <div>
          <ul className={css.details}>
            <li>{city}</li>
            <li>{country}</li>
            <li>{rentalCompany}</li>
          </ul>
          <ul className={css.details}>
            <li>{formattedType}</li>
            <li>{mileageStr}</li>
          </ul>
        </div>
      </div>
      <Link to={`/catalog/${id}`} className={css.readMoreBtn}>
        Read more
      </Link>
    </div>
  );
}
