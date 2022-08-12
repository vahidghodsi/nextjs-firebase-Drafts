import { css } from '@emotion/react';

const styles = css({
  width: '100%',
  height: '90vh',
  // height: '100vh',
  overflow: 'scroll',
  '.body': {
    '.session': {
      border: 'var(--border-secondary)',
      fontSize: '10px',
      '&:hover': {
        border: 'var(--border-primary)',
        marginTop: '-2px',
      },
      '&.active': {
        border: 'var(--border-primary)',
        fontWight: 'bold',
      },
    },
  },
});

export default styles;
