import React from "react";

class ExampleMounting extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: "green" };
    }

    UNSAFE_componentWillMount() {
        console.log("UNSAFE_componentWillMount da chay");
    }


    componentDidMount() {
        console.log("componentDidMount da chay");
    }

    render() {
        console.log("Ham render da duoc chay");
        return (
                <div>
                        <button onClick={() => this.setState({ color: "blue" })}>Submit</button>
                        <p>{this.state.color}</p>
                </div>
        );
    }
}

export default ExampleMounting;
