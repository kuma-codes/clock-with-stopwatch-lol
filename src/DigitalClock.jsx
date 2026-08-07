import { useState, useEffect } from 'react'

function DigitalClock(){

    const [time,setTime] = useState(new Date());

    useEffect(() =>{
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // to free up resources when return
        return () =>{
            clearInterval(intervalId);
        }
    }, []);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }

    function padZero(number){
        return (number < 10 ? "0": "") + number;
    }

    return(
        <div className="w-screen max-w-[50%] py-[10px] ">
            <div className="text-white text-[6rem] font-bold font-mono text-center drop-shadow-[3px_3px_5px_rgba(0,0,0,0.75)]">
                <span>
                    {formatTime()}
                </span>
            </div>
        </div>
    );
}

export default DigitalClock;