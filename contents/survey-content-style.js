import { css } from '@emotion/react';

const styles = css({
  height: '100%',
  width: '100%',
  // border: 'var(--border-dev)',
  '.survey-head': {
    // '> div': {
    //   margin: '12px 0',
    // },
  },

  '.survey-options': {
    border: 'var(--border-secondary)',
    borderWidth: '1px 0',
    padding: '20px 0',
    '.option': {
      border: 'var(--border-secondary)',
      borderRadius: '5px',
      padding: '20px',
      '.head': {
        span: {
          marginRight: '12px',
        },
      },
      '.body': {
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        // gridTemplateRows: 'auto auto',
        gap: '12px',
        // margin: '12px 0',
        '.desc': {
          // fontSize: '.875rem',
          // fontWeight: 'bold',
          '> p': {
            margin: '12px 0',
          },
        },
        '.graphic': {
          '> div': {
            height: '150px',
            width: '150px',
            border: '10px solid var(--color-primary)',
            borderRadius: '50%',
          },
        },
      },
      ':hover:not([data-selected=true])': {
        padding: '19px',
        border: 'var(--border-primary)',
        // background: 'var(--color-light)',
        boxShadow: 'var(--shadow-secondary)',
      },
      '&[data-selected=true]': {
        padding: '19px',
        border: 'var(--border-primary)',
        boxShadow: 'var(--shadow-primary)',
        transform: 'scale(1.02)',
      },
    },
  },

  '@media screen and (max-width: 600px)': {
    '.survey-options': {
      '.option': {
        // padding: '20px',
        '.head': {
          fontSize: '1rem',
          span: {
            fontSize: '1.5rem',
            marginRight: '12px',
          },
        },
        '.desc': {
          // margin: '12px 0',
          fontSize: '.75rem',
          // fontWeight: 'bold',
        },
        ':hover:not([data-selected=true])': {
          padding: '20px',
          border: 'var(--border-secondary)',
        },
        '&[data-selected=true]': {},
      },
    },
  },

  '@media screen and (max-width: 750px)': {
    '.survey-options': {
      gridTemplateColumns: 'auto',
      gridTemplateRows: 'auto auto',
      gap: '12px',
    },
  },

  '@media screen and (max-width: 600px), (min-width: 750px) and (max-width: 1000px)':
    {
      '.survey-options': {
        '.body': {
          gridTemplateColumns: '1fr !important',
          gridTemplateRows: ' minmax(0, 1fr) auto',

          // background: 'red',
          '.graphic': {
            justifySelf: 'center',
          },
        },
      },
    },
});

export default styles;
