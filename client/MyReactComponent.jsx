import React, { Component } from "react";

export default class MyReactComponent extends Component {
    constructor(props) {
        super(props);
        console.log("I am called")
    }

    UNSAFE_componentWillReceiveProps() {
        console.log("I am called through component will receiveprops")
    }

    render() {
        return <fieldset>
            <legend>This is React component</legend>
            Counter Value : {this.props.counter.get()} <br />
            <button onClick={() => {
                this.props.counter.set(this.props.counter.get() + 1)
            }}>React button</button>
        </fieldset>
    }
}