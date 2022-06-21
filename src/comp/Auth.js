import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Root";

export default function Auth() {
  const navigate = useNavigate();

  const [ob, setob] = useState({ name: "", email: "", password: "" });

  const value = useContext(MyContext);

  const handleChange = (e) => {
    let { placeholder: name, value } = e.target;
    setob({ ...ob, [name]: value });
  };

  const login = () => {
    const { email, password } = ob;
    axios
      .post("http://localhost:4000/login", { email, password })
      .then((d) => d.data)
      .then((d) => {
        console.log("after login :: ", d);
        if (d?.status) {
          alert("welcome " + d?.data?.name);
          value?.setState({ ...value?.state, loggedin: true, ...d?.data });
          navigate("/dashboard");
        } else {
          alert("failed to login");
        }
      })
      .catch((e) => console.log("after login :: ", e));
  };

  const signup = () => {
    const { email, password } = ob;
    axios
      .post("http://localhost:4000/signup", ob)
      .then((d) => d.data)
      .then((d) => {
        console.log("after signup :: ", d);
        if (d?.status) {
          alert("signup success ");
        } else {
          alert("signup failed");
        }
      })
      .catch((e) => console.log("after signup :: ", e));
  };

  return (
    <div>
      <h1>auth</h1>
      <input placeholder="name" value={ob.name} onChange={handleChange} />
      <input placeholder="email" value={ob.email} onChange={handleChange} />
      <input
        placeholder="password"
        value={ob.password}
        onChange={handleChange}
      />

      <button onClick={login}>login</button>
      <button onClick={signup}>signup here</button>
    </div>
  );
}
