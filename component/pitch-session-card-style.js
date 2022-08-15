import { css } from '@emotion/react';

const styles = css({
  padding: '6px',
  border: 'var(--border-secondary)',
  borderRadius: '5px',
  fontSize: '10px',
  overFlow: 'hidden',
  '&:hover': {
    border: 'var(--border-primary)',
  },
  '&:not(.active):hover': {
    marginTop: '-2px',
    marginLeft: '-2px',
  },
  '&.active': {
    border: 'var(--border-primary)',
    fontWight: 'bold',
    background: 'var(--color-light)',
  },
  '.session-date': {
    fontWeight: 'bold',
    fontSize: '9px',
  },
  '.session-user': {
    fontSize: '12px',
    fontWeight: 'bold',
  },
  '.session-info': {},
  '.session-more-info': {
    borderTop: 'var(--border-secondary)',
  },
  //=====
  '&.no-content': {
    borderColor: 'var(--color-error)',
    opacity: 0.5,
  },
  '&.valid-data': {
    borderColor: 'var(--color-success)',
  },
});

export default styles;

export const sessionCardVariant = {
  initial: { y: -5, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: { opacity: 0 },
};

export const sessionCardInfoVariant = {
  initial: { opacity: 0, height: 0 },
  animate: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3 },
  },
  exit: { opacity: 0, height: 0, transition: { opacity: { duration: 0.1 } } },
};
