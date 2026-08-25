import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { describe, expect, it, vi } from "vitest";

import { FaSave } from "react-icons/fa";
import { Button } from "./button";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Save</Button>);
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
  });

  it("uses button type by default", () => {
    render(<Button>Save</Button>);
    expect(screen.getByRole("button", { name: "Save" })).toHaveAttribute(
      "type",
      "button",
    );
  });

  it("supports submit type", () => {
    render(<Button type="submit">Save</Button>);
    expect(screen.getByRole("button", { name: "Save" })).toHaveAttribute(
      "type",
      "submit",
    );
  });

  it("calls onClick", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Save</Button>);
    await user.click(screen.getByRole("button", { name: "Save" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("supports disabled state", () => {
    render(<Button disabled>Save</Button>);
    expect(screen.getByRole("button", { name: "Save" })).toBeDisabled();
  });

  it("supports loading state", () => {
    render(<Button loading>Save</Button>);
    const button = screen.getByRole("button", { name: "Save" });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
  });

  it("does not call onClick while loading", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button loading onClick={onClick}>
        Save
      </Button>,
    );
    await user.click(screen.getByRole("button", { name: "Save" }));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("renders icon correctly", () => {
    render(
      <Button icon={<FaSave data-testid="save-icon" size={16} />}>Save</Button>,
    );
    expect(screen.getByRole("button", { name: "Save" })).toContainElement(
      screen.getByTestId("save-icon"),
    );
  });

  it("renders icon on the right when iconPosition is 'right'", () => {
    render(
      <Button
        icon={<FaSave data-testid="save-icon" size={16} />}
        iconPosition="right"
      >
        Save
      </Button>,
    );
    const button = screen.getByRole("button", { name: "Save" });
    const icon = screen.getByTestId("save-icon");
    expect(button.lastElementChild).toContainElement(icon);
  });

  it("renders icon on the left when iconPosition is 'left'", () => {
    render(
      <Button
        icon={<FaSave data-testid="save-icon" size={16} />}
        iconPosition="left"
      >
        Save
      </Button>,
    );
    const button = screen.getByRole("button", { name: "Save" });
    const icon = screen.getByTestId("save-icon");
    expect(button.firstElementChild).toContainElement(icon);
  });
});
