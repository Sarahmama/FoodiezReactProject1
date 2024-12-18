import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../API/auth";

const SignIn = () => {
  const [remember, setRemember] = useState(false);
  const [Data, setData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationKey: ["LogIn"],
    mutationFn: () => login(Data),
    onSuccess: () => {
      navigate("/");
    },
  });
  const handleChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-lg"
        style={{
          borderRadius: "25px",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <div className="row g-0">
          <div className="col-12 d-flex flex-column align-items-center p-4">
            <h1 className="text-center fw-bold mb-4 white-text">Sign In</h1>

            <form className="w-100" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="form-label">
                  username
                </label>
                <input
                  type="username"
                  id="username"
                  name="username"
                  className="form-control"
                  placeholder="Enter your username"
                  value={Data.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={Data.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="d-flex justify-content-between mb-4">
                <div>
                  <input
                    type="checkbox"
                    id="remember"
                    className="form-check-input"
                    checked={remember}
                    onChange={() => setRemember(!remember)}
                  />
                  <label htmlFor="remember" className="form-check-label ms-2">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-decoration-none">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
