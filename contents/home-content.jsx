import InputRatesScale from '../component/input-rate-scale';
import InputCheckbox from '../component/input-checkbox';
import InputSwitch from '../component/input-switch';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ElementContainer from '../component/element-container';

import styles from '../styles/HomeContent.module.css';
import Toolset from '../component/toolset';
import Link from 'next/dist/client/link';
import CommentDraft from '../component/comment-draft';

const HomeContent = () => {
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
      <div style={{ margin: '32px 0', position: 'relative' }}>
        <ElementContainer>
          <div className="_grid-2col-fix-left _align-center">
            <div className="_circle"></div>
            <div
              style={{
                height: '15px',
                width: '80px',
                background: 'var(--color-secondary)',
                borderRadius: '3px',
              }}
            ></div>
          </div>

          <div
            style={{
              height: '15px',
              width: '320px',
              background: 'var(--color-secondary)',
              borderRadius: '3px',
            }}
          ></div>
          <div
            style={{
              height: '15px',
              width: '90px',
              background: 'var(--color-secondary)',
              borderRadius: '3px',
            }}
          ></div>
        </ElementContainer>
      </div>

      <div>
        <InputRatesScale name="rateScale1" />
        {/* <InputRatesScale
          min={0}
          max={10}
          minLabel={'unlikely'}
          maxLabel={'likely'}
        />
        <InputRatesScale min={0} max={10} reverse />
        <InputRatesScale min={-2} max={8} />
        <InputRatesScale min={7} max={2} />
        <InputRatesScale min={7} max={2} reverse /> */}
      </div>

      <div>
        <InputCheckbox name="ckeckbox1" label={'do you see this checkbox?'} />
      </div>

      <div>
        {/* <InputSwitch xs name="switchbox1" label={'is that working?'} /> */}
        {/* <InputSwitch sm name="switchbox2" label={'is that working?'} /> */}
        <InputSwitch name="switchbox3" label={'is that working?'} />
        {/* <InputSwitch lg name="switchbox4" label={'is that working?'} /> */}
        {/* <InputSwitch xl name="switchbox5" label={'is that working?'} /> */}
      </div>

      <div style={{ display: 'flex' }}>
        <Toolset />
      </div>

      {/* <div style={tempStyle} onClick={() => setTestVal(!testVal)}>
        <motion.div
          layout
          style={{ width: '40px', height: '40px', background: 'green' }}
        />
      </div> */}

      <div
        className="_relative"
        style={{
          margin: '20px',
          height: '350px',
          overflow: 'visible',
          border: '1px solid var(--color-secondary)',
        }}
      >
        <CommentDraft style={{ left: '20px', top: '20px' }} />
        <CommentDraft alignRight style={{ right: '100px', top: '100px' }} />
        <CommentDraft alignBottom style={{ left: '80px', bottom: '100px' }} />
        <CommentDraft
          alignBottom
          alignRight
          style={{ right: '20px', bottom: '20px' }}
        />
      </div>

      <div
        style={{
          margin: '30px 0',
          height: '0px',
          width: '800px',
          borderTop: 'var(--border-primary)',
        }}
      ></div>

      <div style={{ display: 'flex' }}>
        <Link href="./behavior">{' >> To User Behavior Graph '}</Link>
      </div>
      <div style={{ display: 'flex' }}>
        <Link href="./short-pitch">{' >> To Short Pitch '}</Link>
      </div>
      <div style={{ display: 'flex' }}>
        <Link href="./survey">{' >> To Survey '}</Link>
      </div>
      <div style={{ display: 'flex' }}>
        <Link href="./ui/blocks">{' >> To Blocks '}</Link>
      </div>
    </div>
  );
};

export default HomeContent;
