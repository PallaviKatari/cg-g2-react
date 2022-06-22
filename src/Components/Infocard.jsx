import React from 'react'
import Data from '../data/infoloan.json'
import '../Styles/infocard.css'

const Infocard = () => {

    const reqSentHandler = () => {
        alert("Request Sent Successfully")
    }
    const InfocardCards = (cards) => {
        return (
            <div className="col-md-3">
                <div className="card Infocard cardbg">
                    <div className="card-body" key={cards.id} >
                        <img src={cards.path} className="img" />
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
                <div className='row'>
                    {Data.map(InfocardCards)}
                </div>
            </div>
        </>
    )
}
export default Infocard


