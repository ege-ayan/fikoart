import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ImageReadyGate } from "@/components/image-ready-gate";

describe("ImageReadyGate", () => {
  it("renders children immediately when there are no images to wait for", () => {
    render(
      <ImageReadyGate srcs={[]}>
        <p>ready</p>
      </ImageReadyGate>,
    );

    expect(screen.getByText("ready")).toBeInTheDocument();
  });
});
