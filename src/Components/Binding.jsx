import React,{useState,Component} from "react";

// ONE-WAY BINDING 

export default function Parent() {
    const [text, setText] = useState("Hello Team");
    return (
      <div style={{ color: 'blue', marginTop: 100, padding: 2 }}>
        <h1>{text}</h1>
        <Child changeText={(text) => setText(text)} />
        <br>
        </br>
        <Databinding />
      </div>
    );
  }
  
  function Child(props) {
    return (
      <div>
        <button onClick={() => props.changeText("Welcome to one-way binding concept")} >
          Change the text
        </button>
      </div>
    );
  }
  
  // ONE-WAY BINDING 
  class Databinding extends Component {
  
    constructor() {
      super();
      this.state = {
        course: ""
      };
    }
  
    handleChange = event => {
      this.setState({
        course: event.target.value
      })
    }
  
    render() {
      return (
        <div>
          <h4 style={{ color: "#68cf48" }}>ONE-WAY BINDING</h4>
          Enter Course: <input placeholder="Enter Course"
            onChange={this.handleChange} style={{borderRadius:10,width:500,borderBlockColor:'black',marginLeft:500,borderBlockStyle:'solid' }}></input>
          <br></br>
          <br></br>
          <p><b>Course: {this.state.course}</b></p>
          <h4><b>Course: {this.state.course}</b></h4>
          <p>The connection between the data to be displayed in the view and the component's logic is called data binding in ReactJS.
            <br></br>ReactJS uses one-way data binding. In one-way data binding one of the following conditions can be followed:
            <br></br>
            Component to View: Any change in component data would get reflected in the view.
            <br></br>
            View to Component: Any change in View would get reflected in the component’s data.</p>
        </div>
      )
    }
  }
  