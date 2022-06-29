import React from 'react';

class Timer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        };
        setInterval(()=>{
            this.incrementTimer()
        }, 1000);
    };

    incrementTimer(){
        this.setState({
            time: this.state.time+1
        });
    };

    render(){
        return(
            <>
                <div>
                    {this.state.time}
                </div>
                <button onClick={()=>{this.incrementTimer()}}>Click me!</button>
            </>
        );
    };
};

export default Timer;