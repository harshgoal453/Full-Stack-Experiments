import { render, screen } from "@testing-library/react";
import CalendarView from "../components/CalendarView";

test("renders calendar heading", () => {
  render(<CalendarView />);

  expect(
    screen.getByText(/Total Events/i)
  ).toBeInTheDocument();
});