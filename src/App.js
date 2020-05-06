import React, { useState, useContext, useEffect } from "react";
import { CarList } from "./CarList";
import { CarSales } from "./CarSales";
import { createBrowserHistory, createLocation } from "history";
import { DisplayContext, DISPLAY_TYPES } from "./DisplayProvider";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

const inspect = require("object-inspect");

export const log = (...args) => {
  let str = "";
  for (let item of args) {
    let itype = typeof item;
    switch (itype) {
      case "object":
        str = str + inspect(item);
        break;
      case "function":
        str = str + inspect(item);
        break;
      default:
        str = str + item;
        break;
    }
  }
  console.log(str);
};

export const history = createBrowserHistory();

// export const createBrowserHistory() as history;

//

export function AppWrap(props) {
  log("Render method in APPS WRAP");

  // log("Current :", history.location);
  const [cLoc, setCLoc] = useState("/home");

  const unlisten = history.listen((location, action) => {
    // log(
    //   `The current URL is ${location.pathname} :`,
    //   location.search,
    //   " ?",
    //   location.hash
    // );
    // log(`The last navigation action was ${action}`);
    setCLoc(location.pathname);
  });

  // log("PATH :" + history.location.pathname);
  if (history.location.pathname === "/") {
    // log("In default PATH");
    history.push("/home");
  }

  const theme = useTheme();

  let deviceType = 0;

  deviceType = useMediaQuery(theme.breakpoints.down("sm"))
    ? DISPLAY_TYPES.MOBILE
    : DISPLAY_TYPES.UNKNOWN;

  deviceType = useMediaQuery(theme.breakpoints.up("lg"))
    ? DISPLAY_TYPES.LAPTOP
    : deviceType === DISPLAY_TYPES.UNKNOWN
    ? DISPLAY_TYPES.TAB
    : deviceType;

  let display = useContext(DisplayContext);

  useEffect(() => {
    display.setDisplay(deviceType);
  });

  return <PApp />;
}

class PApp extends React.PureComponent {
  render() {
    log("Render method in PURE App");
    return (
      <>
        <div className="App">
          <header className="App-header">
            <p>Context DEMO</p>
          </header>
          {history.location.pathname === "/sales" ? <CarSales /> : <CarList />}
        </div>
      </>
    );
  }
}

// plan App
export function App() {
  log("Render method in APPS");

  // log("Current :", history.location);
  const [cLoc, setCLoc] = useState("/home");

  const unlisten = history.listen((location, action) => {
    // log(
    //   `The current URL is ${location.pathname} :`,
    //   location.search,
    //   " ?",
    //   location.hash
    // );
    // log(`The last navigation action was ${action}`);
    setCLoc(location.pathname);
  });

  // log("PATH :" + history.location.pathname);
  if (history.location.pathname === "/") {
    // log("In default PATH");
    history.push("/home");
  }

  const theme = useTheme();

  let deviceType = 0;

  deviceType = useMediaQuery(theme.breakpoints.down("sm"))
    ? DISPLAY_TYPES.MOBILE
    : DISPLAY_TYPES.UNKNOWN;

  deviceType = useMediaQuery(theme.breakpoints.up("lg"))
    ? DISPLAY_TYPES.LAPTOP
    : deviceType === DISPLAY_TYPES.UNKNOWN
    ? DISPLAY_TYPES.TAB
    : deviceType;

  let display = useContext(DisplayContext);
  display.setDisplay(deviceType);

  return (
    <>
      {/**
      <div>
        <Hidden xlUp>Hide on xlUp</Hidden>
      </div>
      <div>
        <Hidden lgUp>Hide on lgUp</Hidden>
      </div>
      <div>
        <Hidden mdUp>Hide on mdUp</Hidden>
      </div>
      <div>
        <Hidden smUp>Hide on smUp</Hidden>
      </div>
      <div>
        <Hidden xsUp>Hide on xsUp</Hidden>
      </div>

    */}

      <div className="App">
        <header className="App-header">
          <p>Context DEMO</p>
        </header>
        {history.location.pathname === "/sales" ? <CarSales /> : <CarList />}
      </div>
    </>
  );
}
