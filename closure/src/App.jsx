import { useEffect, useState } from "react";
import "./App.css";
import { counter } from "./components/closuresBasics";
import { closuresObject } from "./components/closuresObject";

function App() {
  useEffect(() => {
    console.log("Basic Closure Counter ==>", counter());
    console.log("Basic Closure Counter ==>", counter());
    console.log("Basic Closure Counter ==>", counter());
    const counter2 = closuresObject();
    console.log("Closure Counter Increament ==>", counter2.increament());
    console.log("Closure Counter Increament ==>", counter2.increament());
    console.log("Closure Counter Increament ==>", counter2.increament());
    console.log("Closure Counter Increament ==>", counter2.increament());
    console.log("Closure Counter Resets ==>", counter2.reset());
    console.log("Closure Counter Increament ==>", counter2.increament());
    console.log("Closure Counter Increament ==>", counter2.increament());
  }, []);

  return (
    <>
      <div>Created a closure function to increament the counter</div>
    </>
  );
}

export default App;
