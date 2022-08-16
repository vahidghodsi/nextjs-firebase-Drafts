/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { useState } from 'react';
import cloneObject from '../util/cloneObject';

import styles from './user-behavior-graph-style';

const sampleSession = {
  created_at: 1659509282534,
  user_id: 'vahid',
  behavior: [
    {
      created_at: 1659509282534,
      code: 10,
    },
    {
      created_at: 1659509331593,
      code: 50,
    },
    {
      code: 20,
      created_at: 1659509333000,
    },
    {
      code: 50,
      created_at: 1659509606874,
    },
    {
      code: 20,
      created_at: 1659509615677,
    },
    {
      code: 60,
      created_at: 1659509617263,
    },
    {
      created_at: 1659509619808,
      code: 20,
    },
    {
      created_at: 1659509622231,
      code: 20,
    },
    {
      code: 20,
      created_at: 1659509623407,
    },
    {
      code: 20,
      created_at: 1659509624232,
    },
    {
      code: 20,
      created_at: 1659509624492,
    },
    {
      code: 60,
      created_at: 1659509626049,
    },
    {
      created_at: 1659509630569,
      code: 20,
    },
    {
      code: 30,
      created_at: 1659509630973,
    },
    {
      code: 20,
      created_at: 1659509631894,
    },
    {
      code: 20,
      created_at: 1659509632481,
    },
    {
      created_at: 1659509633187,
      code: 20,
    },
    {
      created_at: 1659509633857,
      code: 20,
    },
    {
      created_at: 1659509641061,
      code: 50,
    },
    {
      code: 50,
      created_at: 1659509650189,
    },
    {
      code: 55,
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
  const session = props.session ? cloneObject(props.session) : sampleSession;

  // const actions = props.actions || [1, 2, 3];
  const actions = session.behavior || [];

  const actionCodesNavigation = [10, 15, 20, 21, 30, 31];
  const actionCodesEngagement = [50, 51, 55, 60, 65, 70, 75];

  const actionsNavigation = actions.filter((action) =>
    actionCodesNavigation.includes(action.Code)
  );
  // const session_start = actions[0].created_at;
  const session_start =
    actions.length > 0 ? dayjs(actions[0].created_at) : undefined;
  const session_end =
    actions.length > 0
      ? dayjs(actions[actions.length - 1].created_at)
      : undefined;
  // console.log(session_end);

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

  // =====  ==========
  const widthAdjustUnit = 8 / 1000;

  const actionCols = [];
  actions.forEach((action) => {
    if (actionCodesNavigation.includes(action.Code)) actionCols.push(action);
    if (actionCodesEngagement.includes(action.Code)) {
      if (actionCols[actionCols.length - 1].engagement) {
        actionCols[actionCols.length - 1].engagement.push(action);
      } else {
        actionCols[actionCols.length - 1].engagement = [action];
      }
    }
  });

  const actionItemsEl = actionCols.map((action, index, array) => {
    let at_sec = dayjs(action.created_at).diff(session_start, 'seconds');
    let at_min = dayjs(action.created_at).diff(session_start, 'minutes');
    let atDisplay = `${at_min}:${at_sec % 60}`;
    // console.log(at_min, ':', at_sec % 60);

    let diff_millisec = 0;
    let diff_sec = 0;
    let diff_min = 0;
    if (array[index + 1]) {
      diff_millisec = dayjs(array[index + 1].created_at).diff(
        dayjs(action.created_at)
      );
      diff_sec = dayjs(array[index + 1].created_at).diff(
        dayjs(action.created_at),
        'seconds'
      );
      diff_min = dayjs(array[index + 1].created_at).diff(
        dayjs(action.created_at),
        'minutes'
      );
    }
    let diffDisplay =
      diff_sec < 60 ? `${diff_sec}` : `${diff_min}:${diff_sec % 60}`;
    // console.log(diff_sec);

    // let itemWidth = diff_sec < 60 ? diff_sec * 5 : 240;

    let itemWidth = diff_millisec * widthAdjustUnit;

    // **** code is in capital C , change it to small letter *****

    let engagementEl = null;
    if (action.engagement) {
      engagementEl = action.engagement.map((engag, index, array) => {
        let last_item = index < array.length ? array[index + 1] : engag;
        // console.log(engag);
        let engag_diff_millisec = 0;
        // let engag_diff_sec = 0;
        // let engag_diff_min = 0;

        if (array[index + 1]) {
          engag_diff_millisec = dayjs(array[index + 1].created_at).diff(
            dayjs(engag.created_at)
          );
          // engag_diff_sec = dayjs(array[index + 1].created_at).diff(
          //   dayjs(engag.created_at),
          //   'seconds'
          // );
          // engag_diff_min = dayjs(array[index + 1].created_at).diff(
          //   dayjs(engag.created_at),
          //   'minutes'
          // );
        }

        return (
          <div
            style={{ width: engag_diff_millisec * widthAdjustUnit }}
            key={engag.created_at}
            data-cat={'engagement-item'}
          >
            {engag.Code === 50 && <div className={'action-sign'}>{'+'}</div>}
            {engag.Code === 51 && <div className={'action-sign'}>{'*'}</div>}
            {engag.Code === 55 && <div className={'action-sign'}>{'-'}</div>}
            {engag.Code === 60 && <div className={'action-sign'}>{'@'}</div>}
            {engag.Code === 65 && <div className={'action-sign'}>{'-@'}</div>}
            {engag.Code === 70 && <div className={'action-sign'}>{'%'}</div>}
            {engag.Code === 75 && <div className={'action-sign'}>{'-%'}</div>}
          </div>
        );
      });

      let firstEngagementOffset = dayjs(action.engagement[0].created_at).diff(
        dayjs(action.created_at)
      );
      // console.log(firstEngagementOffset);
      engagementEl.unshift(
        <div style={{ width: firstEngagementOffset * widthAdjustUnit }}></div>
      );
    }
    // console.log(engagementEl);

    return (
      <motion.div
        key={action.created_at}
        className={'behavior-action'}
        style={{ width: itemWidth }}
        whileHover={{ y: 0 }}
        data-action-code={action.Code}
      >
        <div data-cat={'info'}></div>
        <div data-cat={'time'}>{atDisplay}</div>
        {/* <div data-cat={'time-diff'}>{diff_sec > 1 && diffDisplay}</div> */}
        <div data-cat={'presentation'}></div>
        <div data-cat={'slide-forward'}>
          {action.Code === 20 && <div className={'action-sign'}>{'>'}</div>}
          {action.Code === 20 && <div className="time-span-line"></div>}
          {action.Code === 20 && diff_sec > 1 && (
            <div className={'action-text'}>{diffDisplay}</div>
          )}
          {/* {action.Code === 20 && <div className={'action-sign'}>{'>'}</div>} */}
        </div>
        <div data-cat={'slide-backward'}>
          {action.Code === 30 && <div className={'action-sign'}>{'<'}</div>}
          {action.Code === 30 && <div className="time-span-line"></div>}
          {action.Code === 30 && diff_sec > 1 && (
            <div className={'action-text'}>{diffDisplay}</div>
          )}
        </div>
        <div data-cat={'engagement'}>{engagementEl}</div>
      </motion.div>
    );
  });

  let session_length = session_end
    ? dayjs(session_end).diff(session_start)
    : undefined;
  let session_length_sec = session_length ? session_length / 1000 : undefined;

  let timlineScalebarEls = null;
  if (session_length) {
    // console.log(session_length);
    let scaleBarDivs = parseInt(session_length / 10000) + 1;
    timlineScalebarEls = [...Array(scaleBarDivs)].map((i, index) => (
      <div key={index} style={{ width: 10000 * widthAdjustUnit }}>
        <div>{`${parseInt((index * 10000) / 60000)}:${parseInt(
          (index * 10) % 60
        )}`}</div>
      </div>
    ));
    timlineScalebarEls.push(
      <div key={scaleBarDivs + 1} style={{ width: '10px' }}>
        <div>{`${parseInt((scaleBarDivs * 10000) / 60000)}:${parseInt(
          (scaleBarDivs * 10) % 60
        )}`}</div>
      </div>
    );
  }
  // =====  ==========

  return (
    <div className={mainCls.join(' ')} css={[styles, { ...props.style }]}>
      <div className={'context'}></div>
      <div className={'body'}>
        <div className="_grid-2row">
          <div className="timeline-row">{actionItemsEl}</div>
          <div className="timeline-row scalebar">{timlineScalebarEls}</div>
        </div>
      </div>
    </div>
  );
};

export default UserBehaviorGraph;
