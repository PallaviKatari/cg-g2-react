import React from 'react'  
  
function Textbox({name,handleClick}) {  
    console.log("Textbox Rendered")  
    return (  
        <div>  
            <input type="text" placeholder="Enter Name" value={name} onChange={handleClick}/>  
        </div>  
    )  
}  
  
//export default Textbox 

//useCallback()
export default React.memo(Textbox) 