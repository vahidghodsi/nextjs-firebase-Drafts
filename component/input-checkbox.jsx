/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import styles, { switchTumbMotionVariant } from './input-checkbox-style';
// import { app_message_info_types } from '@models/app-message-types';

const InputCheckbox = (props) => {
  //   console.log('[InputCheckbox:]', props);
  const [value, setValue] = useState(props.value || false);
  const [touched, setTouched] = useState(false);
  const name = props.name || 'checkbox';

  let mainCls = [
    [true, '_input-switch'],
    [true, '_grid-3row'],
    [true, '_gap-0'],
    [props.type, '_' + props.type],
    [props.className, props.className],
    [props.disabled, 'disabled'],
    [props.secondary, 'secondary'],
    [props.xs, '_xs'],
    [props.sm, '_sm'],
    [props.lg, '_lg'],
    [props.xl, '_xl'],
  ]
    .map((classCondition) => (classCondition[0] ? classCondition[1] : null))
    .filter((cls) => cls);

  const changeHandler = (e) => {
    if (props.changeFn) {
      props.changeFn(e);
    }
    // console.log(e.target.checked);
    setValue(e.target.checked);
    // setValue(e.target.value);
    setTouched(true);
  };

  const focusHandler = (e) => {
    if (props.focusFn) {
      props.focusFn(e);
    } else {
      // console.log(e.target);
    }
  };

  const blurHandler = (e) => {
    if (props.blurFn) {
      props.blurFn(e);
    } else {
      // console.log(e.target);
    }
    setTouched(true);
  };

  useEffect(() => {
    if (props.value !== value) {
      setValue(props.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value]);

  let labelTextEl = props.label ? (
    <div className="_label-text">{props.label}</div>
  ) : null;

  let inputEl = (
    <input
      id={props.id || name}
      name={name}
      form={props.form || undefined}
      type={'checkbox'}
      value={value}
      disabled={props.disabled}
      onChange={(e) => changeHandler(e)}
      onFocus={(e) => focusHandler(e)}
      onBlur={(e) => blurHandler(e)}
    />
  );

  let labelBoxEl = (
    <label htmlFor={name} className="_label">
      <div className="box">
        <motion.div
          animate={value ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.15, type: 'easeInOut' }}
        />
        <motion.div
          animate={value ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.05, duration: 0.3, type: 'easeInOut' }}
        />
      </div>
    </label>
  );

  return (
    <div className={mainCls.join(' ')} css={[styles, { ...props.style }]}>
      <div className="_grid-2col-fix-left _align-center">
        {labelTextEl}
        <div className={'checkbox'}>
          {inputEl}
          {labelBoxEl}
        </div>
      </div>
    </div>
  );
};

export default InputCheckbox;

{
  /* <div key={index} className={styles['rate-scale-item']}>
        <input
          type="radio"
          id={`rate-${id}-${cellNum}`}
          name={`rate-scale-${id}`}
          value={cellNum}
        ></input>
        <label htmlFor={`rate-${id}-${cellNum}`}>
          <div>{cellNum}</div>
        </label>
      </div> */
}
