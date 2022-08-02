import styles from '../styles/HomeContent.module.css';

const InputRatesScale = ({
  min = 1,
  max = 5,
  minLabel,
  maxLabel,
  reverse,
  key,
  id,
}) => {
  // const range = Math.abs(max - min + 1);
  const range = Math.abs(max - min) + 1;
  // console.log(range);
  id = id || key || parseInt(Math.random() * 100);

  let els = [...Array(range)].map((i, index) => {
    let cellNum = reverse ? max - index : min + index;
    if (max < min) cellNum = reverse ? max + index : min - index;
    return (
      <div key={index} className={styles['rate-scale-item']}>
        <input
          type="radio"
          id={`rate-${id}-${cellNum}`}
          name={`rate-scale-${id}`}
          value={cellNum}
        ></input>
        <label htmlFor={`rate-${id}-${cellNum}`}>
          <div>{cellNum}</div>
        </label>
      </div>
    );
  });

  return (
    <div className={styles['rate-scale-container']}>
      <div>{minLabel}</div>
      <fieldset className={styles['rate-scale']}>{els}</fieldset>
      <div>{maxLabel}</div>
    </div>
  );
};

export default InputRatesScale;
