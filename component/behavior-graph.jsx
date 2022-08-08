/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

import styles from './toolset-style';

const UserBehaviorGraph = (props) => {
  //   console.log('[UserBehaviorGraph:]', props);
  const [hovered, setHovered] = useState(false);

  const actions = props.actions || [];

  let mainCls = [
    [true, '_toolset-item'],
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

  const actionItemsEl = actions.map((action) => {
    <div>
      <div data-cat={'engagement'}></div>
      <div data-cat={'slide-backeard'}></div>
      <div data-cat={'slide-forward'}></div>
      <div data-cat={'presentation'}></div>
      <div data-cat={'time'}></div>
      <div data-cat={'info'}></div>
    </div>;
  });

  return (
    <div className={mainCls.join(' ')} css={[styles, { ...props.style }]}>
      <div className={'context'}></div>
      <div className={'body'}>{actionItemsEl}</div>
    </div>
  );
};

export default UserBehaviorGraph;
