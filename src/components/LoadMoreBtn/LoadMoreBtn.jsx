import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/operations';
import {
  selectCurrentPage,
  selectIsLastPage,
  selectIsLoadingCars,
} from '../../redux/cars/selectors';

export default function LoadMoreBtn() {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const isLastPage = useSelector(selectIsLastPage);
  const isLoading = useSelector(selectIsLoadingCars);

  const handleLoadMore = () => {
    if (!isLastPage) {
      dispatch(fetchCars({ page: currentPage + 1 }));
    }
  };

  return (
    <div>
      <button onClick={handleLoadMore} disabled={isLoading || isLastPage}>
        {isLastPage ? 'No more cars' : 'Load More'}
      </button>
    </div>
  );
}
