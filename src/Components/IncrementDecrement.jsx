import React from 'react'

class IncDec extends React.Component {
    state = { count: 0 }

   handleIncrement = () =>{

       this.setState(prevState => ({
           count: prevState.count + 1
       }))
   }

   handleDecrement = () =>{
       if (this.state.count > 0){
           this.setState(prevState => ({
               count: prevState.count - 1
           }));
       }
   }
  
   render() { 
   return(
           <div className="Counter">
               <h4 style={{lineHeight: 7, padding: 2 }}>Counter:  {this.state.count}</h4>
               <button onClick={this.handleDecrement} style={{ color: 'blue'}}>-</button>
               <button onClick={this.handleIncrement} style={{ color: 'blue'}}>+</button>
           </div>
       )
   }
}
export default IncDec
