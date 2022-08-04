import { css } from '@emotion/react';

const styles = css({
  position: 'relative',
  // height: '20px',
  // width: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
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
    height: 'calc(100% + 24px)',
    // width: '100px',
    width: 'auto',
    // width: '200px',
    // height: '40px',
    marginLeft: '-12px',
    paddingLeft: '48px',
    border: 'var(--border-secondary)',
    borderRadius: '5px',
    background: 'var(--background)',
    boxShadow: 'var(--shadow-primary)',

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
});

export default styles;
