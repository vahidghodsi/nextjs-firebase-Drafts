import { css } from '@emotion/react';

const styles = css({
  position: 'absolute',
  border: 'var(--border-dev)',
  '.element-holder': {
    position: 'absolute',
    '.container': {
      // border: '1px dashed var(--color-info)',
      '> div': {
        // border: '1px dashed var(--color-secondary)',
      },
    },
  },
  '&:not(.align-right):not(.align-bottom):not(.align-right.align-bottom)': {
    '.element-holder': {
      top: '-8px',
      left: '-8px',
      // '.container': {},
    },
    // '> div': { background: 'red' },
  },
  // =====
  '&.align-right:not(.align-bottom)': {
    '.element-holder': {
      top: '-8px',
      right: '8px',
      '.container': {
        // border: '1px dashed var(--color-error)',
      },
      // '.pos-indicator': {},
      '.body': {
        gridRow: '1 / span 1',
        justifyItems: 'right',
        aliginItems: 'right',
      },
    },
  },
  // =====
  '&.align-bottom:not(.align-right)': {
    '.element-holder': {
      left: '-8px',
      bottom: '-8px',
      '.container': {
        // border: '1px dashed var(--color-error)',
        alignItems: 'end',
      },
      // '.pos-indicator': {},
      // '.body': {},
    },
  },
  // =====
  '&.align-right.align-bottom': {
    '.element-holder': {
      right: '8px',
      bottom: '-8px',
      '.container': {
        // margin: '-8px',
        alignItems: 'end',
      },
      // '.pos-indicator': {},
      '.body': {
        gridRow: '1 / span 1',
        justifyItems: 'right',
        aliginItems: 'right',
      },
    },
  },
});

export default styles;
