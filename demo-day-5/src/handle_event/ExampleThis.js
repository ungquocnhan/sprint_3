import React from "react";

class ExampleThis extends React.Component {
    // shoot(a) {
    //     alert(a);
    // };
    //
    // render() {
    //     return (
    //         <button onClick={this.shoot.bind(this, "Goal")}>Take the shoot!</button>
    //     )
    // }

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // Phép "ràng buộc" (bind) này là cần thiết để `this` hoạt động trong callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                <h1>{this.state.isToggleOn ? 'ON' : 'OFF'}</h1>
            </button>
        );
    }
}

export default ExampleThis;
