import React, { Component } from 'react'

export default class Test extends React.Component {
	constructor(props)
	{
		super(props);
		this.state = { hello : "Trainees!" };
	}

	UNSAFE_componentWillMount()
	{
		console.log("componentWillMount()");
	}

	UNSAFE_componentDidMount()
	{
		console.log("componentDidMount()");
	}

	changeState()
	{
		this.setState({ hello : "Team!" });
	}

	render()
	{
		return (
			<div style={{ color: 'blue', marginTop: 100, padding: 2 }}>
			<h1>React Lifecycle , Hello { this.state.hello }</h1>
			<h2>
			<a onClick={this.changeState.bind(this)}>Click Here!</a>
			</h2>
			</div>);
	}

	UNSAFE_componentWillUpdate()
	{
		console.log("componentWillUpdate()");
	}

	UNSAFE_componentDidUpdate()
	{
		console.log("componentDidUpdate()");
	}
}

