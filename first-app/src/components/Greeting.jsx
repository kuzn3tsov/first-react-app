import React from 'react';

const Greeting = ({ name = 'Lem', morningTimeFrom = 5, morningTimeTo = 12, dayTimeFrom = 12, dayTimeTo = 18 }) => {
    const getGreeting = () => {
        const hour = new Date().getHours();

        if (hour >= morningTimeFrom && hour < morningTimeTo) {
            return 'Dobro jutro';
        } else if (hour >= dayTimeFrom && hour < dayTimeTo) {
            return 'Dobar dan';
        } else {
            return 'Dobra večer';
        }
    };

    const greeting = getGreeting();

    return (
        <div className="greeting">
            <h2>
                {greeting}
                {name && `, ${name}`}!
            </h2>
        </div>
    );
};

export default Greeting;