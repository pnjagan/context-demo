import React, { useContext } from "react";
import { AgentContext } from "./AgentProvider";
import { DisplayContext } from "./DisplayProvider";

import { log } from "./App";

export function CarW(props) {
  log("Inside CarW render :", props.num);
  if (props.num % 2 === 0) {
    return <CarD {...props} />;
  } else {
    return <Car {...props} />;
  }
}

function CarD(props) {
  let display = useContext(DisplayContext);
  log("Inside CarD render :", props.num);
  return <Car {...props} displayType={display.displayType} />;
}

function Car(props) {
  return (
    <AgentContext.Consumer>
      {(context) => {
        log("Inside Car render :", props.num);
        return (
          <>
            <div
              id={"carnum_" + props.num}
              style={{
                margin: "10px",
                borderStyle: "solid",
                padding: "10px",
                borderWidth: "2px",
                borderColor: "green",
              }}
            >
              <p style={{ fontSize: "1rem" }}>CAR # {props.num}</p>
              <p>Display : {props.displayType}</p>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  context.addSales(props.num);
                }}
              >
                BUY
              </button>
            </div>
          </>
        );
      }}
    </AgentContext.Consumer>
  );
}
