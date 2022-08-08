/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

import styles from './user-behavior-graph-style';

const sampleSession = {
  created_at: 1659509282534,
  user_id: 'vahid',
  behavior: [
    {
      created_at: 1659509282534,
      Code: 10,
    },
    {
      created_at: 1659509331593,
      Code: 50,
    },
    {
      Code: 50,
      created_at: 1659509606874,
    },
    {
      Code: 20,
      created_at: 1659509615677,
    },
    {
      Code: 60,
      created_at: 1659509617263,
    },
    {
      created_at: 1659509619808,
      Code: 20,
    },
    {
      created_at: 1659509622231,
      Code: 20,
    },
    {
      Code: 20,
      created_at: 1659509623407,
    },
    {
      Code: 20,
      created_at: 1659509624232,
    },
    {
      Code: 20,
      created_at: 1659509624492,
    },
    {
      Code: 60,
      created_at: 1659509626049,
    },
    {
      created_at: 1659509630569,
      Code: 20,
    },
    {
      Code: 20,
      created_at: 1659509630973,
    },
    {
      Code: 20,
      created_at: 1659509631894,
    },
    {
      Code: 20,
      created_at: 1659509632481,
    },
    {
      created_at: 1659509633187,
      Code: 20,
    },
    {
      created_at: 1659509633857,
      Code: 20,
    },
    {
      created_at: 1659509641061,
      Code: 50,
    },
    {
      Code: 50,
      created_at: 1659509650189,
    },
    {
      Code: 55,
      created_at: 1659509653079,
    },
  ],
  feedbacks_deleted: [
    {
      type: 'COMMENT',
      slide: 2,
      stage: 0,
      created_at: 1659509650189,
      content: 'damn it. ',
      deleted_at: 1659509653072,
      position: {
        x: 386,
        y: 719,
      },
    },
  ],
  feedbacks: [
    {
      created_at: 1659509331593,
      stage: 0,
      content: 'I like this part of the presentation. ',
      position: {
        y: 544,
        x: 575,
      },
      type: 'COMMENT',
      slide: 0,
    },
    {
      slide: 0,
      type: 'COMMENT',
      stage: 0,
      position: {
        y: 700,
        x: 416,
      },
      created_at: 1659509606874,
      content: 'dont get too excited, its just a test.',
    },
    {
      type: 'LIKE',
      slide: 0,
      created_at: 1659509617263,
    },
    {
      slide: 1,
      created_at: 1659509626049,
      type: 'DISLIKE',
    },
    {
      slide: 2,
      content: 'no content',
      position: {
        y: 514,
        x: 385,
      },
      stage: 0,
      type: 'COMMENT',
      created_at: 1659509641061,
    },
  ],
};

const UserBehaviorGraph = (props) => {
  //   console.log('[UserBehaviorGraph:]', props);
  const [hovered, setHovered] = useState(false);

  // const actions = props.actions || [1, 2, 3];
  const actions = sampleSession.behavior;
  const session_start = actions[0].created_at;

  let mainCls = [
    [true, '_user-behavior'],
    // [true, '_grid-row'],
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

  const actionItemsEl = actions.map((action, index, array) => {
    let at = 0;
    if (index > 0) at = action.created_at - array[0].created_at;
    let at_sec = parseInt(at / 100);
    let at_min = parseInt(at / 3600);
    console.log(at_sec);

    let diff = 0;
    if (index > 0) diff = action.created_at - array[index - 1].created_at;
    let diff_sec = parseInt(diff / 100);
    let diff_min = parseInt(diff / 3600);
    // console.log(diff_min, ':', diff_sec);

    return (
      <div className={'behavior-action'}>
        <div data-cat={'info'}></div>
        <div data-cat={'time'}>{`${at_min}:${at_sec}`}</div>
        <div data-cat={'time'}>{`${diff_min}:${diff_sec}`}</div>
        <div data-cat={'presentation'}></div>
        <div data-cat={'slide-forward'}></div>
        <div data-cat={'slide-backward'}></div>
        <div data-cat={'engagement'}></div>
      </div>
    );
  });

  return (
    <div className={mainCls.join(' ')} css={[styles, { ...props.style }]}>
      <div className={'context'}></div>
      <div className={'body'}>{actionItemsEl}</div>
    </div>
  );
};

export default UserBehaviorGraph;
