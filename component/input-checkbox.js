import { css } from '@emotion/react';

const styles = css({
  // '.box': {
  '.switch-box': {
    position: 'relative',
    height: '20px',
    width: '20px',
    input: {
      display: 'none',
    },
    '._label': {
      position: 'absolute',
      height: '100%',
      width: '100%',
      border: 'var(--border-secondary)',
      borderRadius: '5px',
      padding: '2px',
      '> .box': {
        // position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        borderRadius: '2px',
        ' > div ': {
          borderRadius: '2px',
          background: 'var(--color-primary)',
          // opacity: 0,
          '&:first-of-type': {
            width: '3px',
            height: '7px',
            transform: 'rotate(-45deg) translateX(-3px)',
          },
          '&:last-of-type': {
            width: '3px',
            height: '12px',
            transform: 'rotate(45deg)',
          },
        },
      },
      '&:hover': {
        border: 'var(--border-primary)',
      },
    },

    'input:checked + label': {
      border: 'var(--border-primary)',

      '> .box': {
        // background: 'var(--color-primary)',
        color: 'white',
        ' > div ': {
          // background: 'var(--color-primary)',
          // opacity: 1,
        },
      },
    },
  },

  // ===== STANDARD SIZES ==========
  '&._xs': {},
  // ===== sm
  '&._sm ': {},
  // ===== lg
  '&._lg ': {},
  // ===== xl
  '&._xl': {},
});

export default styles;
