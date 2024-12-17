import React, { useState, useEffect } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import logo from "../assets/images/logo.webp";


const RegisterPage = () => {
  const [activeTab, setActiveTab] = useState("SignIn");
  const [moveLeft, setMoveLeft] = useState(false);
  const [moveTabs, setMoveTabs] = useState(false);
  const [contentHeight, setContentHeight] = useState("60%");
  const [tabContentHeight, settabContentHeight] = useState("80%");

  useEffect(() => {
    if (activeTab === "SignUp") {
      setMoveLeft(true);
      setMoveTabs(true);
      setContentHeight("90%");
      settabContentHeight("90%");
    } else {
      setMoveLeft(false);
      setMoveTabs(false);
      setContentHeight("60%");
      settabContentHeight("80%");
    }
  }, [activeTab]);

  return (
    <div className="register-page">
      <div className="content" style={{ height: contentHeight }}>
        <div className={`tabs ${moveTabs ? "move-right" : ""}`} role="tablist">
          <button
            className={activeTab === "SignIn" ? "tab active" : "tab"}
            onClick={() => setActiveTab("SignIn")}
            role="tab"
            aria-selected={activeTab === "SignIn"}
          >
            Sign In
          </button>
          <button
            className={activeTab === "SignUp" ? "tab active" : "tab"}
            onClick={() => setActiveTab("SignUp")}
            role="tab"
            aria-selected={activeTab === "SignUp"}
          >
            Sign Up
          </button>
        </div>

        <div
          className={`tab-content ${moveLeft ? "move-left" : ""}`}
          style={{ height: tabContentHeight }}
        >
          {activeTab === "SignIn" && <SignIn />}
          {activeTab === "SignUp" && <SignUp />}
        </div>

        <div className={`welcoming-statement ${moveLeft ? "move-left" : ""}`}>
          <img src={logo} alt="Logo"/>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
