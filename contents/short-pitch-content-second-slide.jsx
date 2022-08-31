import InputRatesScale from '../component/input-rate-scale';
import InputCheckbox from '../component/input-checkbox';
import InputSwitch from '../component/input-switch';
import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles/HomeContent.module.css';
import Toolset from '../component/toolset';
import Link from 'next/dist/client/link';

const ShortPitchContentSecondSlide = ({ stage, setStage }) => {
  const [testVal, setTestVal] = useState(false);
  const startStage = 2;

  let tempStyle = {
    display: 'flex',
    justifyContent: testVal ? 'flex-start' : 'flex-end',
    width: '200px',
    height: '42px',
    border: '1px dashed grey',
  };

  let secContainerVariant = {
    initial: { opacity: '0', height: '0' },
    animate: {
      opacity: '1',
      height: 'auto',
      transition: { duration: '1', type: 'easeInOut' },
    },
  };

  let secVariant = {
    initial: { y: '-270px', opacity: 0 },
    animate: {
      y: '0',
      opacity: 1,
      transition: {
        duration: '1',
        type: 'easeInOut',
        opacity: { duration: '1', delay: 0.4 },
      },
    },
  };

  return (
    <div
      className="_grid-2row-fix-top"
      style={{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'visible',
      }}
    >
      <div className="_bold" style={{ fontSize: '24px', margin: '20px 0' }}>
        Imagine you need PROJECTs (as an architect)
      </div>

      <div className="_grid-row _gap-0">
        <motion.div
          className="section-contaienr"
          style={{ overflow: 'hidden' }}
          variants={secContainerVariant}
          initial={'initial'}
          animate={'animate'}
        >
          <motion.div
            variants={secVariant}
            initial={'initial'}
            animate={'animate'}
            style={{ padding: '32px' }}
          >
            <div
              className="_bold"
              style={{ fontSize: '24px', marginBottom: '32px' }}
            >
              What you would need to do is
            </div>

            <div
              className="_grid-row _gap-20"
              style={{ maxWidth: '850px', gap: '32px' }}
            >
              <div className="_grid-2col-fix-right">
                <div>
                  to go through a{' '}
                  <span className="_f-underline ">troublesome process</span> to
                  find an <span className="_f-underline ">architect </span>
                </div>
                <div>To get to your design</div>
              </div>

              <div
                className="_grid-col _bold"
                style={{
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  margin: '0 50px',
                }}
              >
                <div>You</div>
                <div style={{ fontSize: '20px', textAlign: 'center' }}>
                  {'->'}
                </div>
                <div style={{ textAlign: 'center' }}>Architect</div>
                <div style={{ fontSize: '20px', textAlign: 'center' }}>
                  {'->'}
                </div>
                <div style={{ textAlign: 'right' }}>Design</div>
              </div>

              <div style={{ fontSize: '15px', margin: '0 50px' }}>
                <p>
                  In other words, clients need the{' '}
                  <span className="_f-underline _bold">outcome</span>, but they
                  have to choose architects from many options, without
                  necessarily knowing why, in hope that they can get what they
                  need
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        {/* ===== ========================= */}

        <div
          style={{
            overflow: 'hidden',
            height: '35px',
            // paddingBottom: '4px',
          }}
        >
          <motion.div
            variants={secVariant}
            initial={{ y: '-32px', opacity: 0 }}
            animate={
              stage >= startStage
                ? { y: '0', opacity: 1 }
                : { y: '-32px', opacity: 1 }
            }
            transition={
              stage === startStage
                ? { delay: 2, duration: 0.3 }
                : { delay: 0.5, duration: 0.3 }
            }
            style={{
              display: 'flex',
              flexDirection: 'column',
              // justifyContent: 'center',
              alignItems: 'center',
              borderBottom: 'var(--border-secondary)',
              height: '50px',
              // borderTop: 'var(--border-secondary)',
            }}
          >
            <div
              style={{
                position: 'relative',
                // top: '-10px',
                height: '20px',
                width: '20px',
                border: 'var(--border-primary)',
                borderRadius: '50%',
              }}
              onClick={() => setStage(3)}
            ></div>
            {/* {stage === 0 && ( */}
            <div
              style={{
                fontSize: '10px',z
              }}
            >
              click to continue
            </div>
            {/* )} */}
          </motion.div>
        </div>

        {/* =====  =========================*/}

        {stage > startStage && (
          <motion.div
            className="section-contaienr"
            style={{ overflow: 'hidden' }}
            variants={secContainerVariant}
            initial={'initial'}
            animate={'animate'}
          >
            <motion.div
              variants={secVariant}
              initial={'initial'}
              animate={'animate'}
              style={{ padding: '32px' }}
            >
              <div
                className="_bold"
                style={{ fontSize: '24px', marginBottom: '32px' }}
              >
                While what you really would need is
              </div>
              <div
                className="_grid-row"
                style={{ maxWidth: '850px', gap: '32px' }}
              >
                <div className="_grid-2col-fix-right">
                  <div>
                    to get to the{' '}
                    <span className="_f-underline ">RIGHT DESGIN</span> -{' '}
                    <span className="_f-underline ">
                      specific to your project{' '}
                    </span>
                  </div>
                  <div>and get to the architect</div>
                </div>

                <div
                  className="_grid-col _bold"
                  style={{
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    margin: '0 50px',
                  }}
                >
                  <div>You</div>
                  <div style={{ fontSize: '20px', textAlign: 'center' }}>
                    {'->'}
                  </div>
                  <div style={{ textAlign: 'center' }}>Design</div>
                  <div style={{ fontSize: '20px', textAlign: 'center' }}>
                    {'->'}
                  </div>
                  <div style={{ textAlign: 'right' }}>Architect</div>
                </div>

                <div style={{ fontSize: '16px', margin: '0 50px' }}>
                  <p>
                    In other words, clients should select their desired{' '}
                    <span className="_f-underline _bold">outcome</span>, from
                    many validated design proposals made for them, then confirm
                    the architect
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        {/* ===== */}
      </div>
    </div>
  );
};

export default ShortPitchContentSecondSlide;
