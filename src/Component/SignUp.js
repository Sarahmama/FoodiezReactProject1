import React, { useState } from "react";
import { register } from "../API/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [Data, setData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(Data),
    onSuccess: () => {
      navigate("/Home");
    },
  });

  const handleChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div>
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
              <h1 className="text-center fw-bold mb-4 white-text">Sign Up</h1>

              <form className="w-100" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                    placeholder="Choose a username"
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

                <button type="submit" className="btn btn-primary w-100">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
