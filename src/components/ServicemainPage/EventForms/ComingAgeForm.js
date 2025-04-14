// note : party event and coming of age celebration have the same mini form

import "./ComingAgeForm.css";
import { useState } from "react";
import React from "react";

const ComingAgeForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName:'',
    email: "",
    area: "",
    contact: "",
    package: "",
    other:'',
    event: [""],
  });

  const onChangeHandler = (event) => {
    console.log(event);
    if (event.target.name === "event") {
      let copy = { ...formData };

      if (event.target.checked) {
        copy.event.push(event.target.value);
      } else {
        copy.event = copy.event.filter(
          (el) => el !== event.target.value
        );
      }

      setFormData(copy);
    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div className="partyform-container">
      <form onSubmit={onSubmitHandler}>
      <div className="form-group">
        <label htmlFor="FullName">FULL NAME</label>
        <div className="name-inputs">
        <input type="text" id="firstName" placeholder="First Name" />
          <input type="text" id="lastName" placeholder="Last Name" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="phoneno">PHONE NUMBER</label>
        <div className="name-inputs">
          <input
            type="text"
            id="area"
            placeholder="Area"
            // onChange={onChangeHandler}
            // value={formData.firstname}
          />
          <input
            type="number"
            id="contact"
            placeholder="Contact Number"
            // onChange={onChangeHandler}
            // value={formData.contact}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="businessmail">BUSINESS EMAIL</label>
        <input
          type="text"
          id="email"
          placeholder="Enter Email"
          // onChange={onChangeHandler}
          // value={formData.email}
        />
      </div>

      <div className="form-group">
        <label htmlFor="event" className="form-label">
          WHICH TYPE OF EVENT IS THIS?
        </label>
        <div className="checkbox-event">
          <div className="checkbox1">
          <div>
            <input
              type="checkbox"
              name="event"
              value="birthday"
              id="birthday"
              onChange={onChangeHandler}
              checked={formData.event.includes("birthday")}
            />
            <label htmlFor="birthday">Birthday Party</label>
          </div>
          <div>
          <input
              type="checkbox"
              name="event"
              value="graduation"
              id="graduation"
              onChange={onChangeHandler}
              checked={formData.event.includes("graduation")}
            />
            <label htmlFor="graduation">Graduation Party</label>
          </div>
          <div>
          <input
              type="checkbox"
              name="event"
              value="retirement"
              id="retirement"
              onChange={onChangeHandler}
              checked={formData.event.includes("retirement")}
            />
            <label htmlFor="retirement">Retirement Party</label>
          </div>
          <div>
          <input
              type="checkbox"
              name="event"
              value="party"
              id="party"
              onChange={onChangeHandler}
              checked={formData.event.includes("party")}
            />
            <label htmlFor="party">Party</label>
          </div>
          </div>
          <div className="checkbox1">
          <div>
            <input
              type="checkbox"
              name="event"
              value="bar"
              id="bar"
              onChange={onChangeHandler}
              checked={formData.event.includes("bar")}
            />
            <label htmlFor="bar">Bar Mitvah</label>
          </div>
          <div>
          <input
              type="checkbox"
              name="event"
              value="bat"
              id="bat"
              onChange={onChangeHandler}
              checked={formData.event.includes("bat")}
            />
            <label htmlFor="bat">Bar Mitvah</label>
          </div>
          <div>
          <input
              type="checkbox"
              name="event"
              value="quiencenera"
              id="quiencenera"
              onChange={onChangeHandler}
              checked={formData.event.includes("quiencenera")}
            />
            <label htmlFor="quiencenera">Quiencenera</label>
          </div>
          <div >
          <input
              type="checkbox"
              name="event"
              value="sweet"
              id="sweet"
              onChange={onChangeHandler}
              checked={formData.event.includes("sweet")}
            />
            <label htmlFor="sweet">Sweet Sixteen</label>
          </div>
          </div>
          
          
        </div>
        
      </div>
      <div className="form-group">
        <label htmlFor="evetName">OTHER</label>
        <input type="text" id="other" placeholder="Enter" />
      </div>

      <label>WHICH PACKAGE WOULD YOU LIKE TO CHOOSE?</label>
      <div className="package2">
        <input
          className="radio"
          type="radio"
          name="package"
          value="silver"
          onChange={onChangeHandler}
          checked={formData.package === "silver"}
        />
        <label htmlFor="silver">Dance Party - Starting at $895.00</label>
      </div>
      <div className="package2">
        <input
          className="radio"
          type="radio"
          name="package"
          value="gold"
          onChange={onChangeHandler}
          checked={formData.package === "gold"}
        />
        <label htmlFor="silver">Extreme Excitement - Starting at $1295.00</label>
      </div>
      <div className="package2">
        <input
          className="radio"
          type="radio"
          name="package"
          value="platinum"
          onChange={onChangeHandler}
          checked={formData.package === "platinum"}
        />
        <label htmlFor="silver">A Night To Remember - Starting at $1695.00</label>
      </div>
      </form>
    </div>
  );
};

export default ComingAgeForm;
