import InputRatesScale from '../component/input-rate-scale';
import InputCheckbox from '../component/input-ckeckbox';
import InputSwitch from '../component/input-switch';
import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles/HomeContent.module.css';

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
        <InputSwitch xs name="switchbox1" label={'is that working?'} />
        <InputSwitch sm name="switchbox2" label={'is that working?'} />
        <InputSwitch name="switchbox3" label={'is that working?'} />
        <InputSwitch lg name="switchbox4" label={'is that working?'} />
        <InputSwitch xl name="switchbox5" label={'is that working?'} />
      </div>
      {/* <div style={tempStyle} onClick={() => setTestVal(!testVal)}>
        <motion.div
          layout
          style={{ width: '40px', height: '40px', background: 'green' }}
        />
      </div> */}
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default HomeContent;
