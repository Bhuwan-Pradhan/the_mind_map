import "../css/Login.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authApi";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };

  return (
    <div className="mainpage">
      <form action="" className="login__form" onSubmit={handleOnSubmit}>
        <h1 className="login__title">Login</h1>

        <div className="login__inputs">
          <div class="login__box">
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

          <div class="login__box">
            <input className="login__input"
              required
              type="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={handleOnChange} />

          </div>
        </div>
        <button type="submit" className="login__button">Login</button>

        <div className="login__register">
          Don't have an account? <a href="/signup">Register</a>
        </div>
      </form>
    </div>
  )
}