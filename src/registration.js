import React, { useState,useEffect } from "react";
import Header from "./header";
import {useNavigate} from "react-router-dom";

export default function Login() {
  useEffect(() =>{
    if(localStorage.getItem("User.info"))
    {
      Navigate("/add");
    }
  },[]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  async function Signup(e) {
    e.preventDefault();
    let item = { name, email, password };
    console.log(item);

    // try {
    let response = await fetch("http://127.0.0.1:8000/api/registration ", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    let result = await response.json();
    localStorage.setItem("User.Info", JSON.stringify(result));
    Navigate("/add");
  }

  return (
    <>
      <Header />
      <div>
        <form onSubmit={Signup}>
          <label>Username</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="username"
          />
          <br />
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <br />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <br />
          <button type="submit" name="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
