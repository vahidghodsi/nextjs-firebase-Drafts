/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

import styles from './toolset-item-style';

const ToolsetItem = (props) => {
  //   console.log('[ToolsetItem:]', props);
  const [hovered, setHovered] = useState(false);

  let mainCls = [
    [true, '_toolset-item'],
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
    <motion.li
      className={mainCls.join(' ')}
      css={[styles, { ...props.style }]}
      whileHover={{
        scale: 1.1,
        zIndex: 100,
        transition: { delay: 0.6, type: 'easeInOut' },
      }}
      onHoverStart={(e) => setHovered(true)}
      onHoverEnd={(e) => setHovered(false)}
    >
      <div className="icon">{'X'}</div>
      <motion.div
        className="alt-text"
        animate={
          hovered
            ? { opacity: 1, transition: { delay: 1 } }
            : { opacity: 0, transition: { delay: -0.5 } }
        }
      >
        <span>{props.children}</span>
      </motion.div>
    </motion.li>
  );
};

export default ToolsetItem;
