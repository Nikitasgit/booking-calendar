import React from "react";
import CalendarComp from "./components/CalendarComp";
import DateRangeComp from "./components/DateRangeComp";

const App = () => {
  return (
    <div>
      <h4>React Date Select</h4>
      <CalendarComp />
      <br />
      <br />
      <hr />
      <h4>React Date Select</h4>
      <DateRangeComp />
      <br />
      <br />
      <hr />
    </div>
  );
};

export default App;
