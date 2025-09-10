import css from "./CarImg.module.css";

export default function CarImg({ car }) {
  return (
    <div>
      <img 
        src={car.img} 
        alt={`${car.brand} ${car.model}`} 
        className={css.carImage}
      />
    </div>
  );
}