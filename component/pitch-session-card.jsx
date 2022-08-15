/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import dayjs from 'dayjs';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import styles, {
  sessionCardVariant,
  sessionCardInfoVariant,
} from './pitch-session-card-style';

const PitchSessionCard = (props) => {
  //   console.log('[PitchSessionCard:]', props);
  const sessions = props.items || [];
  // console.log(sessions);
  const session = props.session;
  //  const isActive = props.currentSession && session.id === props.currentSession.id;
  const isActive = props.active;
  if (isActive) console.log(session);
  const behavior = session.behavior;
  const feedback = session.feedback;

  let mainCls = [
    [true, '_pitch-session-card'],
    [true, '_grid-2row-fix-top'],
    [isActive, 'active'],
    // [!isActive, '_gap-0'],
    [!behavior, 'no-content'],
    [behavior && behavior.length > 1, 'valid-data'],
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

  const sessionDate = session.created_at
    ? dayjs(session.created_at).format('DD MMM YY')
    : '---';
  // console.log(sessionDate);

  return (
    <motion.div
      className={mainCls.join(' ')}
      css={[styles, { ...props.style }]} // whileHover={{ y: 0 }}
      // data-action-code={action.code}
      // variants={props.variants}
      variants={sessionCardVariant}
      // layout
      initial={'initial'}
      animate={'animate'}
      onClick={() => props.setCurrentSession(session.id)}
    >
      <div className="session-info">
        <div className="_grid-2col-fix-right">
          <div className="session-date">{sessionDate}</div>
          <div>{behavior?.length}</div>
        </div>
        <div className="session-user">{session.user_id}</div>
        <div> {session.id}</div>
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.div
            variants={sessionCardInfoVariant}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
            className="session-more-info"
          >
            <div className="_grid-2col-fix-right">
              behavior items : <span>{behavior?.length}</span>
            </div>
            <div className="_grid-2col-fix-right">
              feedback : <span>{feedback?.length}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PitchSessionCard;
