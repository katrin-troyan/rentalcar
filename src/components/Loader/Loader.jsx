import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.dotsContainer}>
      <div className={css.dot}></div>
      <div className={css.dot}></div>
      <div className={css.dot}></div>
      <div className={css.dot}></div>
      <div className={css.dot}></div>
    </div>
  );
}
