/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

import BlockTool from './block-tool';

import styles, { toolsVariant } from './block-style';

const Block = (props) => {
  // console.log('[Block:]', props.children.props);
  const [hovered, setHovered] = useState(false);

  let mainCls = [
    [true, '_block'],
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

  return (
    <motion.div
      className={mainCls.join(' ')}
      css={[styles, { ...props.style }]}
      // whileHover={{ scale: 1.2, zIndex: 100, transition: { delay: 0.5 } }}
      onHoverStart={(e) => setHovered(true)}
      onHoverEnd={(e) => setHovered(false)}
    >
      <motion.div className="_block_context _flex _gap-8">
        <BlockTool visible={hovered} order={3}>
          {'<'}
        </BlockTool>
        <BlockTool visible={hovered} order={2}>
          {'-'}
        </BlockTool>
        <BlockTool visible={hovered} order={1}>
          {'x'}
        </BlockTool>
      </motion.div>

      <div className="_body_container _grid-row _gap-12">
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

export default Block;
