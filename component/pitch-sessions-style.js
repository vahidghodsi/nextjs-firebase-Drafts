import { css } from '@emotion/react';

const styles = css({
  width: '100%',
  // height: '90vh',
  // height: '100vh',
  // overflow: 'scroll',
  '.body': {
    width: '100%',
    display: 'flex',
    padding: '12px',
    overflow: 'scroll',
    '.blackbox': {
      height: '20px',
      width: '100%',
      background: 'var(--color-primary)',
    },
  },
});

export default styles;

export const sessionsVariant = {
  initial: { y: -5, opacity: 0 },
  animate: {
    y: 5,
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};
