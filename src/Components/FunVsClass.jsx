import React, { Component,useState } from "react";

//Stateless Components
//React 16+ -> Stateless -> Stateful -> Hooks -> useState,useEffect,useContext
const FunctionalComponent = () => {
    const [count, setCount] = useState(0);//count=0

    const increase = () => {
        setCount(count + 1);
        console.log(count);
    }

    return (
        <div style={{ margin: '50px' }}>
            <h1>Welcome to Functional Component.................... </h1>
            <h3>Counter App using Functional Component : </h3>
            <h2>{count}</h2>
            <button onClick={increase}>Add</button>
        </div>
    )
}
const FunctionalComponent1 = () => {
    const [count, setCount] = useState(0);

    const dec = () => {
        setCount(count - 1);
        console.log(count);
    }

    return (
        <div style={{ margin: '50px' }}>
            <h1>Welcome to Functional Component1 </h1>
            <h3>Counter App using Functional Component1 : </h3>
            <h2>{count}</h2>
            <button onClick={dec}>Dec</button>
            <Sample />
        </div>
    )
}

//Stateful component
class ClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.increase = this.increase.bind(this);
    }

    increase() {
        this.setState({ count: this.state.count + 1 });
        console.log(this.state.count);
    }

    render() {
        return (
            <div style={{ margin: '50px' }}>
                <h1>Welcome to Class Component......................... </h1>
                <h3>Counter App using Class Component  </h3>
                <h2> {this.state.count}</h2>
                <button onClick={this.increase}> Add</button>
                <FunctionalComponent />
                <FunctionalComponent1 />
                <Sample />
            </div>
        )
    }
}

export default ClassComponent;

function Sample() {
    return (
        <h1 style={{ marginTop: 100 }}>Hello.. Welcome to Sample</h1>
    )
}
