import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorPage from "../../../../../components/Generic/Error/Page/main";

describe("Test error page", () => {
  it("Should display the error text", () => {
    render(<ErrorPage />);

    const textElement = screen.getByText(
      /The page you requested does not exist or is unavailable at the moment. Please refresh the page or try again in a bit./i
    );

    expect(textElement).toBeInTheDocument();
  });
});
