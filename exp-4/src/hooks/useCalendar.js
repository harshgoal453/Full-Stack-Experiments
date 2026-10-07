import { useState } from "react";

function useCalendar() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Team Meeting",
      time: "10:00",
    },
    {
      id: 2,
      title: "Project Review",
      time: "12:00",
    },
    {
      id: 3,
      title: "Client Call",
      time: "15:00",
    },
  ]);

  return {
    events,
    setEvents,
  };
}

export default useCalendar;