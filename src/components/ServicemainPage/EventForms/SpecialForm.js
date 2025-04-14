import "./SpecialForm.css";
// import { useState } from "react";
import React from 'react'

const SpecialForm = () => {
//   const [formData, setFormData] = useState({
//     companyName: "",
//     firstName:'',
//     lastName:'',
//     area: "",
//     contact: "",
//     event:'',
//     package: "",
//     email: "",
    
    
//   });

//   const onChangeHandler = (event) => {
//     console.log(event);

//     setFormData(() => ({
//       ...formData,
//       [event.target.name]: event.target.value,
//     }));
//   }
    return (
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="companyName" >COMPANY NAME</label>
            <input type="text" id="companyName" placeholder="Enter Name" />
          </div>
    
          <div className="form-group">
            <label htmlFor="businessRepFullName">BUSINESS REP. FULL NAME</label>
            <div className="name-inputs">
            <input type="text" id="firstName" placeholder="First Name" />
              <input type="text" id="lastName" placeholder="Last Name" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phoneno" >PHONE NUMBER</label>
            <div className="name-inputs">
              <input type="text" id="area" placeholder="Area" />
              <input type="number" id="contact" placeholder="Contact Number" />
            </div>
          </div>
    
          <div className="form-group">
            <label htmlFor="businessmail" >BUSINESS EMAIL</label>
            <input type="email" id="email" placeholder="Enter Email" />
          </div>
          <div className="form-group">
            <label htmlFor="evetName" >WHAT TYPE OD EVENT IS THIS?</label>
            <input type="text" id="event" placeholder="Enter Event" />
          </div>
    
            <label>WHICH PACKAGE WOULD YOU LIKE TO CHOOSE?</label>
            <div className="package1">
              <input className='radio' type="radio" name="package" value="silver" />
              <label htmlFor="silver">Dance Party - Starting at $1195.00</label>
              </div>
              <div className="package1">
              <input className='radio' type="radio" name="package" value="silver" />
              <label htmlFor="silver">Extreme Excitement - Starting at $1595.00</label>
              </div>
              <div className="package1">
              <input className='radio' type="radio" name="package" value="silver" />
              <label htmlFor="silver">A Night To Remember - Starting at $1895.00</label>
            </div>
            
        </div>
      );
}

export default SpecialForm
