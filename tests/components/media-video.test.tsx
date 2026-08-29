import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { MediaVideo } from "@/components/media-video";

describe("MediaVideo", () => {
  it("renders a streamable mp4 with poster and intrinsic size", () => {
    render(
      <MediaVideo
        src="/videos/reel/reel.mp4"
        poster="/videos/reel/poster.jpg"
        width={1920}
        height={1080}
        label="2025 Animation Reel"
        priority
      />,
    );

    const video = screen.getByLabelText("2025 Animation Reel");
    expect(video.tagName).toBe("VIDEO");
    expect(video).toHaveAttribute("preload", "auto");
    expect(video).toHaveAttribute("autoplay");
    expect(video).toHaveAttribute("controls");
    expect(video.querySelector("source")).toHaveAttribute(
      "src",
      "/videos/reel/reel.mp4",
    );
  });

  it("keeps looping clips muted and without controls", () => {
    render(
      <MediaVideo
        src="/videos/bubbles/bubbles.mp4"
        poster="/videos/bubbles/poster.jpg"
        width={1080}
        height={1080}
        label="Bubbles"
        loop
      />,
    );

    const video = screen.getByLabelText("Bubbles") as HTMLVideoElement;
    expect(video).toHaveAttribute("loop");
    expect(video).toHaveAttribute("autoplay");
    expect(video.muted).toBe(true);
    expect(video).not.toHaveAttribute("controls");
    expect(video).toHaveAttribute("preload", "metadata");
  });
});
