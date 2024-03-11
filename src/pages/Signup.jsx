import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSignupData } from "../slices/authSlice";
import { signUp } from "../services/authApi";
import "../css/Signup.css";
import "../css/Login.css";

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match");
      return;
    }
    const signupData = {
      ...formData,
    };


    dispatch(setSignupData(signupData));
    dispatch(
      signUp(name, email, password, confirmPassword, navigate)
    );

    // Reset
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  
    return(
        <div className="mainpage">
        <form action="" className="login__form" onSubmit={handleOnSubmit}>
            <h1 className="login__title">Signup</h1>

        <div class="login__inputs">
          <div class="signup__box">
            <input className="login__input"
              required
              type="text"
              name="name"
              placeholder="Enter Full Name"
              value={name}
              onChange={handleOnChange} />
          </div>
          <div class="signup__box">
            <input
              className="login__input"
              required
              type="text"
              name="email"
              placeholder="Enter email address"
              value={email}
              onChange={handleOnChange} />
            <i class="ri-mail-fill"></i>
          </div>

          <div class="signup__box">
            <input className="login__input"
              required
              type="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={handleOnChange} />

          </div>
          <div class="signup__box">
            <input className="login__input"
              required
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleOnChange} />

          </div>
        </div>

        <button type="submit" class="signup__button">Signup</button>

        <div class="login__register">
          Already have an account? <a href="/login">Login</a>
        </div>
      </form>
    </div>
  )
}