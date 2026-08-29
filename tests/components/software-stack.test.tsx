import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SoftwareStack } from "@/components/software-stack";
import { software } from "@/content/resume";

describe("SoftwareStack", () => {
  it("renders every tool as an unselectable chip", () => {
    const { container } = render(<SoftwareStack />);

    for (const name of software) {
      expect(screen.getByText(name)).toBeInTheDocument();
    }

    expect(container.querySelectorAll("svg").length).toBe(software.length);
    expect(container.querySelector(".select-none")).toBeTruthy();
  });
});
