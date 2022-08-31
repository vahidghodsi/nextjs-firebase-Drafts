/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

import styles from './comment-draft-style';

const CommentDraft = (props) => {
  //   console.log('[ToolsetItem:]', props);
  const altText = useRef(null);
  // const [hovered, setHovered] = useState(false);

  let mainCls = [
    [true, '_comment-draft'],
    [props.className, props.className],
    [props.disabled, 'disabled'],
    // [props.secondary, 'secondary'],
    [props.alignRight, 'align-right'],
    [props.alignBottom, 'align-bottom'],
    [props.xs, '_xs'],
    [props.sm, '_sm'],
    [props.lg, '_lg'],
    [props.xl, '_xl'],
  ]
    .map((classCondition) => (classCondition[0] ? classCondition[1] : null))
    .filter((cls) => cls);

  useEffect(() => {}, []);

  return (
    <motion.div
      className={mainCls.join(' ')}
      css={[styles, { ...props.style }]}
    >
      <div className="element-holder">
        <div className="container _grid-2col-fix-left">
          <div className="pos-indicator">
            <div
              style={{
                height: '16px',
                width: '16px',
                border: 'var(--border-primary)',
                borderRadius: '50%',
              }}
            ></div>
          </div>

          <div className="body _grid-3row ">
            <div
              style={{
                height: '15px',
                width: '60px',
                background: 'var(--color-secondary)',
                borderRadius: '3px',
              }}
            ></div>
            <div
              style={{
                height: '25px',
                width: '300px',
                background: 'var(--color-secondary)',
                borderRadius: '3px',
              }}
            ></div>
            <div
              style={{
                height: '15px',
                width: '50px',
                background: 'var(--color-secondary)',
                borderRadius: '3px',
              }}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
    // <motion.li
    //   className={mainCls.join(' ')}
    //   css={[styles, { ...props.style }]}
    //   whileHover={
    //     props.children
    //       ? {
    //           scale: 1.1,
    //           zIndex: 100,
    //           transition: { delay: 0.6, type: 'easeInOut' },
    //         }
    //       : {}
    //   }
    //   onHoverStart={(e) => setHovered(true)}
    //   onHoverEnd={(e) => setHovered(false)}
    // >
    //   <div className="icon">{props.icon || 'X'}</div>
    //   <AnimatePresence>
    //     {props.children && hovered && (
    //       <motion.div
    //         className="alt-text"
    //         ref={altText}
    //         initial={{ opacity: 0 }}
    //         animate={{
    //           x: !rtl ? -12 : 12,
    //           opacity: 1,
    //           transition: { duration: 0.3, delay: 1, x: { delay: 0.9 } },
    //         }}
    //         exit={{ opacity: 0, transition: { delay: -0.5 } }}
    //       >
    //         <span>{props.children}</span>
    //       </motion.div>
    //     )}
    //   </AnimatePresence>
    // </motion.li>
  );
};

export default CommentDraft;
