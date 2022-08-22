import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';

// import styles from '../styles/HomeContent.module.css';
import UserBehaviorGraph from '../component/user-behavior-graph';
import { firebaseSessions } from '../services/pitch-sessions';
import PitchSessions from '../component/pitch-sessions';

const BehaviorContent = () => {
  const [sessions, setSessions] = useState(undefined);
  const [currentSession, setCurrentSession] = useState(undefined);
  const [testVal, setTestVal] = useState(false);
  const [currentFeedbak, setCurrentFeedbak] = useState(undefined);
  // console.log(sessions.find((s) => s.id === currentSession));
  // console.log(currentSession);

  useEffect(() => {
    firebaseSessions
      .getSessions()
      .then((res) => setSessions(res))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (currentSession && currentSession.feedbacks)
      setCurrentFeedbak(currentSession.feedbacks[0]);
  }, [currentSession]);

  return (
    <div className="_grid-2row-fix-top">
      {/* <div>
        <motion.div
          style={{ height: '20px', width: '20px' }}
          initial={{ x: 0, opacity: 0 }}
          animate={{
            x: 200,
            opacity: 1,
            background: 'lightblue',
            borderRadius: '50%',
            rotate: '90deg',
            transition: { duration: 2, type: 'easeInOut' },
          }}
        />
      </div> */}
      <div style={{ overflow: 'hidden', padding: '8px' }}>
        <PitchSessions
          items={sessions}
          setCurrentSession={(session_id) =>
            setCurrentSession(sessions.find((s) => s.id === session_id))
          }
          currentSession={currentSession}
        />
      </div>

      <div style={{ overflow: 'hidden', padding: '8px' }}>
        {/* <div> */}
        <UserBehaviorGraph session={currentSession} />
        {/* </div> */}
      </div>

      <div
        style={{ overflow: 'hidden', padding: '8px' }}
        className="_grid-2col-fix-right"
      >
        <div>
          <div className="_grid-2col-fix-left">
            <div style={{ width: '200px' }}></div>
          </div>
          <div style={{}}>
            {currentSession &&
              currentSession.feedbacks &&
              currentSession.feedbacks.map((feedback) => (
                <div className="_grid-2col-fix-right">
                  <div>{feedback.type}</div>
                  <div>{dayjs(feedback.created_at).format('DD MMM YY')}</div>
                </div>
              ))}
          </div>
          <div className="_grid-2col-fix-left"></div>
        </div>

        <div>
          <div
            style={{
              height: '180px',
              width: '320px',
              border: 'var(--border-secondary)',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BehaviorContent;
