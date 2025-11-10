import React from 'react';
export default function RockPaperScissors({ rockMessage = "Kamen!", scissorsMessage = "Škare!", paperMessage = "Papir!" }) {
    const choices = ['rock', 'paper', 'scissors'];
    const [result, setResult] = React.useState(null);
    const playGame = () => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        setResult(randomChoice);
    };

    return (
        <div className="rock-paper-scissors">
            <button onClick={playGame}>Igraj Kamen, Škare, Papir</button>
            {result && (
                <div className="result">
                    {result === 'rock' && rockMessage}
                    {result === 'paper' && paperMessage}
                    {result === 'scissors' && scissorsMessage}
                </div>
            )}
        </div>
    );
}