import React, { useState } from "react";

const Design2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailClass, setEmailClass] = useState("");
  const [passwordClass, setPasswordClass] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(value)) {
      setEmailClass("border-green-500");
      setEmailError("");
    } else {
      setEmailClass("border-red-500");
      setEmailError("Please enter a valid email address.");
    }
  };

  const validatePassword = (value) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (regex.test(value)) {
      setPasswordClass("border-green-500");
      setPasswordError("");
    } else {
      setPasswordClass("border-red-500");
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one letter and one number."
      );
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center p-3">
        <img
          className="h-16 w-16 rounded-full ring-2 ring-white"
          src={`https://randomuser.me/api/portraits/men/30.jpg`}
          alt=""
        />
      </div>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
          className={`p-2 border rounded w-full mb-1 ${emailClass}`}
          placeholder="Email Address"
        />
        {emailError && (
          <p className="text-red-500 text-sm mb-4">{emailError}</p>
        )}
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword(e.target.value);
          }}
          className={`p-2 border rounded w-full mb-1 ${passwordClass}`}
          placeholder="Password"
        />
        {passwordError && (
          <p className="text-red-500 text-sm mb-4">{passwordError}</p>
        )}
      </div>
    </div>
  );
};

export default Design2;
