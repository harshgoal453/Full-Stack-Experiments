import React from "react";

function EventCard({ event }) {
  console.log("Rendering:", event.title);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "8px",
      }}
    >
      <h3>{event.title}</h3>
      <p>Time: {event.time}</p>
    </div>
  );
}

export default React.memo(EventCard);