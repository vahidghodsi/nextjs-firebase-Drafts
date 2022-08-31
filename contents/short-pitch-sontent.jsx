import InputRatesScale from '../component/input-rate-scale';
import InputCheckbox from '../component/input-checkbox';
import InputSwitch from '../component/input-switch';
import { useState } from 'react';
import { motion } from 'framer-motion';

import ShortPitchContentFirstSlide from './short-pitch-content-first-slide';
import ShortPitchContentSecondSlide from './short-pitch-content-second-slide';

import styles from '../styles/HomeContent.module.css';
import Toolset from '../component/toolset';
import Link from 'next/dist/client/link';

const ShortPitchContent = () => {
  const [stage, setStage] = useState(0);

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
    <div className="_main-content">
      <div
        className="_grid-3col-fix-middle"
        style={{
          height: '100%',
          width: '100%',
          //   justifyContent: 'center',
          //   alignItems: 'center',
          //   overflow: 'visible',
        }}
      >
        <div
          style={{
            height: '100%',
            // width: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={() => setStage(0)}
        >
          {stage > 1 && (
            <div
              style={{
                height: '32px',
                width: '32px',
                padding: '0 6px',
                fontSize: '32px',
                border: 'var(--border-secondary)',
                //   overflow: 'visible',
              }}
            >
              {'<'}
            </div>
          )}
        </div>
        {stage < 2 && (
          <ShortPitchContentFirstSlide
            stage={stage}
            setStage={(stage) => setStage(stage)}
          />
        )}
        {stage > 1 && (
          <ShortPitchContentSecondSlide
            stage={stage}
            setStage={(stage) => setStage(stage)}
          />
        )}
        {/* ===== */}
        <div
          style={{
            height: '100%',
            // width: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {stage === 1 && (
            <div
              style={{
                height: '32px',
                width: '32px',
                padding: '0 6px',
                fontSize: '32px',
                border: 'var(--border-secondary)',
                //   overflow: 'visible',
              }}
              onClick={() => setStage(2)}
            >
              {'>'}
              <span
                style={{
                  fontSize: '20px',
                }}
              >
                Next{' '}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShortPitchContent;
