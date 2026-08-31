import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Badge } from "./badge";

describe("Badge", () => {
  it("renders the title text", () => {
    render(<Badge title="Active" />);
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("renders as a span element", () => {
    render(<Badge title="Active" />);
    expect(screen.getByText("Active").tagName).toBe("SPAN");
  });

  it.each(["solid", "outline"] as const)(
    "renders with %s variant",
    (variant) => {
      render(<Badge title="Status" variant={variant} />);
      expect(screen.getByText("Status")).toBeInTheDocument();
    },
  );

  it.each([
    "primary",
    "purple",
    "danger",
    "yellow",
    "green",
    "neutral",
  ] as const)("renders with %s color", (color) => {
    render(<Badge title="Label" color={color} />);
    expect(screen.getByText("Label")).toBeInTheDocument();
  });

  it.each(["xs", "sm", "md", "lg"] as const)("renders with %s size", (size) => {
    render(<Badge title="Label" size={size} />);
    expect(screen.getByText("Label")).toBeInTheDocument();
  });
});
