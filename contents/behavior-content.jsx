import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';

// import styles from '../styles/HomeContent.module.css';
import UserBehaviorGraph from '../component/user-behavior-graph';
import { firebaseSessions } from '../services/pitch-sessions';
import PitchSessions from '../component/pitch-sessions';
import PitchSessionFeedbackCard from '../component/pitchSessionFeedbackCard';

const sessionSlideStageGenerator = (session, slidesLayout) => {
  if (!slidesLayout)
    slidesLayout = [0, 4, 4, 5, 3, 2, 2, 1, 4, 5, 5, 3, 3, 0, 2, 0, 1];

  if (session.behavior) {
    let tempSlide = 0;
    let tempStage = 0;
    // let tempBehavior = session.behavior.map((action) => ({ ...action, slide: 0, stage: 0 }));
    if (session.behavior[0].Code)
      session.behavior.forEach((action) => (action.code = action.Code));

    session.behavior = session.behavior.map((action) => {
      if (action.code === 20 || action.code === 21) {
        if (tempStage < slidesLayout[tempSlide] - 1) {
          tempStage++;
        } else if (tempSlide < slidesLayout.length) {
          tempStage = 0;
          tempSlide++;
        }
      }
      if (action.code === 30 || action.code === 31) {
        if (tempStage > 0) {
          tempStage--;
        } else if (tempSlide > 0) {
          tempSlide--;
        }
      }

      return {
        ...action,
        slide: tempSlide,
        stage: tempStage,
      };
    });
    // console.log(session);
  }
  return session;
  // NEXT_TOOLSET: 21,
  // PREV: 30,
  // PREV_TOOLSET: 31,
  // SECTION: 40,
};

const BehaviorContent = () => {
  const [sessions, setSessions] = useState(undefined);
  const [currentSession, setCurrentSession] = useState(undefined);
  const [currentFeedback, setCurrentFeedback] = useState(undefined);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  // console.log(sessions.find((s) => s.id === currentSession));
  // console.log(currentSession);

  const [testVal, setTestVal] = useState(false);

  useEffect(() => {
    firebaseSessions
      .getSessions()
      .then((res) =>
        setSessions(res.map((session) => sessionSlideStageGenerator(session)))
      )
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   if (sessions)
  //     setSessions(
  //       sessions.map((session) => sessionSlideStageGenerator(session))
  //     );
  // }, []);

  useEffect(() => {
    if (currentSession && currentSession.feedbacks)
      setCurrentFeedback(currentSession.feedbacks[0]?.created_at);
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
        <UserBehaviorGraph
          session={currentSession}
          currentFeedback={currentFeedback}
          currentSlide={currentSlide}
          currentStage={currentStage}
        />
        {/* </div> */}
      </div>

      <div
        style={{ overflow: 'hidden', padding: '8px' }}
        className="_grid-2col-fix-left"
      >
        <div>
          <div className="_grid-2col-fix-left">
            <div style={{ width: '200px' }}></div>
          </div>
          <div className="_grid-row _gap-8">
            {currentSession &&
              currentSession.feedbacks &&
              currentSession.feedbacks.map((feedback) => (
                <PitchSessionFeedbackCard
                  key={feedback.created_at}
                  feedback={feedback}
                  setCurrentFeedback={(feedback) => {
                    setCurrentFeedback(feedback);
                    // currentSlide()
                  }}
                  isActive={feedback.created_at === currentFeedback?.created_at}
                />
              ))}
          </div>
          <div className="_grid-2col-fix-left"></div>
        </div>

        <div
          style={{
            height: '300px',
            // width: '600px',
            // minHeight: '250px',
            // maxWidth: '600px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              transform: 'scale(.4)',
            }}
          >
            <div
              style={{
                position: 'relative',
                height: '500px',
                width: '1000px',
                border: 'var(--border-secondary)',
              }}
            >
              {currentFeedback && currentFeedback.type === 'COMMENT' && (
                <div
                  style={{
                    position: 'absolute',
                    left: currentFeedback.position.y,
                    top: currentFeedback.position.x,
                  }}
                  className="_grid-2row-fix-top"
                >
                  <div
                    style={{
                      // position: 'absolute',
                      height: '16px',
                      width: '16px',
                      background: 'var(--color-primary)',
                      borderRadius: '50%',
                    }}
                  ></div>
                  <div
                    style={{
                      // position: 'absolute',
                      // height: '10px',
                      // width: '10px',
                      padding: '12px',
                      border: 'var(--border-primary)',
                      borderRadius: '5px',
                      fontSize: '24px',
                      left: currentFeedback.position.y,
                      top: currentFeedback.position.x,
                    }}
                  >
                    {currentFeedback.content}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehaviorContent;
