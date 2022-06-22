import React from 'react';

class statedemo extends React.Component {
    constructor() {
        super();
        this.state = { displayBio: false };
        console.log('Component this', this);
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }
    toggleDisplayBio() {
        this.setState({ displayBio: !this.state.displayBio });
    }
    render() {
        return (
            <div>
                <h1 style={{ color: 'blue', lineHeight: 5, padding: 2 }}>Welcome to React State!!</h1>
                {
                    this.state.displayBio ? (
                        <div>
                            <button onClick={this.toggleDisplayBio}>-</button>
                            <br></br>
                            <br></br>
                            <pre>The state is an updatable structure that is used to contain data or information about the component.<br></br>
                                The state in a component can change over time.<br></br>
                                The change in state over time can happen as a response to user action or system event. <br></br>
                                A component with the state is known as stateful components. <br></br>
                                It is the heart of the react component which determines the behavior of the component and how it will render. <br></br>
                                They are also responsible for making a component dynamic and interactive.<br></br>
                                A state must be kept as simple as possible. <br></br>
                                It can be set by using the setState() method and calling setState() method triggers UI updates. <br></br>
                                A state represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly. <br></br>
                                To set an initial state before any interaction occurs, we need to use the getInitialState() method.<br></br>
                                For example, if we have five components that need data or information from the state, then we need to create one container component that will keep the state for all of them.</pre>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>+</button>
                        </div>
                    )
                }
            </div>
        )
    }
}
export default statedemo;