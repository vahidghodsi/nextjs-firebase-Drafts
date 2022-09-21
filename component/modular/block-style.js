import { css } from '@emotion/react';

const styles = css({
  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'center',
  // display: 'inline-block',
  // display: 'inline-grid',
  position: 'relative',
  padding: '20px',
  // overflow: 'hidden',
  // margin: '20px',
  background: 'var(--background)',
  border: 'var(--border-secondary)',
  borderRadius: '6px',
  // boxShadow: 'var(--shadow-secondary)',
  '._block_context': {
    position: 'absolute',
    // flexDirection: 'row-reverse',
    top: '-10px',
    right: '12px',
    '._block_context_tool': {
      fontWeight: 'bold',
      color: 'var(--color-secondary)',
      boxShadow: 'var(--shadow-secondary)',
      '&._circle-o, &._circle-o-lg': {
        background: 'var(--background)',
      },
      '&:hover': {
        color: 'var(--color-primary)',
        // border: 'var(--border-primary)',
        background: 'var(--color-light)',
        // boxShadow: 'var(--shadow-primary)',
      },
    },
  },
  '._body_container': {
    overflow: 'hidden',
  },
  '.head': {},
});

export default styles;

export const toolsVariant = {
  initial: {
    opacity: 0,
    x: 0,
    y: 4,
    // boxShadow: 'var(--shadow-none)',
  },
  animate: {
    x: 0,
    y: 4,
    opacity: 0,
    transition: { duration: 0.15, delay: 0.05, type: 'spring' },
    // boxShadow: 'var(--shadow-none)',
  },
  animate2: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.08, delay: 0, type: 'spring' },
    // boxShadow: 'var(--shadow-secondary)',
  },
};
