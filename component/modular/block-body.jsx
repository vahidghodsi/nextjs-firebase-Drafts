// import { useState } from 'react';

// import styles, { toolsVariant } from './block-style';

const BlockBody = ({ children, style }) => {
  //   console.log('[BlockBody:]', props);
  // const [hovered, setHovered] = useState(false);

  return (
    <div className="_block_body" style={style}>
      {children}
    </div>
  );
};

export default BlockBody;
