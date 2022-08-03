/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

import styles from './toolset-style';

const Toolset = (props) => {
  //   console.log('[Toolset:]', props);
  const [hovered, setHovered] = useState(false);

  let mainCls = [
    [true, '_toolset'],
    [true, '_grid-row'],
    [true, '_gap-12'],
    [props.className, props.className],
    [props.disabled, 'disabled'],
    // [props.secondary, 'secondary'],
    [props.xs, '_xs'],
    [props.sm, '_sm'],
    [props.lg, '_lg'],
    [props.xl, '_xl'],
  ]
    .map((classCondition) => (classCondition[0] ? classCondition[1] : null))
    .filter((cls) => cls);

  return (
    <div className={mainCls.join(' ')} css={[styles, { ...props.style }]}>
      {/* <div className="_toolset feedback _grid-row _gap-12"> */}
      <motion.li
        whileHover={{ scale: 1.2, zIndex: 100, transition: { delay: 0.5 } }}
        onHoverStart={(e) => setHovered(true)}
        onHoverEnd={(e) => setHovered(false)}
      >
        <div className="icon">{'X'}</div>
        <motion.div
          className="alt-text"
          animate={
            hovered
              ? { opacity: 1, transition: { delay: 0.5 } }
              : { opacity: 0, transition: { delay: -0.5 } }
          }
        >
          {'explanation of the tool'}
        </motion.div>
      </motion.li>
      <motion.li whileHover={{ scale: 1.2 }}>
        <div className="icon">{'Y'}</div>
        <div className="alt-text">{'explanation of the tool'}</div>
      </motion.li>
      <motion.li whileHover={{ scale: 1.2 }}>
        <div className="icon">{'Z'}</div>
        <div className="alt-text">{'explanation of the tool'}</div>
      </motion.li>
      {/* </div> */}
    </div>
  );
};

export default Toolset;
