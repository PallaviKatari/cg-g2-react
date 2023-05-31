import React from 'react'  
  
function Button({count,handleClick}) {  
  
    console.log("Button Component rendered")  
    return (  
        <div>  
            <p>Counter : {count}</p>  
            <button onClick={handleClick}>Increment Counter</button>  
        </div>  
    )  
}  
  
//export default Button  

//useCallback
export default React.memo(Button)  