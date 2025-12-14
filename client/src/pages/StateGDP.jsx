import StateGDPChart from '../components/StateWise';
import { stateGDPData } from '../data/StateData';

const StateGDP = () => {
  return (
    <div>
      <StateGDPChart data={stateGDPData} />
    </div>
  );
};

export default StateGDP;
