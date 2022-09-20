import { css } from '@emotion/react';

const styles = css({
  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'center',
  display: 'inline-block',
  position: 'relative',
  padding: '20px',
  background: 'var(--background)',
  border: 'var(--border-secondary)',
  borderRadius: '6px',
  boxShadow: 'var(--shadow-secondary)',
  zIndex: '100',
  '.head': {},
  '.context': {
    position: 'absolute',
    top: '-12px',
    right: '12px',
    '._circle-o-lg': {
      background: 'var(--background)',
    },
  },
});

export default styles;

export const toolsVariant = {
  initial: {
    opacity: 0,
    x: 0,
    y: 5,
  },
  animate: {
    x: 0,
    y: 5,
    opacity: 0,
    transition: { duration: 0.15, delay: 0.1, type: 'spring' },
  },
  animate2: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.1, delay: 0, type: 'spring' },
    boxShadow: 'var(--shadow-secondary)',
  },
};
