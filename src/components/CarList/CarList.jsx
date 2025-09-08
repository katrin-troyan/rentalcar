import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import { selectCars, selectIsLoadingCars, selectCarsError } from "../../redux/cars/selectors";
import CarCard from "../CarCard/CarCard";


export default function CarList() {
  const dispatch = useDispatch();

  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoadingCars);
  const error = useSelector(selectCarsError);

  useEffect(() => {
    dispatch(fetchCars({}));
  }, [dispatch]);

  if (isLoading) return <p>Loading cars...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!cars || cars.length === 0) return <p>No cars found.</p>;

  return (
    <div >
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}