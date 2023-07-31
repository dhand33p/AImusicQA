import { useEffect, useRef, useState } from "react";

function Home() {
    // create state to track time string
    const [time, setTime] = useState((new Date()).toLocaleTimeString());
    // store interval in a reference to clear it on unmount
    const intervalRef = useRef();
		
    // on component mount
    useEffect(() => {
        // create a recurring interval to update the time
        intervalRef.current = setInterval(() => {
            setTime((new Date()).toLocaleTimeString());
        }, 1000);
				
        // when the component is unmounted, clear the interval
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <h1 className="text-center text-xl font-bold text-slate-600 mt-20">
            Hello World, it is {time}
        </h1>
    );
}

export default Home;