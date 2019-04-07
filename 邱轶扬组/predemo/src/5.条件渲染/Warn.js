import React, {Component} from 'react';

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning"  style={{
            backgroundColor: 'red', textAlign: 'center', width: '100%',
            padding: '10px', fontSize: '14pt', color: 'white',
        }} >
            Warning!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true}
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button style={{height: '40px', width: '200px',}} onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

export default Page;