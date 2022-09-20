/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

import styles, { toolsVariant } from './element-container-style';

const ElementContainer = (props) => {
  //   console.log('[ElementContainer:]', props);
  const [hovered, setHovered] = useState(false);

  let mainCls = [
    [true, '_element-container'],
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
    <motion.div
      className={mainCls.join(' ')}
      css={[styles, { ...props.style }]}
      // whileHover={{ scale: 1.2, zIndex: 100, transition: { delay: 0.5 } }}
      onHoverStart={(e) => setHovered(true)}
      onHoverEnd={(e) => setHovered(false)}
    >
      <motion.div className="context _flex _gap-10">
        <motion.div
          className="_circle-o-lg _flex-center-center"
          variants={toolsVariant}
          initial="initial"
          animate={hovered ? 'animate2' : 'animate1'}
        >
          {'<'}
        </motion.div>
        <motion.div
          className="_circle-o-lg _flex-center-center"
          variants={toolsVariant}
          initial="initial"
          animate={hovered ? 'animate2' : 'animate1'}
        >
          -
        </motion.div>
        <motion.div
          className="_circle-o-lg _flex-center-center"
          variants={toolsVariant}
          initial="initial"
          animate={hovered ? 'animate2' : 'animate1'}
        >
          X
        </motion.div>
      </motion.div>
      <div className="body _grid-row _gap-12">
        {/* <motion.div
          className="alt-text"
          animate={
            hovered
              ? { opacity: 1, transition: { delay: 0.5 } }
              : { opacity: 0, transition: { delay: -0.5 } }
          }
        >
          {'explanation of the tool'}
        </motion.div> */}
        {props.children}
      </div>
    </motion.div>
  );
};

export default ElementContainer;
