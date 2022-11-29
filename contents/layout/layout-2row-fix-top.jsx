import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// import styles from '../styles/HomeContent.module.css';

const Layout2RowFixTop = () => {
  // const [testVal, setTestVal] = useState(false);
  const [layoutState, setLayoutState] = useState(0); // 0 = initial,

  // let tempStyle = {
  //   display: 'flex',
  //   width: '200px',
  //   height: '42px',
  //   border: '1px dashed grey',
  // };

  let bodyVariant = {
    initial: { height: '0', opacity: 0 },
    hidden: { height: '0', opacity: 0 },
    visible: {
      height: 'auto',
      opacity: 1,
    },
  };

  const bodyTransition = {
    duration: '1.2',
    type: 'easeOut',
    // opacity: { duration: '1', delay: 0.4 },
  };

  let secVariant = {
    initial: { y: '-150px', height: '0', opacity: 0 },
    animate: {
      y: '0',
      height: 'auto',
      opacity: 1,
      transition: {
        // delay: '0.2',
        duration: '0.4',
        type: 'easeOut',
        // opacity: { duration: '1', delay: 0.4 },
      },
    },
  };

  const layoutStateToggle = () => {
    layoutState === 0 ? setLayoutState(1) : setLayoutState(0);
  };
  return (
    <div
      style={{
        height: '100%',
      }}
    >
      <div
        classNmae="contianer"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        {/* <div classNmae="contianer _grid-2row-fix-top" style={{}}> */}
        <div className="head" onClick={() => layoutStateToggle()}>
          <div
            style={{
              // height: '100px',
              // margin: '20px',
              border: 'var(--border-dev)',
              borderRadius: '5px',
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
        </div>

        <AnimatePresence>
          <motion.div
            // layout
            classNmae="body"
            variants={bodyVariant}
            initial={'initial'}
            animate={layoutState === 0 ? 'hidden' : 'visible'}
            transition={bodyTransition}
            style={{
              // margin: '20px',
              // flexGrow: 1,
              border: 'var(--border-dev)',
              // borderRadius: '5px',
              overflow: 'hidden',
              backgroundColor: 'salmon',
            }}
          >
            {layoutState != 0 && (
              <motion.div
                variants={secVariant}
                initial={'initial'}
                animate={'animate'}
                exit={'initial'}
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
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Layout2RowFixTop;
