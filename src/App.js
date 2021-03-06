import React, { Fragment } from "react";
import { facebookAuth } from "./utils/Firebase";

const facebook = (event) => {
  facebookAuth();
};

const App = () => {
  return (
    <Fragment>
      <input type="button" onClick={facebook} />
    </Fragment>
  );
};

export default App;
