import React, { useState, useContext } from "react";
import { CarW } from "./Car";
import { history, log } from "./App";
import { AgentContext } from "./AgentProvider";

//https://www.npmjs.com/package/history

function JustDisplay(props) {
  log("Just display");
  let agent = useContext(AgentContext);
  const totalSale = agent.sales.reduce((prev, curr) => prev + curr, 0);

  return <div>Total sales : {totalSale}</div>;
}

export function CarList() {
  let carList = [];
  for (let i = 0; i < 5; i++) {
    carList[i] = 0;
  }
  const [selectedCar, setSelectedCar] = useState(0);
  log("Inside CarLIST render");
  return (
    <div>
      Car to view
      <JustDisplay />
      <select
        id="carnumberselect"
        onChange={(e) => {
          log("event :", e.target.value);
          setSelectedCar(e.target.value);
        }}
      >
        {carList.map((v, i) => (
          <option value={i} key={i}>
            Car {i}
          </option>
        ))}
      </select>
      <a href={"#carnum_" + selectedCar}>GO</a>
      {carList.map((v, i) => (
        <CarW num={i} key={i} />
      ))}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          history.push("/sales");
        }}
      >
        GOTO sales summary
      </a>
    </div>
  );
}
