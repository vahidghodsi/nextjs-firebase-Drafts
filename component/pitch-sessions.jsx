/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { useState } from 'react';
import PitchSessionCard from './pitch-session-card';

import styles, { sessionsVariant } from './pitch-sessions-style';

const PitchSessions = (props) => {
  //   console.log('[PitchSessions:]', props);
  // const sessions = props.items || [];
  const sessions = props.items
    ? props.items.filter(
        (session) => session.behavior && session.behavior.length > 1
      )
    : [];
  // console.log(sessions);

  let mainCls = [
    [true, '_user-behavior'],
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
    <PitchSessionCard
      key={session.id}
      session={session}
      active={props.currentSession && session.id === props.currentSession.id}
      setCurrentSession={(id) => props.setCurrentSession(session.id)}
      variants={sessionsVariant}
    />
  ));

  return (
    <div className={mainCls.join(' ')} css={[styles, { ...props.style }]}>
      <div className="context"></div>
      <motion.div
        className="body _grid-row _gap-8"
        variants={sessionsVariant}
        initial={'initial'}
        animate={'animate'}
      >
        {sessionsEl}
      </motion.div>
    </div>
  );
};

export default PitchSessions;
