import React, { useState } from "react";
import myImg from "../assets/clock-signin-signup.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpPage = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
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
              <h1 className="text-white mb-4 text-center">REGISTER</h1>
              <h1 className="text-white fs-5"></h1>
              <form style={{ width: "350px" }} onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-3 text-white">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    name="name"
                    className="form-control rounded-0 border-0"
                    onChange={(e) => setName(e.target.value)}
                    style={{ background: "#2A2842", color: "#A6ABB6" }}
                  />
                </div>
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
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ background: "#2A2842", color: "#A6ABB6" }}
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
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ background: "#2A2842", color: "#A6ABB6" }}
                  />
                </div>

                <h1 className="text-white fs-5"></h1>

                <button
                  type="submit"
                  className="btn btn-info w-100 rounded-0 text-white"
                >
                  REGISTER
                </button>
              </form>

              <p className="text-white mt-3 text-center">
                Already have an account &nbsp;
                <Link to="/register" className="text-decoration-none">
                  <span className="text-safe fw-bold">Login</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
