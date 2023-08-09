import React, { useEffect, useRef, useState } from "react";
import { Calendar } from "react-date-range";

import format from "date-fns/format";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const CalendarComp = () => {
  const [calendar, setCalendar] = useState();
  const [open, setOpen] = useState(false);
  const refOne = useRef(null);
  useEffect(() => {
    setCalendar(format(new Date(), "dd/MM/yyyy"));
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);
  const hideOnEscape = (e) => {
    /*     console.log(e.key); */
    if (e.key === "Escape") {
      setOpen(false);
    }
  };
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
    /*     console.log(refOne.current);
    console.log(e.target); */
  };
  const handleSelect = (date) => {
    setCalendar(format(date, "dd/MM/yyyy"));
  };

  return (
    <div className="calendarWrap">
      <input
        value={calendar}
        readOnly
        className="inputBox"
        onClick={() => {
          setOpen(true);
        }}
      />
      <div ref={refOne}>
        {open && (
          <Calendar
            date={new Date()}
            onChange={handleSelect}
            className="calendarElement"
          />
        )}
      </div>
    </div>
  );
};

export default CalendarComp;
