import CarCard from '../CarCard/CarCard';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import css from './CarList.module.css';
import { useCars } from '../../hooks/useCars';

export default function CarList() {
  const { cars, isLoading } = useCars();

  if (isLoading) return <Loader />;

  return (
    <div className={css.container}>
      <div className={css.carList}>
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <div>
        <LoadMoreBtn />
        {isLoading && <p>Loading more cars...</p>}
      </div>
    </div>
  );
}