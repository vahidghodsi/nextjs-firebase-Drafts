import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// import styles from '../styles/HomeContent.module.css';
import UserBehaviorGraph from '../component/user-behavior-graph';
import { firebaseSessions } from '../services/pitch-sessions';
import PitchSessions from '../component/pitch-sessions';

const BehaviorContent = () => {
  const [sessions, setSessions] = useState(undefined);
  const [currentSession, setCurrentSession] = useState(undefined);
  const [testVal, setTestVal] = useState(false);
  // console.log(sessions.find((s) => s.id === currentSession));
  // console.log(currentSession);

  useEffect(() => {
    firebaseSessions
      .getSessions()
      .then((res) => setSessions(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="_grid-2col-fix-left">
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
      <div>
        <PitchSessions
          items={sessions}
          setCurrentSession={(session_id) =>
            setCurrentSession(sessions.find((s) => s.id === session_id))
          }
          currentSession={currentSession}
        />
      </div>

      <div>
        <div>
          <UserBehaviorGraph session={currentSession} />
        </div>
      </div>
    </div>
  );
};

export default BehaviorContent;
