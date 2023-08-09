import React, { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { addDays, getDay, getMonth } from "date-fns";
import * as rdrLocales from "react-date-range/dist/locale";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const isSaturday = (date) => {
  const day = getDay(date);
  return day !== 6;
};

const DateRangeComp = () => {
  const start = new Date(2024, 5, 15);
  const [range, setRange] = useState([
    {
      startDate: start,
      endDate: addDays(start, 7),
      key: "selection",
    },
  ]);
  const [price, setPrice] = useState(0);
  const prices = [{ price1: 414.28 }, { price2: 385.71 }, { price3: 357.14 }];

  const dates = [];
  function getDatesBetween() {
    const currentDate = new Date(range[0].startDate.getTime());

    while (currentDate <= range[0].endDate) {
      dates.push(new Date(currentDate).getMonth());
      currentDate.setDate(currentDate.getDate() + 1);
    }
    calculatePrice(dates);
  }
  const calculatePrice = (dates) => {
    for (let i = 0; i < dates.length; i++) {
      console.log(dates[i]);
    }
  };

  const [open, setOpen] = useState(false);
  const refOne = useRef(null);
  useEffect(() => {
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

  return (
    <div className="calendarWrap">
      <input
        value={` ${format(range[0].startDate, "dd/MM/yyyy")} à ${format(
          range[0].endDate,
          "dd/MM/yyyy"
        )} `}
        readOnly
        className="inputBox"
        onClick={() => {
          setOpen(true);
        }}
      />
      <div ref={refOne}>
        {open && (
          <DateRange
            onChange={(item) => {
              setRange([item.selection]);
              getDatesBetween(getDatesBetween());
            }}
            edittableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            minDays={7}
            showMonthArrow={true}
            showMonthAndYearPickers={false}
            locale={rdrLocales.fr}
            /*  disabledDates={disabledDates} */
            disabledDay={isSaturday}
            minDate={new Date(2024, 5, 15)}
            maxDate={new Date(2024, 8, 15)}
            /*   disabledDates={[new Date(2023, 7, 9)]} */
            months={2}
            direction="horizontal"
            className="calendarElement"
          />
        )}
      </div>
      <h3>{price}</h3>
    </div>
  );
};

export default DateRangeComp;
