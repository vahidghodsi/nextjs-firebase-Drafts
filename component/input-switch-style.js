import { css } from '@emotion/react';

const styles = css({
  margin: '12px',
  // '.box': {
  '.switch-box': {
    position: 'relative',
    height: '20px',
    width: '32px',
    input: {
      display: 'none',
    },
    '._label': {
      display: 'flex',
      height: '100%',
      width: '100%',
      border: 'var(--border-secondary)',
      borderRadius: '5px',
      padding: '3px',
      '> .handle': {
        height: '100%',
        width: '12px',
        borderRadius: '2px',
        background: 'var(--color-secondary)',
      },
    },

    'input:checked + label': {
      padding: '2px',
      border: 'var(--border-primary)',
      boxShadow: 'var(--shadow-primary)',
    },

    // 'input:checked + label > div': {
    //   background: 'var(--color-primary)',
    //   color: 'white',
    // },
  },

  // },

  // ===== STANDARD SIZES ==========
  '&._xs': {
    '.switch-box': {
      height: '14px',
      width: '20px',
      '._label': {
        // borderRadius: '5px',
        // padding: '3px',
        '> .handle': {
          width: '6px',
          // borderRadius: '2px',
        },
      },
      'input:checked + label': {
        // padding: '2px',
      },
    },
  },
  // ===== sm
  '&._sm ': {
    '.switch-box': {
      height: '16px',
      width: '24px',
      '._label': {
        // borderRadius: '5px',
        // padding: '3px',
        '> .handle': {
          width: '8px',
          // borderRadius: '2px',
        },
      },
      'input:checked + label': {
        // padding: '2px',
      },
    },
  },
  // ===== lg
  '&._lg ': {
    '.switch-box': {
      height: '24px',
      width: '40px',
      '._label': {
        // borderRadius: '5px',
        // padding: '3px',
        '> .handle': {
          width: '16px',
          // borderRadius: '2px',
        },
      },
      'input:checked + label': {
        // padding: '2px',
      },
    },
  },
  // ===== xl
  '&._xl': {
    '.switch-box': {
      height: '30px',
      width: '50px',
      '._label': {
        // borderRadius: '5px',
        padding: '4px',
        '> .handle': {
          width: '22px',
          // borderRadius: '2px',
        },
      },
      'input:checked + label': {
        padding: '3px',
      },
    },
  },
});

export default styles;

export const switchTumbMotionVariant = {
  initial: {},
  animate: {},
};
