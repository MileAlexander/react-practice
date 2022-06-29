import React, { useState } from 'react';

function Timer2() {

    function incrementTimer(){
        setTime(
            time+1
        );
    };

    const [time, setTime] = useState(0);

    return(
        <>
            <div>
                {time}
            </div>
            <button onClick={incrementTimer}>Click me!</button>
        </>
    );
};

export default Timer2;