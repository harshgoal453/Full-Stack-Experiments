import { useState, useMemo, useCallback } from "react";
import EventCard from "./EventCard";
import useCalendar from "../hooks/useCalendar";

function CalendarView() {
  const { events, setEvents } = useCalendar();

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const totalEvents = useMemo(() => {
    console.log("Calculating Total Events");
    return events.length;
  }, [events]);

  const addEvent = useCallback(() => {
    if (title.trim() === "" || time === "") {
      alert("Please enter event title and time.");
      return;
    }

    const newEvent = {
      id: events.length + 1,
      title: title,
      time: time,
    };

    setEvents((prev) => [...prev, newEvent]);

    setTitle("");
    setTime("");
  }, [title, time, events, setEvents]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Interactive Calendar</h2>

      <h3>Total Events: {totalEvents}</h3>

      <input
        type="text"
        placeholder="Enter Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          padding: "8px",
          marginRight: "10px",
        }}
      />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        style={{
          padding: "8px",
          marginRight: "10px",
        }}
      />

      <button onClick={addEvent}>
        Add Event
      </button>

      <hr />

      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
        />
      ))}
    </div>
  );
}

export default CalendarView;