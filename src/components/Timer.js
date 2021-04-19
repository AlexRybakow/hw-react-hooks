import React, { useState } from 'react'

const Timer = () => {
    const [time, setTime] = useState({
        minutes: 1,
        seconds: 0,
    });

    const [timer, setTimer] = useState(null);

    const startTimer = () => {
        let timeInterval = setInterval(() => {
            setTime((time) => {
                const updatedTime = { ...time };
                if (time.seconds > 0) {
                    updatedTime.seconds--;
                }

                if (time.seconds === 0) {
                    if (time.minutes === 0) {
                        clearInterval(timeInterval);
                    } else if (time.minutes > 0) {
                        updatedTime.minutes--;
                        updatedTime.seconds = 59;
                    } 
                }

                return updatedTime;
            });
        }, 1000);
        setTimer(timeInterval);
    };

    const stopTimer = () => {
        clearInterval(timer);
    };


    return (
        <div>
            <h1 className='timer'>
            {time.minutes < 10 ? `0${time.minutes}` : time.minutes}:
                {time.seconds < 10 ? `0${time.seconds}` : time.seconds}
            </h1>
            <button onClick={startTimer}>START</button>
            <button onClick={stopTimer}>STOP</button>
        </div>
    );
};

export default Timer;


