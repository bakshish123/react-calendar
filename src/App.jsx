import React, { useState } from 'react';

const CalendarApp = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const generateCalendar = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const calendar = [];

    let date = 1;
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < new Date(currentYear, currentMonth, 1).getDay()) {
          week.push(<td key={j}></td>);
        } else if (date > daysInMonth) {
          week.push(<td key={j}></td>);
        } else {
          week.push(
            <td key={j} className={date === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear() ? 'today' : ''}>
              {date}
            </td>
          );
          date++;
        }
      }
      calendar.push(<tr key={i}>{week}</tr>);
    }

    return calendar;
  };

  const previousMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth - 1 + 12) % 12);
    if (currentMonth === 0) {
      setCurrentYear((prevYear) => prevYear - 1);
    }
  };

  const nextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth + 1) % 12);
    if (currentMonth === 11) {
      setCurrentYear((prevYear) => prevYear + 1);
    }
  };

  return (
    <div className="App h-screen w-screen m-0 p-0 bg-black text-red-700">
      <h2 className='text-center font-extrabold text-5xl p-4'>React Calendar</h2>
      <div className="flex flex-row justify-center items-center p-7 m-4">
      <div className="flex flex-row justify-center items-center border-2 border-red-300 p-7 m-4 rounded-lg">
      <table>
        <thead className='p-4'>
          <tr>
            <th className='p-4'>Sun</th>
            <th className='p-4'>Mon</th>
            <th className='p-4'>Tue</th>
            <th className='p-4'>Wed</th>
            <th className='p-4'>Thu</th>
            <th className='p-4'>Fri</th>
            <th className='p-4'>Sat</th>
          </tr>
        </thead>
        <tbody>{generateCalendar()}</tbody>
      </table>
      </div> 
      </div>
      <div className="buttons flex flex-row justify-center items-center h-10 ">

      <button onClick={previousMonth} className='text-black bg-red-700  m-4 shadow-2xl rounded-md p-2 hover:bg-red-300'>Previous Month</button>
      <span className='m-2'>{new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(currentYear, currentMonth, 1))} {currentYear}</span>
      <button onClick={nextMonth} className='text-black bg-red-700  m-4 shadow-2xl rounded-md p-2 hover:bg-red-300'>Next Month</button>
      
      </div>
    </div>
  );
};

export default CalendarApp;
