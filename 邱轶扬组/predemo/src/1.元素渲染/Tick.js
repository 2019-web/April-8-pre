import React, {Component} from 'react';

class Tick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
        };

        setInterval(function(){
            this.setState({
                time: new Date()
            })
        }.bind(this), 1000);
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.time.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Tick;
