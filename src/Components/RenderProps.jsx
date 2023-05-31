import React, { Component, useState } from "react";

//React render props pattern
//A render props pattern emerges when you have 
//a component that dynamically renders element to the screen from its prop value.

//the WrapperComponent component who passes the render prop
class WrapperComponent extends Component {
    render() {
        return <BaseComponent render={name => (
            <h1>Hello, {name} </h1>
        )} />
    }
}

//the AnotherWrapper component who passes the render prop
class AnotherWrapper extends Component {
    render() {
        return <BaseComponent render={name => (
            <p style={{ marginTop: 30 }}>Howdy Mister {name}!</p>
        )} />
    }
}

//the base component who has calls the render prop
//the BaseComponent can share its logic across many components
class BaseComponent extends Component {
    state = {
        name: "Danny"
    }

    render() {
        return this.props.render(this.state.name);

    }
}

export default function RenderProps() {
    return (
        <div style={{ marginTop: 100 }}>
            <WrapperComponent />
            <AnotherWrapper />
            <CustomHookWrapperComponent />
            <CustomHookAnotherWrapper />
        </div>
    )
}

//custom hook for the above functionality
function useName(initialValue = "Peter") {
    const [name, setName] = useState(initialValue);
    return [name, setName];
}

function CustomHookWrapperComponent() {
    const [name, setName] = useName();

    return <h1>Good to see you today, {name}!</h1>
}

function CustomHookAnotherWrapper() {
    const [name, setName] = useName();

    return <p style={{ marginTop: 30 }}>Howdy Mister {name}!</p>
}
