import "./WeddingForm.css";
import { useState } from "react";

import React from "react";

const WeddingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    area: "",
    contact: "",
    package1: "",
    package2: "",
    package3: "",
    package4: "",
    other: "",
    style: "",
  });

  const onChangeHandler = (event) => {
    console.log(event);
    if (event.target.name === "event") {
      let copy = { ...formData };

      if (event.target.checked) {
        copy.event.push(event.target.value);
      } else {
        copy.event = copy.event.filter((el) => el !== event.target.value);
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
    <div className="form-container">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="FullName">FULL NAME OF BRIDE AND GROOM</label>
          <div className="name-inputs">
            <input type="text" id="firstName" placeholder="First Name" />
            <input type="text" id="lastName" placeholder="Last Name" />
          </div>

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
              placeholder="area"
              // onChange={onChangeHandler}
              // value={formData.firstname}
            />
            <input
              type="number"
              id="contact"
              placeholder="contact number"
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
          <label htmlFor="FullName">WEDDING RECEPTION LOCATION</label>
          <div className="form-group">
            <input type="text" id="other" placeholder="Street Address" />
          </div>
          <div className="name-inputs">
            <input type="text" id="firstName" placeholder="City" />
            <input type="text" id="lastName" placeholder="State" />
          </div>

          <div className="name-inputs">
            <input type="text" id="firstName" placeholder="ZIP" />
            <input type="text" id="lastName" placeholder="Countory" />
          </div>
        </div>

        <label>WHICH PACKAGE WOULD YOU LIKE TO CHOOSE?</label>
        <div className="package-option">
          <input
            className="radio"
            type="radio"
            name="package1"
            value="silver"
            onChange={onChangeHandler}
            checked={formData.package1 === "silver"}
          />
          <label htmlFor="silver">Emerald - Starting at $1095.00</label>
        </div>
        <div className="package-option">
          <input
            className="radio"
            type="radio"
            name="package1"
            value="gold"
            onChange={onChangeHandler}
            checked={formData.package1 === "gold"}
          />
          <label htmlFor="gold">Sapphire - Starting at $1595.00</label>
        </div>
        <div className="package-option">
          <input
            className="radio"
            type="radio"
            name="package1"
            value="platinum"
            onChange={onChangeHandler}
            checked={formData.package1 === "platinum"}
          />
          <label htmlFor="platinum">Diamond - Starting at $2295.00</label>
        </div>

        <label>STYLE OF WEDDING</label>
        <div className="style-option">
          <input
            className="radio"
            type="radio"
            name="package2"
            value="traditional"
            onChange={onChangeHandler}
            checked={formData.package2 === "traditional"}
          />
          <label htmlFor="traditional">Traditional</label>
        </div>
        <div className="style-option">
          <input
            className="radio"
            type="radio"
            name="package2"
            value="nontraditional"
            onChange={onChangeHandler}
            checked={formData.package2 === "nontraditional"}
          />
          <label htmlFor="nontraditional">Non-Traditional</label>
        </div>

        <label>
          DO YOU NEED US TO TO ATTEND THE REHERSAL ?  ( THERE IS ADDITIONAL COST FOR
          REHERSAL )
        </label>
        <div className="style-option">
          <input
            className="radio"
            type="radio"
            name="package3"
            value="rehersal"
            onChange={onChangeHandler}
            checked={formData.package3 === "rehersal"}
          />
          <label htmlFor="traditional">Yes</label>
        </div>
        <div className="style-option">
          <input
            className="radio"
            type="radio"
            name="package3"
            value="rehersal"
            onChange={onChangeHandler}
            checked={formData.package3 === "rehersal"}
          />
          <label htmlFor="nontraditional">No</label>
        </div>

        <label>SIZE OF BRIDAL PARTY</label>
        <div className="style-option">
          <input
            className="radio"
            type="radio"
            name="package4"
            value="size"
            onChange={onChangeHandler}
            checked={formData.package4 === "size"}
          />
          <label htmlFor="traditional">1-3</label>
        </div>
        <div className="style-option">
          <input
            className="radio"
            type="radio"
            name="package4"
            value="size"
            onChange={onChangeHandler}
            checked={formData.package4 === "size"}
          />
          <label htmlFor="nontraditional">4-7</label>
        </div>
        <div className="style-option">
          <input
            className="radio"
            type="radio"
            name="package4"
            value="size"
            onChange={onChangeHandler}
            checked={formData.package4 === "size"}
          />
          <label htmlFor="nontraditional">8-12</label>
        </div>

        <div className="form-group">
          <label htmlFor="evetName">OTHER</label>
          <input type="text" id="other" placeholder="Enter" />
        </div>
      </form>
    </div>
  );
};

export default WeddingForm;
