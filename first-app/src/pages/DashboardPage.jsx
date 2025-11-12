import { Counter } from '../components/Counter';
import CoinToss from '../components/CoinToss';
import RockPaperScissors from '../components/RockPaperScissors';

function DashboardPage() {
    return (
        <div>
            <Counter />
            <CoinToss />
            <RockPaperScissors />
        </div>
    );
}

export default DashboardPage;