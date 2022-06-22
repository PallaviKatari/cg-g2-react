import React, {useState} from 'react'

const CondRen = () => {

    const [email, setemail] = useState("")

    const [error, seterror] = useState(false)

    //conditional rendering on the error message
    const handleSubmit =  (e) => {
        //The preventDefault() method cancels the event if it is cancelable, 
        //meaning that the default action that belongs to the event will not occur.
        //Not all events are cancelable. Use the cancelable property to find out if an event is cancelable.
        //The preventDefault() method does not prevent further propagation of an event through the DOM. 
        //Use the stopPropagation() method to handle this.
        e.preventDefault();
        if(email === ""){
            seterror(true)
            return;
        }
        else{
            seterror(false)
            alert("form submitted")   
            return; 
        }
        
    }

    // All the JSX will go inside this return
    return(
        <>
            <form onSubmit={handleSubmit} style={{ color: 'blue',backgroundColor:'black', marginTop: 100}}>
                <label>Email</label>
                <input type="text" onChange={(e) => setemail(e.target.value)} value={email} style={{borderRadius:10,width:500,borderBlockColor:'white',marginLeft:500,borderBlockStyle:'solid' }}/>
                {
                    error && <span style={{ color: 'red'}} >Valid email is required</span>
                }
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default CondRen