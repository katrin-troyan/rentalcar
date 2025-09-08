import css from './CarCard.module.css';

export default function CarCard({ car }) {
  return (
    <div className={css.card}>
      <img src={car.img} alt={car.model} className={css.image} />
      <div className={css.info}>
        <h3>{car.brand} {car.model}</h3>
      </div>
    </div>
  );
}