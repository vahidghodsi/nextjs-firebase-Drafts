/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

import styles from './toolset-item-style';

const ToolsetItem = (props) => {
  //   console.log('[ToolsetItem:]', props);
  const altText = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [rtl, setRtl] = useState(props.rtl || false);
  const [active, setActive] = useState(false);

  let mainCls = [
    [true, '_toolset-item'],
    [props.className, props.className],
    [props.disabled, 'disabled'],
    // [props.secondary, 'secondary'],
    [rtl, '_rtl'],
    [props.xs, '_xs'],
    [props.sm, '_sm'],
    [props.lg, '_lg'],
    [props.xl, '_xl'],
  ]
    .map((classCondition) => (classCondition[0] ? classCondition[1] : null))
    .filter((cls) => cls);

  useEffect(() => {
    if (hovered && altText.current) {
      console.log(hovered);
      console.log(active);
      // console.log(altText.current);
      let altTextBound = altText.current.getBoundingClientRect();
      console.log(altTextBound);
      if (rtl) {
        if (altTextBound.left < 20) setRtl(false);
      } else {
        console.log(window.innerWidth);
        if (altTextBound.right > window.innerWidth - 20) setRtl(true);
      }
      // if (
      //   altTextBound.left < 20 ||
      //   altTextBound.right > window.innerWidth - 20
      // ) {
      //   setRtl(false);
      //   if (
      //     altTextBound.left + altTextBound.width >
      //     window.innerWidth - altTextBound.width + altTextBound.left
      //   ) {
      //     setRtl(false);
      //   }
      // }
      // console.log(
      //   altTextBound.left + altTextBound.width,
      //   '======',
      //   window.innerWidth - altTextBound.width + altTextBound.left
      // );
    }

    if (hovered) {
      setActive(true);
      setTimeout(() => {
        setActive(false);
      }, 4000);
    } else {
      setActive(false);
    }
  }, [altText, hovered]);

  return (
    <motion.li
      className={mainCls.join(' ')}
      css={[styles, { ...props.style }]}
      whileHover={
        props.children
          ? {
              scale: 1.1,
              zIndex: 100,
              transition: { delay: 0.6, type: 'easeInOut' },
            }
          : {}
      }
      onHoverStart={(e) => setHovered(true)}
      onHoverEnd={(e) => setHovered(false)}
    >
      <div className="icon">{props.icon || 'X'}</div>
      <AnimatePresence>
        {/* {props.children && hovered && ( */}
        {props.children && active && (
          <motion.div
            className="alt-text"
            ref={altText}
            initial={{ opacity: 0 }}
            animate={{
              x: !rtl ? -12 : 12,
              opacity: 1,
              transition: { duration: 0.3, delay: 1, x: { delay: 0.9 } },
            }}
            exit={{ opacity: 0, transition: { delay: -0.5 } }}
          >
            <span>{props.children}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

export default ToolsetItem;
