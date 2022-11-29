import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/dist/client/link';
import Layout2RowFixTop from './layout-2row-fix-top';
import Layout2ColFixLeft from './layout-2col-fix-left';

import styles from '../../styles/HomeContent.module.css';

const HomeContent = () => {
  const [content, setContent] = useState(<Layout2RowFixTop />);
  // const [layoutState, setLayoutState] = useState(0); // 0 = initial,
  const [testVal, setTestVal] = useState(false);

  let menuItemStyle = {
    margin: '12px 12px',
    padding: '3px 6px',
    border: '1px solid grey',
    borderRadius: '5px',
  };

  return (
    <div className="_grid-2row-fix-top _gap-0 _h-100">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          borderBottom: 'var(--border-secondary)',
          backgroundColor: 'rgb(240,240,240)',
        }}
      >
        <div
          style={menuItemStyle}
          onClick={() => setContent(<Layout2RowFixTop />)}
        >
          2col-fix-top
        </div>
        <div
          style={menuItemStyle}
          onClick={() => setContent(<Layout2ColFixLeft />)}
        >
          2col-fix-top
        </div>
      </div>

      <div>{content}</div>
    </div>
  );
};

export default HomeContent;
