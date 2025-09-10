import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/operations';
import {
  selectCurrentPage,
  selectIsLastPage,
} from '../../redux/cars/selectors';
import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn() {
  const dispatch = useDispatch();
  const page = useSelector(selectCurrentPage);
  const isLastPage = useSelector(selectIsLastPage);

  const handleClick = () => {
    dispatch(fetchCars({ page: page + 1, limit: 12 }));
  };

  if (isLastPage) return null;

  return (
    <button type="button" onClick={handleClick} className={css.loadMoreBtn}>
      Load more
    </button>
  );
}
