import "./SchoolForm.css";
// import { useState } from "react";

const SchoolForm = () => {
//   const [formData, setFormData] = useState({
//     schoolName: "",
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
            <label htmlFor="companyName" >SCHOOL NAME</label>
            <input type="text" id="schoolName" placeholder="Enter Name" />
          </div>
    
          <div className="form-group">
            <label htmlFor="businessRepFullName">SCHOOL REP. FULL NAME</label>
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
            <input type="text" id="email" placeholder="Enter Email" />
          </div>
          <div className="form-group">
            <label htmlFor="evetName" >WHAT TYPE OD EVENT IS THIS?</label>
            <input type="text" id="event" placeholder="Enter Event" />
          </div>
    
            <label>WHICH PACKAGE WOULD YOU LIKE TO CHOOSE?</label>
            <div className=" package">
              <input className='radio' type="radio" name="package" value="silver" />
              <label htmlFor="silver">Silver - Starting at $1195.00</label>
              </div>
              <div className=" package">
              <input className='radio' type="radio" name="package" value="gold" />
              <label htmlFor="gold">Gold - Starting at $1695.00</label>
              </div>
              <div className=" package">
              <input className='radio' type="radio" name="package" value="platinum" />
              <label htmlFor="platinum">Platinum - Starting at $2195.00</label>
            </div>
            
        </div>
      );
}

export default SchoolForm
