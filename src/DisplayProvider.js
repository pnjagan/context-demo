import React, { useState } from "react";
export const DisplayContext = React.createContext();
export const DISPLAY_TYPES = {
  UNKNOWN: -1,
  MOBILE: 0,
  TAB: 1,
  LAPTOP: 2,
};

export function DisplayProvider(props) {
  const [displayType, setDisplayType] = useState(DISPLAY_TYPES.MOBILE);

  return (
    <DisplayContext.Provider
      value={{
        displayType: displayType,
        setDisplay: (display) => {
          setDisplayType(display);
        },
      }}
    >
      {props.children}
    </DisplayContext.Provider>
  );
}
