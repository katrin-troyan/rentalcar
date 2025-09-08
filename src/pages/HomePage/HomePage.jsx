import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.overlay}>
      <h1 className={css.title}>Find your perfect rental car</h1>
      <p>Reliable and budget-friendly rentals for any journey</p>
      <Link to="/catalog" className={css.button}>
        View Catalog
      </Link>
    </div>
  );
}
