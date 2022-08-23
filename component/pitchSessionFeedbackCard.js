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

const PitchSessionFeedbackCard = (props) => {
  //   console.log('[PitchSessionFeedbackCard:]', props);
  const feedback = props.feedback;
  // console.log(sessions);

  const isActive = props.active;

  let mainCls = [
    [true, '_pitch-session-card'],
    [true, '_grid-2row-fix-top'],
    [isActive, 'active'],
    // [!isActive, '_gap-0'],

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

  const feedbackDate = feedback.created_at
    ? dayjs(feedback.created_at).format('DD MMM YY')
    : '---';
  // console.log(feedbackDate);

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
      onClick={() => props.setCurrentFeedback(feedback)}
    >
      <div className="session-info">
        <div className="_grid-2col-fix-right">
          <div className="session-user">{feedback.type}</div>
          {/* <div className="session-date">{feedbackDate}</div> */}
          <div className="session-date">
            {feedback.slide} / {feedback.stage}
          </div>
        </div>
      </div>
      {feedback.content && <div>{feedback.content}</div>}
      {/* <AnimatePresence>
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
      </AnimatePresence> */}
    </motion.div>
  );
};

export default PitchSessionFeedbackCard;
