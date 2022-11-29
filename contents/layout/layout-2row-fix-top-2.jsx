import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// import styles from '../styles/HomeContent.module.css';

const Layout2RowFixTop2 = () => {
  // const [testVal, setTestVal] = useState(false);
  const [layoutState, setLayoutState] = useState(0); // 0 = initial,

  // let tempStyle = {
  //   display: 'flex',
  //   width: '200px',
  //   height: '42px',
  //   border: '1px dashed grey',
  // };

  const headContainerVariant = {
    initial: { height: '100%' },
    animate: { height: 'auto' },
  };

  const headContainerTransition = {
    duration: '1.2',
    type: 'easeOut',
  };

  const headVariant = {
    initial: { justifySelf: 'center' },
    animate: { justifySelf: 'start' },
  };

  const headTransition = {
    duration: '1.2',
    type: 'easeOut',
  };

  const layoutStateToggle = () => {
    layoutState === 0 ? setLayoutState(1) : setLayoutState(0);
  };

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      <div
        classNmae="contianer"
        style={{
          position: 'relative',

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <motion.div
          classNmae="head-contianer"
          style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
          }}
        >
          <motion.div
            layout
            className="head"
            // variants={headVariant}
            // initial={'initial'}
            // animate={layoutState === 0 ? 'initial' : 'animate'}
            // transition={headTransition}
            onClick={() => layoutStateToggle()}
          >
            <div
              style={{
                border: 'var(--border-dev)',
                backgroundColor: 'white',
              }}
            >
              <div
                style={{
                  height: '50px',
                  margin: '20px',
                  border: 'var(--border-secondary)',
                  borderRadius: '5px',
                }}
              >
                2 col fix right
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div
          style={{
            border: 'var(--border-dev)',
            overflow: 'hidden',
            backgroundColor: 'salmon',
            height: '100%',
          }}
        >
          <div
            style={{
              // height: '100px',
              // margin: '20px',
              border: 'var(--border-secondary)',
              borderRadius: '5px',
            }}
          >
            <div>2</div>
            <div>2</div>
            <div>2</div>
            <div>2s</div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Layout2RowFixTop2;
