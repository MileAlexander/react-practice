import React from 'react';

class Timer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        };
        console.log("Component called!");
    };
    
    componentDidMount(){
        console.log("Component created!");

        setInterval(()=>{
            this.incrementTimer()
        }, 1000);
    };
    componentDidUpdate(){
        console.log("Something changed!");
    };
    componentWillUnmount(){
        console.log("Component peaced out!");
    };

    incrementTimer(){
        this.setState({
            time: this.state.time+1
        });
    };

    render(){
        return(
            <>
                <div className={(this.state.time >= 5) ? "blue" : ""}>
                    {this.state.time}
                </div>
                <button onClick={()=>{this.incrementTimer()}}>Click me!</button>
            </>
        );
    };
};

export default Timer;