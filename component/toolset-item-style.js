import { css } from '@emotion/react';

const styles = css({
  position: 'relative',
  // height: '20px',
  // width: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  overflow: 'visible',
  '.icon': {
    border: 'var(--border-secondary)',
    borderRadius: '5px',
    textAlign: 'center',
    height: '20px',
    width: '20px',
    // height: '100%',
    // width: '100%',
    // zIndex: '100',
  },
  '&:hover .icon': {
    border: 'var(--border-primary)',
    // background: 'var(--color-primary)',
    borderRadius: '5px',
    // height: '100%',
    // width: '100px',
    zIndex: '150',
  },

  '.alt-text': {
    position: 'absolute',
    opacity: '0',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    minHeight: 'calc(100% + 24px)',
    // marginLeft: '-12px',
    padding: '6px',
    paddingLeft: '42px',
    paddingRight: '12px',
    border: 'var(--border-secondary)',
    borderRadius: '8px',
    background: 'var(--background)',
    boxShadow: 'var(--shadow-primary)',

    // maxWidth: '500px',
    ' > span': {
      whiteSpace: 'nowrap',
      // maxWidth: '500px',
    },
    // '.icon:hover + .alt-text': {

    //   opacity: '1',

    // },

    // '> div:hover::after': {
    //   content: "''",
    //   border: '2px solid var(--color-info)',
    //   borderRadius: '5px',

    //   // height: '100%',
    //   width: '100px',
    // },
  },
  '&._rtl': {
    '.alt-text': {
      right: 0,
      paddingLeft: '12px',
      paddingRight: '42px',
    },
  },
});

export default styles;
