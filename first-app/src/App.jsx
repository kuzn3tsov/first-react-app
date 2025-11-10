import Greeting from './components/Greeting';
import CoinToss from './components/CoinToss';
import RockPaperScissors from './components/RockPaperScissors';

function App() {
  return (
    <div>
      <Greeting name='Lem' morningTimeFrom = {5} morningTimeTo = {12} dayTimeFrom = {12} dayTimeTo = {18} />
      <CoinToss headsMessage={"Glava"} tailsMessage={"Pismo"} headChance={0.8} />
      <RockPaperScissors rockMessage={"Izabrali ste Kamen!"} paperMessage={"Izabrali ste Papir!"} scissorsMessage={"Izabrali ste Škare!"} />
    </div>
  );
}

export default App;