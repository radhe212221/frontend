import React, { useContext, useState } from "react";
import { MyContext } from "../Root";
export default function Dashboard() {
  const [a, seta] = useState([]);
  const [ob, setob] = useState({
    title: "",
    status: "pending",
  });
  const value = useContext(MyContext);
  const { name, token } = value?.state;
  return (
    <div>
      <h1>Dashboard - {name || "Guest"}</h1>
    </div>
  );
}
