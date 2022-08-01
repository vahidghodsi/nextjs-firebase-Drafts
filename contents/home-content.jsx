import InputRatesScale from '../component/input-rate-scale';
import styles from '../styles/HomeContent.module.css';

const HomeContent = () => {
  return (
    <div>
      <div>
        <InputRatesScale />
        <InputRatesScale
          min={0}
          max={10}
          minLabel={'unlikely'}
          maxLabel={'likely'}
        />
        <InputRatesScale min={0} max={10} reverse />
        <InputRatesScale min={-2} max={8} />
        <InputRatesScale min={7} max={2} />
        <InputRatesScale min={7} max={2} reverse />
      </div>
    </div>
  );
};

export default HomeContent;
