import { css } from '@emotion/react';

const styles = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '12px 8px',
  background: 'var(--background)',
  border: 'var(--border-secondary)',
  borderRadius: '5px',
  boxShadow: 'var(--shadow-secondary)',
  zIndex: '100',
  '> li': {
    position: 'relative',
    height: '20px',
    width: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '.icon': {
      border: 'var(--border-secondary)',
      borderRadius: '5px',
      textAlign: 'center',
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
      width: '200px',
      // height: '40px',
      marginLeft: '-20px',
      paddingLeft: '52px',
      border: 'var(--border-secondary)',
      borderRadius: '5px',
      background: 'var(--background)',
      boxShadow: 'var(--shadow-primary)',
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
});

export default styles;

// position: 'absolute',
//   height: '100%',
//   width: '100%',
//   zIndex: '100',
//   '> div': {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
//   '._toolset': {
//     padding: '12px 8px',
//     border: 'var(--border-secondary)',
//     borderRadius: '5px',
//     background: 'rgba(255, 255, 255, 1)',
//     boxShadow: 'var(--shadow-secondary)',
//     '> li': {
//       position: 'relative',
//       width: '20px',
//     },
//   },
//   '.feedback': {},
//   '.control': {
//     textAlign: 'center',
//     fontSize: '16px',
//     '.slide-number': {
//       // textAlign: "center",
//       // fontSize: "16px",
//       fontWeight: 'bold',
//     },
//     '.total-slides-number': {
//       textAlign: 'center',
//       fontSize: '16px',
//       fontWeight: 'normal',
//       // color: "var(--color-secondary)"
//     },
//   },
