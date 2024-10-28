import React, { useState } from "react";
import myImg from "../assets/clock-signin-signup.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/auth/login", { email, password })
      .then((result) => {
        console.log(result);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row w-100" style={{ height: "700px" }}>
        {/* Thẻ chứa ảnh */}
        <div
          className="col-6 p-0 position-relative"
          style={{ height: "700px" }}
        >
          <img
            src={myImg}
            className="position-absolute object-fit-cover"
            style={{ height: "700px", left: "190px" }}
          />
        </div>
        {/* Form đăng ký */}
        <div className="col-6 p-0">
          <div
            className="d-flex h-100 justify-content-center align-items-center"
            style={{ background: "#151424" }}
          >
            <div>
              <h1 className="text-white mb-4 text-center">WELCOME BACK</h1>
              <h1 className="text-white fs-5"></h1>
              <form style={{ width: "350px" }} onSubmit={handleSubmit}>
                {/* Email */}
                <div className="mb-3 text-white">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    name="email"
                    className="form-control rounded-0 border-0"
                    style={{ background: "#2A2842", color: "#A6ABB6" }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* Password */}
                <div className="mb-3 text-white">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    autoComplete="off"
                    name="password"
                    className="form-control rounded-0 border-0"
                    style={{ background: "#2A2842", color: "#A6ABB6" }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <p className="text-secondary mb-4 text-end">Forgot password</p>

                <button
                  type="submit"
                  className="btn btn-info w-100 rounded-0 text-white"
                >
                  LOGIN
                </button>
              </form>

              <p className="text-white mt-3 text-center">
                Don't have an account yet? &nbsp;
                <Link to="/register" className="text-decoration-none">
                  <span className="text-safe fw-bold">Sign up</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
