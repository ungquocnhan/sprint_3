import React from "react";

class Content extends React.Component {
    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps!");
        return null;
    }
    componentDidMount() {
        console.log("Component DID MOUNT!");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate!');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate!");
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Component DID UPDATE!");
    }
    componentWillUnmount() {
        console.log("Component WILL UNMOUNT!");
    }
    render() {
        console.log('render')
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}



class ExampleLifeCycleV17 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 0
        };
        this.setNewNumber = this.setNewNumber.bind(this);
    }
    setNewNumber() {
        this.setState({ data: this.state.data + 1 });
    }
    render() {
        return (
            <div>
                <button onClick={this.setNewNumber}>INCREMENT</button>
                <Content myNumber={this.state.data}></Content>
            </div>
        );
    }
}

export default ExampleLifeCycleV17;
