import React from 'react';
import Data from '../data/infoloan.json';
import '../Styles/infocard.css';
//npm install --save sweetalert2 sweetalert2-react-content  --force
import Swal from "sweetalert2";

const Infocard = () => {

    const reqSentHandler = () => {
        //alert("Request Sent Successfully")
        Swal.fire({  
            title: 'Success',  
            type: 'success',  
            text: 'Your work has been saved.',  
          }); 
    }
    const InfocardCards = (cards) => {
        return (
            <div className="col-md-3 mt-5 p-5" style={{marginTop:50}}>
                <div className="card Infocard cardbg">
                    <div className="card-body" key={cards.id} >
                        <img src={cards.path} className="img" alt=''/>
                        <center><h1 className="card-title">{cards.type}</h1>
                            <p className="card-text">{cards.msg}</p>
                            <h4 className="card-title">{cards.time}</h4>
                            <br></br>
                            <button type="button" id='ibtn' onClick={reqSentHandler} className="btn btn-primary">Apply Now</button>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="container-fluid mutxt infocard">
                <center> <h1 className='infotxt' >Our Services</h1></center>
                <center>  <i> <p className='infotxt'>Get Loans with Attractive ROI and EMI</p></i><br></br></center>
                <div className='row mt-5 p-5'>
                    {Data.map(InfocardCards)}
                </div>
            </div>
        </>
    )
}
export default Infocard


