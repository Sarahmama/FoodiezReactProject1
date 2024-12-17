import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
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
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
