import { css } from '@emotion/react';

const styles = css({
  width: '100%',
  '.body': {
    overflow: 'scroll',
    padding: '6px',
    '.timeline-row': {
      display: 'flex',
      '.behavior-action': {
        // height: '50px',
        // width: '30px',
        // minWidth: '4px',
        // maxWidth: '200px',
        padding: '10px 0',
        // marginLeft: '1px',
        ' > div': {
          position: 'relative',
          height: '30px',
          '&:hover': {
            // filter: 'contrast(200%)',
          },
          '.action-sign': {
            position: 'absolute',
            left: '-8px',
            width: '16px',
            // bottom: '0',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '16px',
          },

          '.action-text': {
            display: 'inline',
            position: 'relative',
            textAlign: 'center',
            // fontWeight: 'bold',
            fontSize: '12px',
            fontWeight: 'bold',
            padding: '4px',
            // background: 'var(--background)',
            // height: '100%',
            background: 'var(--color-light)',
            // zIndex: '40',
          },
          '.time-span-line': {
            position: 'absolute',
            width: '100%',
            height: '4px',
            bottom: '15px',
            borderTop: '1px dashed var(--color-middle)',
          },
        },
        '&:hover': {
          // margin: '0 -5px',
        },
      },
      '&.scalebar': {
        height: '15px',
        fontWeight: 'bold',
        fontSize: '10px',
        borderBottom: '1px solid var(--color-secondary)',
        '> div': {
          height: '100%',
          paddingLeft: '6px',
          borderLeft: '1px solid var(--color-primary)',
        },
      },
    },

    '.behavior-action > div[data-cat=engagement]': {
      // background: 'var(--color-info)',
      // opacity: '.3',

      background: 'var(--color-light)',
      display: 'flex',
      '> div': {
        height: '100%',
        '&.selected': {
          // background: 'red',
          '.action-sign': {
            color: 'var(--color-info)',
            left: '-8px',
            top: '-4px',
            fontSize: '24px',
          },
        },
      },
    },
    '.behavior-action > div[data-cat=slide-backward]': {
      // background: 'var(--color-warning)',
      background: 'var(--color-light)',
      display: 'flex',
      justifyContent: 'center',
    },
    '.behavior-action > div[data-cat=slide-forward]': {
      // background: 'var(--color-success)',
      background: 'var(--color-light)',
      display: 'flex',
      justifyContent: 'center',
    },
    '.behavior-action > div[data-cat=presentation]': {
      height: '10px',
      borderTop: 'var(--border-secondary)',
    },
    '.behavior-action > div[data-cat=time]': {
      paddingLeft: '6px',
      fontSize: '12px',
      fontWeight: 'bold',
      opacity: '0',
    },
    '.behavior-action > div[data-cat=time-diff]': {
      fontSize: '10px',
      textAlign: 'center',
    },
    '.behavior-action > div[data-cat=info]': {
      // background: 'cyan',
      fontSize: '10px',
      // textAlign: 'center',
      ' > div:first-of-type': {
        height: '16px',
      },
    },

    '.behavior-action:hover': {
      // width: '100px !important',
      // background: 'var(--color-light)',
      // border: 'var(--border-primary)',
      boxShadow: 'var(--shadow-primary)',
      borderRadius: '5px',
      zIndex: '50',
      ' > div[data-cat=time]': {
        // position: 'relative',
        // top: '-20px',
        opacity: '1',

        // background: 'yellow',
      },
    },

    '.behavior-action.selected': {
      // width: '100px !important',
      // background: 'var(--color-light)',
      // border: 'var(--border-primary)',
      // boxShadow: 'var(--shadow-primary)',
      border: 'var(--border-primary)',
      borderRadius: '5px',
      zIndex: '100',
      ' > div[data-cat=time]': {
        // position: 'relative',
        // top: '-20px',
        opacity: '1',

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
    '.behavior-action': {
      // background: 'green',
      ' div[data-cat=engagement-item]': {
        position: 'relative',

        borderLeft: '1px dashed var(--color-secondary)',
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
