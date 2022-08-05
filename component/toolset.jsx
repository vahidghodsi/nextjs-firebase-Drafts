/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

import styles from './toolset-style';
import ToolsetItem from './toolsetItem';

const Toolset = (props) => {
  //   console.log('[Toolset:]', props);
  const [hovered, setHovered] = useState(false);

  let mainCls = [
    [true, '_toolset'],
    [true, '_grid-row'],
    [true, '_gap-12'],
    [props.className, props.className],
    [props.disabled, 'disabled'],
    // [props.secondary, 'secondary'],
    [props.xs, '_xs'],
    [props.sm, '_sm'],
    [props.lg, '_lg'],
    [props.xl, '_xl'],
  ]
    .map((classCondition) => (classCondition[0] ? classCondition[1] : null))
    .filter((cls) => cls);

  return (
    <div className={mainCls.join(' ')} css={[styles, { ...props.style }]}>
      {/* <div className="_toolset feedback _grid-row _gap-12"> */}

      <ToolsetItem icon={'C'}>
        {'add a comment on the slide ( press C )'}
      </ToolsetItem>
      <ToolsetItem icon={'X'}>{'like the slide ( press L )'}</ToolsetItem>
      <ToolsetItem icon={'Y'}>{'dis-like the slide ( press K )'}</ToolsetItem>
      <ToolsetItem icon={'Z'} rtl>
        {'another tool, whatever it is ( press nothing )'}
      </ToolsetItem>
      <ToolsetItem icon={'N'} rtl>
        nice!, just random bullshit. another tool, whatever it is ( press
        nothing ). another tool, whatever it is ( press nothing ).another tool,
        whatever it is ( press nothing )
      </ToolsetItem>
      <ToolsetItem icon={'N'} rtl>
        <div>
          <div>
            nice!, just random bullshit. another tool, whatever it is ( press
            nothing ).
          </div>
          <div>
            another tool, whatever it is ( press nothing ).another tool,
            whatever it is ( press nothing )
          </div>
          <div>
            another tool, whatever it is ( press nothing ).another tool,
            whatever it is ( press nothing )
          </div>
          <div>
            another tool, whatever it is ( press nothing ).another tool,
            whatever it is ( press nothing )
          </div>
          <div>
            another tool, whatever it is ( press nothing ).another tool,
            whatever it is ( press nothing )
          </div>
        </div>
      </ToolsetItem>
      <ToolsetItem icon={'Z'}></ToolsetItem>
      {/* </div> */}
    </div>
  );
};

export default Toolset;
