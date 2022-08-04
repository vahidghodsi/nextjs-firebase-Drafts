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
