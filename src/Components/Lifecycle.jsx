import React from 'react'

class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};

		this.increment = () => this.setState({ count: this.state.count + 1 });
		this.decrement = () => this.setState({ count: this.state.count - 1 });
	}

	//Mounting a Component
	componentDidMount() {
		console.log('Component has mounted.');
	}

	//Updating a Component
	componentDidUpdate() {
		console.log('Component updated. Count is now ' + this.state.count + '.');
	}

	//Rendering a Component
	render() {
		console.log('Rendering...');
		return (
			<React.Fragment>
				<h1 style={{ marginTop: 100, marginBottom: 30 }}>Count: {this.state.count}</h1>
				<button onClick={this.increment} style={{ padding: 5, marginRight: 5 }}>+</button>
				<button onClick={this.decrement} style={{ padding: 5 }}>-</button>
			</React.Fragment>
		);
	}
}

//Catching Errors in Components
class CounterThatThrowsError extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			count: 0
		}

		this.increment = () => this.setState({ count: this.state.count + 1 })
		this.decrement = () => this.setState({ count: this.state.count - 1 })
	}

	componentWillUnmount() {
		console.log("Counter has been unmounted!")
		// Output: Counter has been unmounted!
	}

	render() {
		if (this.state.count === 3) throw new Error("Crashed!")

		return (
			<React.Fragment>
				<h1 style={{ marginTop: 100, marginBottom: 30 }}>Count: {this.state.count}</h1>
				<button onClick={this.increment} style={{ padding: 5, marginRight: 5 }}>+</button>
				<button onClick={this.decrement} style={{ padding: 5 }}>-</button>
			</React.Fragment>
		)
	}
};

export default class LifeCycle extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			hasError: false,
			error: null
		}
	}

	componentDidMount() {
		console.log('Component has mounted.');
	}

	//static getDerivedStateFromError(error) for returning an updated state to allow a render of fallback UI.
	static getDerivedStateFromError(error) {
		return {
			hasError: true,
			error: error
		}
	}

	//componentDidCatch(error, errorInfo) for logging error information to the console, 
	//including a component stack tracing back to the source of the error.
	componentDidCatch(error) {
		console.log(error.name + ": " + error.message);
		this.componentDidMount();
		// Output: Error: Crashed!
	}

	render() {
		if (this.state.hasError) {
			return (
				<div style={{ marginTop: 100 }}>
					<h1>Oh no! Something's gone wrong!</h1>
				</div>
			)
		}

		return (
			<div>
				<CounterThatThrowsError />
			</div>
		)
	}
}

