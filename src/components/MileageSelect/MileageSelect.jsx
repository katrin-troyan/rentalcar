import { useDispatch, useSelector } from "react-redux";
import {
  selectMileageFrom,
  selectMileageTo,
} from "../../redux/filters/selectors";
import { setMileageFrom, setMileageTo } from "../../redux/filters/slice";
import css from "./MileageSelect.module.css";

const formatNumber = (value) => {
  if (!value) return "";
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const parseNumber = (value) => value.replace(/,/g, "");

export default function MileageSelect() {
  const dispatch = useDispatch();
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);

  const handleFromChange = (e) => {
    const raw = parseNumber(e.target.value);
    if (/^\d*$/.test(raw)) {
      dispatch(setMileageFrom(raw ? Number(raw) : ""));
    }
  };

  const handleToChange = (e) => {
    const raw = parseNumber(e.target.value);
    if (/^\d*$/.test(raw)) {
      dispatch(setMileageTo(raw ? Number(raw) : ""));
    }
  };

  return (
    <div className={css.container}>
      <label className={css.label}>Сar mileage / km</label>
       <div className={css.inputsWrapper}> 
        <div className={css.inputGroupR}>
          <span className={css.labelInput}>From</span>
          <input
            type="text"
            value={formatNumber(mileageFrom)}
            onChange={handleFromChange}
            className={css.inputField}
          />
        </div>

        <div className={css.inputGroupL}>
          <span className={css.labelInput}>To</span>
          <input
            type="text"
            value={formatNumber(mileageTo)}
            onChange={handleToChange}
            className={css.inputField}
          />
        </div>
      </div>
    </div>
  );
}