import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  //updates state with new array when adding a test object
  //this is to have the client render a new test object automatically without having to refresh page

  const [confirming, setConfirming] = useState(false);
  const [printingOptions, setPrintingOptions] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [typeOfAd, setTypeOfAd] = useState([]);
  const [digitalServices, setDigitalServices] = useState([]);
  const [advertisingDuration, setAdvertisingDuration] = useState([]);
  const [user, setUser] = useState(null);
  const [onlineAdvertising, setOnlineAdvertising] = useState([
    0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [onlineType, setOnlineType] = useState([]);

  return (
    <AppContext.Provider
      value={{
        confirming,
        setConfirming,
        printingOptions,
        setPrintingOptions,
        typeOfAd,
        setTypeOfAd,
        digitalServices,
        setDigitalServices,
        advertisingDuration,
        setAdvertisingDuration,
        user,
        setUser,
        onlineAdvertising,
        setOnlineAdvertising,
        onlineType,
        setOnlineType,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

// When fetching data from the backend it is a good idea to store the data in a context API rather then local state
// A context API allows for data to be passed down to every component automatically rather than having components fetch data through props or lifting state
