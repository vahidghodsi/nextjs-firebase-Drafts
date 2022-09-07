import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';

// import styles from '../styles/HomeContent.module.css';
import UserBehaviorGraph from '../component/user-behavior-graph';
import { auth } from '../services/firebase-app';

import { firebaseUserService } from '../services/user';
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
  const slidePreviewFrame = { width: 1000, height: 500, scaleRatio: 0.4 };

  useEffect(() => {
    // ===== SESSION REGISTRATION
    const getSessionCallback = () => {
      firebaseSessions
        .getSessions()
        .then((res) => {
          let tempSessions = res.filter((session) => session.created_at);
          // .filter((session) => session.created_at > 1661465000000);
          // .map((session) => sessionSlideStageGenerator(session));

          setSessions(
            tempSessions.sort(
              (sessionA, sessionB) => sessionB.created_at - sessionA.created_at
            )
          );
        })
        .catch((err) => console.log(err));
    };

    // ** the auth does not remain, from getServerSideProps. must signin once again here
    // console.log(auth.currentUser);
    if (!auth.currentUser) {
      firebaseUserService
        .userSignInAnonymously()
        .then(() => {
          getSessionCallback();
        })
        .catch((err) => console.log(err));
    } else {
      getSessionCallback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (sessions)
  //     setSessions(
  //       sessions.map((session) => sessionSlideStageGenerator(session))
  //     );
  // }, []);

  // useEffect(() => {
  //   if (sessions) {
  //     let tempSessions = sessions.sort(
  //       (sessionA, sessionB) => sessionA.created_at - sessionB.created_at
  //     );
  //     console.log(tempSessions);
  //     setSessions(tempSessions);
  //   }
  //   // [sessions, setSessions]
  // }, [sessions]);

  useEffect(() => {
    if (currentSession && currentSession.feedbacks)
      setCurrentFeedback(currentSession.feedbacks[0]?.created_at);
    console.log(currentSession);
  }, [currentSession]);

  return (
    <div className="_grid-3row-fix-top-middle _H-fit">
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
        style={{ height: '100%', overflow: 'hidden', padding: '8px' }}
        className="_grid-2col-fix-left"
      >
        <div style={{ height: '100%', padding: '8px', overflow: 'hidden' }}>
          <div
            className="_grid-row _gap-8"
            style={{ height: '100%', overflow: 'scroll', padding: '8px' }}
          >
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
        </div>

        <div
          style={{
            height: '350px',
            // width: '600px',
            // minHeight: '250px',
            // maxWidth: '600px',
            // overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
          }}
        >
          <div
            style={{
              position: 'relative',
              height: '300px',
              width:
                (currentSession?.screen_width / currentSession?.screen_height) *
                300,
              // height: '100%',
              // width: '100%',
              // height: currentSession.screen_height || '100%',
              // width: currentSession.screen_width || '100%',
              // width: '600px',
              // minHeight: '250px',
              // maxWidth: '600px',
              // overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: 'var(--border-primary)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '0',
                right: '0',
                fontSize: '12px',
                padding: '6px',
              }}
            >
              <span>{currentSession?.screen_width}</span> {' * '}
              <span>{currentSession?.screen_height}</span>
            </div>
            <div
              style={{
                transform: `scale(${slidePreviewFrame.scaleRatio})`,
              }}
            >
              <div
                style={{
                  position: 'relative',
                  height: `${slidePreviewFrame.height}px`,
                  width: `${slidePreviewFrame.width}px`,
                  border: 'var(--border-secondary)',
                }}
              >
                {currentFeedback && currentFeedback.type === 'COMMENT' && (
                  <div
                    style={{
                      position: 'absolute',
                      left:
                        (currentFeedback.position.x /
                          currentFeedback.position.slide_width) *
                        slidePreviewFrame.width,
                      top:
                        (currentFeedback.position.y /
                          currentFeedback.position.slide_height) *
                        slidePreviewFrame.height,
                    }}
                    className="_grid-2row-fix-top"
                  >
                    <div
                      style={{
                        position: 'relative',
                        height: '16px',
                        width: '16px',
                        top: '-8px',
                        left: '-8px',
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
                        // left: currentFeedback.position.x,
                        // top: currentFeedback.position.y,
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
    </div>
  );
};

export default BehaviorContent;
