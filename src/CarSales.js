import React from "react";
import { history } from "./App";
import { AgentContext } from "./AgentProvider";
import { log } from "./App";

export function CarSales(props) {
  //display.setDisplay(deviceType);

  return (
    <AgentContext.Consumer>
      {(context) => {
        log("Inside CarSales");
        return (
          <div>
            <p>CAR SALES component</p>
            <div>
              {context.sales.map((v, i) => (
                <div key={i}>
                  <p>
                    Sales for CAR#{i} is {v}
                  </p>
                </div>
              ))}
            </div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                history.push("/home");
              }}
            >
              Go Back Home
            </a>
          </div>
        );
      }}
    </AgentContext.Consumer>
  );
}
