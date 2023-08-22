import React, { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { getDay } from "date-fns";
import * as rdrLocales from "react-date-range/dist/locale";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { nb } from "date-fns/locale";

const DateRangeComp = () => {
  const [editorActive, setEditorActive] = useState(false);
  const [rates, setRates] = useState([
    { date: new Date(2024, 5, 15), price: 100 },
    { date: new Date(2024, 5, 16), price: 100 },
    { date: new Date(2024, 5, 17), price: 100 },
    { date: new Date(2024, 5, 18), price: 100 },
    { date: new Date(2024, 5, 19), price: 100 },
    { date: new Date(2024, 5, 20), price: 100 },
    { date: new Date(2024, 5, 21), price: 100 },
    { date: new Date(2024, 5, 22), price: 100 },
    { date: new Date(2024, 5, 23), price: 100 },
    { date: new Date(2024, 5, 24), price: 100 },
    { date: new Date(2024, 5, 25), price: 100 },
    { date: new Date(2024, 5, 26), price: 100 },
    { date: new Date(2024, 5, 27), price: 100 },
    { date: new Date(2024, 5, 28), price: 100 },
    { date: new Date(2024, 5, 29), price: 100 },
    { date: new Date(2024, 5, 30), price: 100 },
    { date: new Date(2024, 6, 23), price: 100 },
    { date: new Date(2024, 6, 24), price: 100 },
    { date: new Date(2024, 6, 13), price: 200 },
    { date: new Date(2024, 6, 20), price: 210 },
  ]);
  const minDate = () => {
    const year = new Date().getYear() - 100 + 2001;
    return new Date(year, 6, 1);
  };
  const start = minDate();
  const [range, setRange] = useState([
    {
      startDate: start,
      endDate: start,
      key: "selection",
    },
  ]);

  const [disabledDates, setDisabledDates] = useState([new Date(2024, 6, 13)]);
  const handleDisabledDates = () => {
    setDisabledDates(dates);
  };

  const isSaturday = (date) => {
    const day = getDay(date);
    return day !== 6;
  };
  const [dates, setDates] = useState([]);

  const getDatesBetween = (startDate, endDate) => {
    const currentDate = new Date(startDate.getTime());

    while (currentDate < endDate) {
      currentDate.setDate(currentDate.getDate() + 1);
      setDates([...dates, currentDate]);
    }
  };

  /*   useEffect(() => {
    getDatesBetween(range[0].startDate, range[0].endDate);
  }, [range[0].startDate, range[0].endDate]); */

  const [editRates, setEditRates] = useState(false);

  // useEffect(() => {
  //   editorActive
  //     ? editRates
  //       ? handleEditRates(dates)
  //       : /* handleDisabledDates(dates) */ null
  //     : getPrice(dates);
  // }, [getDatesBetween]);

  const [price, setPrice] = useState(0);

  const getPrice = (dates) => {
    let total = 0;
    const selectedDates = rates.filter((rate) =>
      dates.includes(rate.date.toString())
    );
    for (let i = 0; i < selectedDates.length; i++) {
      total += selectedDates[i].price;
    }
    return setPrice(total);
  };

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);
  const [open, setOpen] = useState(false);
  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };
  const refOne = useRef(null);
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  // TO DO
  const handleEditRates = (dates) => {
    const newRates = rates.filter((rate) =>
      dates.includes(rate.date.toString())
    );
    newRates.map((newRate) => {
      newRate.price = 10;
    });
  };
  //
  return (
    <div className="calendarWrap">
      <button onClick={() => setEditorActive(!editorActive)}>Editor</button>
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
            }}
            onClick={getDatesBetween(range[0].startDate, range[0].endDate)}
            edittableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            minDays={7}
            showMonthArrow={true}
            showMonthAndYearPickers={false}
            locale={rdrLocales.fr}
            disabledDates={disabledDates}
            disabledDay={isSaturday}
            minDate={new Date()}
            maxDate={new Date(2024, 8, 15)}
            months={2}
            direction="horizontal"
            className="calendarElement"
          />
        )}
      </div>
      {editorActive && (
        <div>
          <button onClick={() => setEditRates(!editRates)}>
            {editRates ? "Edit Rates" : "Block Dates"}
          </button>
          <input type="text" />
          <input onClick={() => handleDisabledDates()} type="submit" />
        </div>
      )}
      <h3>{price}</h3>
    </div>
  );
};

export default DateRangeComp;
