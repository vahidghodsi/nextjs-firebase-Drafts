import { useState } from 'react';
import { motion } from 'framer-motion';

// import styles from '../styles/HomeContent.module.css';

const Layout2ColFixLeft = () => {
  const [testVal, setTestVal] = useState(false);

  let tempStyle = {
    display: 'flex',
    justifyContent: testVal ? 'flex-start' : 'flex-end',
    width: '200px',
    height: '42px',
    border: '1px dashed grey',
  };

  return (
    <div>
      <div style={{}}>2 col fix left</div>
    </div>
  );
};

export default Layout2ColFixLeft;
