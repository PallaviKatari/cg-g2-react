import React,  {Component} from "react";

export default class ComponentDidMountMethod extends Component {
    constructor(props){
      super(props)
      this.state = {
        data: []
      }
    }
  //   I have first initialized data as a blank array after that 
  //   I have used the Javascript fetch method to load data from 
  //   the API inside our componentDidMount method and then changed 
  //   our data state using the React setState method from blank array 
  //   to the data we are receiving from the API. Then we have used the 
  //   javascript map function to iterate our data and 
  //   print all users’ names from the API.
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users').then(
          (response) => response.json()
      ).then(data => this.setState({data: data}))
  
    }
  
    render() {
      return (
        <div style={{ color: 'green', marginTop: 100, padding: 2 }}>
         <p>List of API users data</p><hr></hr>
      {this.state.data.map(d=> <h6 key={d.id}>{d.name}<br></br>{d.email}<br></br>{d.address.city}<hr></hr></h6>)}
        </div>
      )
    }
  }
  