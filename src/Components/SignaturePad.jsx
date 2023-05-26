//npm install @syncfusion/ej2-react-inputs –save
import React from 'react'
import {Signature, SignatureComponent } from '@syncfusion/ej2-react-inputs';
import { getComponent, closest } from '@syncfusion/ej2-base';
function SignDemo() {
   function  clearBtnCreated() {
    document.getElementById('signclear').addEventListener('click', clearButtonClick);
  }
  function saveButtonCreated() {
    document.getElementById('signsave').addEventListener('click', saveBtnClick);
  }
  function  saveBtnClick() {
    let signature = getComponent(document.getElementById('signature'), 'signature');
    signature.save();
  }
  function clearButtonClick() {
    let signature = getComponent(document.getElementById('signature'), 'signature');
    signature.clear();
  }
  return (
    <div class="container">
      <div class="row" className="hdr">
        <div class="col-sm-12 btn btn-info">
        How to create a Signature pad in ReactJS Application
        </div>
      </div>
      <div class="row">
      <div className="col-lg-2"></div>
      <div className="col-lg-8 control-section">
        <div id="signature-control">
          <div className='e-sign-heading'>
            <span id="signdescription">Sign Here</span>
          </div>
          <SignatureComponent id="signature" ></SignatureComponent>
          <button style={{margin:"10px"}} class="btn btn-success" id="signsave" onClick={saveButtonCreated} >Save</button>
          <button class="btn btn-success" id="signclear" onClick={clearBtnCreated} >Clear</button>
        </div>
      </div>
      <div className="col-lg-2"></div>
    </div>
    </div>
  )
}
export default SignDemo