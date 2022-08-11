/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { useState } from 'react';

import styles from './pitch-sessions-style';

const PitchSessions = (props) => {
  //   console.log('[PitchSessions:]', props);
  const sessions = props.items || [];
  // console.log(sessions);

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

  const sessionsEl = sessions.map((session, index) => (
    <motion.div
      key={index}
      className={'session'}
      // style={{ width: '20px' }}
      // whileHover={{ y: 0 }}
      // data-action-code={action.code}
      onClick={() => props.setCurrentSession(session.id)}
    >
      <div> {session.id}</div>
      <div>{session.user_id}</div>
    </motion.div>
  ));

  return (
    <div className={mainCls.join(' ')} css={[styles, { ...props.style }]}>
      <div className="context"></div>
      <div className="body _grid-row">{sessionsEl}</div>
    </div>
  );
};

export default PitchSessions;
