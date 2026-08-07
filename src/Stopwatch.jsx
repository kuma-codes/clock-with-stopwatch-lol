import { useState, useEffect, useRef } from 'react'

function Stopwatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === "Space") {
                console.log("event added");
                event.preventDefault(); // Prevent page scrolling

                if (isRunning) {
                    stop();
                } else {
                    start();
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            },10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
            window.removeEventListener("keydown", handleKeyDown);
            console.log("event removed");
        }
    },[isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
        
    }

    function stop(){
        setIsRunning(false);

    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(){

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor(elapsedTime % 1000 / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return  `${minutes}:${seconds}:${milliseconds}`;

    }


    
    return(
        <div className='w-full max-w-4xl rounded-[30px] bg-slate-900/75 p-4 sm:p-6 text-center shadow-xl shadow-black/40'>
            <div className="text-white text-[3.25rem] sm:text-[4.25rem] md:text-[5.5rem] leading-tight drop-shadow-[3px_3px_5px_rgba(0,0,0,0.75)]">
                {formatTime()}
            </div>
            <div className="controls mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
                <button className='w-full sm:w-auto px-5 py-3 text-base sm:text-lg font-bold rounded-2xl bg-[#2b3647] hover:bg-[#1f2937] text-white transition-colors duration-200' onClick={start}>
                    Start
                </button>
                <button className='w-full sm:w-auto px-5 py-3 text-base sm:text-lg font-bold rounded-2xl bg-[#2b3647] hover:bg-[#1f2937] text-white transition-colors duration-200' onClick={stop}>
                    Stop
                </button>
                <button className='w-full sm:w-auto px-5 py-3 text-base sm:text-lg font-bold rounded-2xl bg-[#2b3647] hover:bg-[#1f2937] text-white transition-colors duration-200' onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Stopwatch