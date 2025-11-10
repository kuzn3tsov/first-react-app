import Greeting from './components/Greeting';
import CoinToss from './components/CoinToss';
import RockPaperScissors from './components/RockPaperScissors';
import { Counter } from './components/Counter';

function App() {
  return (
    <div>
      <Counter counterStart={5} counterStepUp={2} counterStepDown={5}/>
      <Greeting name='Lem' morningTimeFrom={5} morningTimeTo={12} dayTimeFrom={12} dayTimeTo={18} />
      <CoinToss headsMessage={"Glava"} tailsMessage={"Pismo"} headChance={0.8} />
      <RockPaperScissors rockMessage={"Izabrali ste Kamen!"} paperMessage={"Izabrali ste Papir!"} scissorsMessage={"Izabrali ste Škare!"} />
    </div>
  );
}

export default App;