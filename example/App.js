import React, { useState } from "react";
import { StatusBar, SafeAreaView } from "react-native";
import Button from "./lib/Button";

const App = () => {
  const [spinnerVisibility, setSpinnerVisibility] = useState(false);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Button
          width={300}
          spinnerEnable
          text="Confirm"
          spinnerVisibility={spinnerVisibility}
          onPress={() => {
            setSpinnerVisibility(true);
            setTimeout(() => setSpinnerVisibility(false), 1250);
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
