import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { StatusScreen } from "@/components/status-screen";

describe("StatusScreen", () => {
  it("renders the status copy and actions", () => {
    render(
      <StatusScreen
        code="404"
        title="Page not found"
        description="This page does not exist."
        actions={<button type="button">Home</button>}
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Page not found" }),
    ).toBeInTheDocument();
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Home" })).toBeInTheDocument();
  });
});
