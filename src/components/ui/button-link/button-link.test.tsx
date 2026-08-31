import * as React from "react";

import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { describe, expect, it, vi } from "vitest";

import { FaSave } from "react-icons/fa";
import { ButtonLink } from "./button-link";

vi.mock("@/i18n/navigation", () => ({
  Link: React.forwardRef<
    HTMLAnchorElement,
    React.ComponentPropsWithoutRef<"a"> & { href: string }
  >(function MockLink({ href, children, ...props }, ref) {
    return (
      <a ref={ref} href={href} {...props}>
        {children}
      </a>
    );
  }),
}));

describe("ButtonLink", () => {
  it("renders correctly", () => {
    render(
      <ButtonLink href="/operator/tenant">Save</ButtonLink>,
    );
    expect(screen.getByRole("link", { name: "Save" })).toBeInTheDocument();
  });

  it("sets href", () => {
    render(
      <ButtonLink href="/operator/tenant">Save</ButtonLink>,
    );
    expect(screen.getByRole("link", { name: "Save" })).toHaveAttribute(
      "href",
      "/operator/tenant",
    );
  });

  it("calls onClick", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <ButtonLink href="/operator/tenant" onClick={onClick}>
        Save
      </ButtonLink>,
    );
    await user.click(screen.getByRole("link", { name: "Save" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("supports disabled state", () => {
    render(
      <ButtonLink href="/operator/tenant" disabled>
        Save
      </ButtonLink>,
    );
    expect(screen.getByRole("link", { name: "Save" })).toHaveAttribute(
      "aria-disabled",
      "true",
    );
  });

  it("does not call onClick when disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <ButtonLink href="/operator/tenant" disabled onClick={onClick}>
        Save
      </ButtonLink>,
    );
    await user.click(screen.getByRole("link", { name: "Save" }));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("supports loading state", () => {
    render(
      <ButtonLink href="/operator/tenant" loading>
        Save
      </ButtonLink>,
    );
    const link = screen.getByRole("link", { name: "Save" });
    expect(link).toHaveAttribute("aria-disabled", "true");
    expect(link).toHaveAttribute("aria-busy", "true");
  });

  it("does not call onClick while loading", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <ButtonLink href="/operator/tenant" loading onClick={onClick}>
        Save
      </ButtonLink>,
    );
    await user.click(screen.getByRole("link", { name: "Save" }));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("renders icon correctly", () => {
    render(
      <ButtonLink
        href="/operator/tenant"
        icon={<FaSave data-testid="save-icon" size={16} />}
      >
        Save
      </ButtonLink>,
    );
    expect(screen.getByRole("link", { name: "Save" })).toContainElement(
      screen.getByTestId("save-icon"),
    );
  });

  it("renders icon on the right when iconPosition is 'right'", () => {
    render(
      <ButtonLink
        href="/operator/tenant"
        icon={<FaSave data-testid="save-icon" size={16} />}
        iconPosition="right"
      >
        Save
      </ButtonLink>,
    );
    const link = screen.getByRole("link", { name: "Save" });
    const icon = screen.getByTestId("save-icon");
    expect(link.lastElementChild).toContainElement(icon);
  });

  it("renders icon on the left when iconPosition is 'left'", () => {
    render(
      <ButtonLink
        href="/operator/tenant"
        icon={<FaSave data-testid="save-icon" size={16} />}
        iconPosition="left"
      >
        Save
      </ButtonLink>,
    );
    const link = screen.getByRole("link", { name: "Save" });
    const icon = screen.getByTestId("save-icon");
    expect(link.firstElementChild).toContainElement(icon);
  });
});
