import { css } from '@emotion/react';

const styles = css({
  width: '100%',
  '.body': {
    display: 'flex',
    '.behavior-action': {
      // height: '50px',
      width: '30px',
      ' > div': {
        height: '30px',
        '&:hover': {
          filter: 'contrast(200%)',
        },
      },
    },
    '.behavior-action > div[data-cat=engagement]': {},
    '.behavior-action > div[data-cat=slide-backward]': {
      background: 'tomato',
    },
    '.behavior-action > div[data-cat=slide-forward]': {
      background: 'lightgreen',
    },
    '.behavior-action > div[data-cat=presentation]': {
      background: 'yellow',
    },
    '.behavior-action > div[data-cat=time]': {
      fontSize: '10px',
      // background: 'yellow',
    },
    '.behavior-action > div[data-cat=info]': {
      // background: 'cyan',
    },
  },
});

export default styles;
