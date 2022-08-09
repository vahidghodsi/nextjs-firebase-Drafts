import { css } from '@emotion/react';

const styles = css({
  width: '100%',
  '.body': {
    display: 'flex',
    '.behavior-action': {
      // height: '50px',
      // width: '30px',
      minWidth: '15px',
      maxWidth: '100px',
      // marginLeft: '1px',
      ' > div': {
        height: '30px',
        '&:hover': {
          filter: 'contrast(200%)',
        },
        '.action-sign': {
          position: 'relative',
          left: '-8px',
          width: '16px',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '16px',
        },
      },
    },

    '.behavior-action > div[data-cat=engagement]': {
      // background: 'var(--color-info)',
      // opacity: '.3',
      background: 'rgba(200,200,200, .2)',
    },
    '.behavior-action > div[data-cat=slide-backward]': {
      // background: 'var(--color-warning)',
      // opacity: '.3',
      background: 'rgba(200,200,200, .2)',
    },
    '.behavior-action > div[data-cat=slide-forward]': {
      // background: 'var(--color-success)',
      // opacity: '.3',
      background: 'rgba(200,200,200, .2)',
    },
    '.behavior-action > div[data-cat=presentation]': {
      height: '10px',
      borderTop: 'var(--border-secondary)',
    },
    '.behavior-action > div[data-cat=time]': {
      fontSize: '10px',
    },
    '.behavior-action > div[data-cat=time-diff]': {
      fontSize: '10px',
      textAlign: 'center',
    },
    '.behavior-action > div[data-cat=info]': {
      // background: 'cyan',
    },

    '.behavior-action:hover': {
      // width: '100px !important',
      background: 'var(--color-light)',
      zindex: '50',
      ' > div[data-cat=time]': {
        position: 'relative',
        top: '-20px',
        // background: 'yellow',
      },
    },

    // =====  ==========
    // ===== FORWARD
    '.behavior-action[data-action-code = "20"]': {
      // background: 'green',
      '> div[data-cat=engagement], > div[data-cat=slide-backward], > div[data-cat=slide-forward]':
        {
          borderLeft: '1px solid var(--color-primary)',
        },
    },

    // ===== BACKWARD
    '.behavior-action[data-action-code = "30"]': {
      // background: 'green',
      '> div[data-cat=engagement], > div[data-cat=slide-backward]': {
        borderLeft: '1px solid var(--color-primary)',
      },
    },

    // ===== ENGAGEMENT
    '.behavior-action[data-action-code = "50"]': {
      // background: 'green',
      '> div[data-cat=engagement]': {
        borderLeft: '1px solid var(--color-primary)',
      },
    },
  },
});

export default styles;

// '> div[data-cat=engagement]': {

// },
// '> div[data-cat=slide-backward]': {

// },
// '> div[data-cat=slide-forward]': {

// },
// '> div[data-cat=presentation]': {

// },
// '> div[data-cat=time]': {

// },
// '> div[data-cat=time-diff]': {

// },
// '> div[data-cat=info]': {

// },
