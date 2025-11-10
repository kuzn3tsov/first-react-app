import React, { useState } from "react";

export default function CoinToss({ headsMessage = "It's Heads!", tailsMessage = "It's Tails!", headChance = 0.5 }) {
    const [result, setResult] = useState(null);
    const tossCoin = () => {
        const isHeads = Math.random() < headChance;
        setResult(isHeads ? 'heads' : 'tails');
    };

    return (
        <div className="coin-toss">
            <button onClick={tossCoin}>Toss Coin</button>
            {result && (
                <div className="result">
                    {result === 'heads' ? headsMessage : tailsMessage}
                </div>
            )}
        </div>
    );

}