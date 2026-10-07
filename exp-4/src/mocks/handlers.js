import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/events", () => {
    return HttpResponse.json([
      {
        id: 1,
        title: "Team Meeting",
        time: "10:00 AM",
      },
      {
        id: 2,
        title: "Project Review",
        time: "12:00 PM",
      },
      {
        id: 3,
        title: "Client Call",
        time: "3:00 PM",
      },
    ]);
  }),
];