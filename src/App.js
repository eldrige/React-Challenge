import React from "react";
import "./bootstrap.min.css";
import "./App.css";
import Event from "./components/Event";
import data from "./data";

function App() {
  return (
    <>
      <div className="container my-5">
        <h1 className="my-2">Events</h1>
        <Event events={data} />
      </div>
    </>
  );
}

export default App;
