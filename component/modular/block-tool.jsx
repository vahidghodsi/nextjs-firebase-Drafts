/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Block = (props) => {
  // console.log('[Block:]', props.children.props);
  // const [hovered, setHovered] = useState(false);
  const order = props.order || 1;
  const toolsVariant = {
    initial: {
      opacity: 0,
      x: 8 * order,
      // y: order,
      // boxShadow: 'var(--shadow-none)',
    },
    animate: {
      opacity: 0,
      x: 4,
      // y: order,
      transition: { duration: 0.15, delay: 0.05 * order, type: 'spring' },
      // boxShadow: 'var(--shadow-none)',
    },
    animate2: {
      opacity: 1,
      x: 0 * order,
      y: 0 * order,
      transition: { duration: 0.08, delay: 0.02 * order, type: 'spring' },
      // boxShadow: 'var(--shadow-secondary)',
    },
  };

  let mainCls = [
    [true, '_block_context_tool'],
    [true, '_circle-o'],
    [true, '_flex-center-center'],
    [true, '_cursor-pointer'],
    // [true, '_grid-row'],
    // [true, '_gap-12'],
    [props.className, props.className],
    [props.secondary, 'secondary'],
    [props.disabled, 'disabled'],
    [props.xs, '_xs'],
    [props.sm, '_sm'],
    [props.lg, '_lg'],
    [props.xl, '_xl'],
  ]
    .map((classCondition) => (classCondition[0] ? classCondition[1] : null))
    .filter((cls) => cls);
  const visible = props.visible;

  return (
    <motion.div
      className={mainCls.join(' ')}
      variants={toolsVariant}
      initial="initial"
      animate={visible ? 'animate2' : 'animate1'}
      whileHover={{ scale: 1.1, zIndex: 50, transition: { delay: 0.0 } }}
    >
      {props.children}
    </motion.div>
  );
};

export default Block;
