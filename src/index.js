import React from "react";
import ReactDOM from "react-dom";
import { AppWrap, App } from "./App";
import { AgentProvider } from "./AgentProvider";
import { DisplayProvider } from "./DisplayProvider";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <AgentProvider>
      <DisplayProvider>
        <AppWrap />
        {/* <App /> */}
      </DisplayProvider>
    </AgentProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
