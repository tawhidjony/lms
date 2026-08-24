import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";

import { Switch } from "./switch";

describe("Switch", () => {
    it("renders correctly", () => {
        render(<Switch aria-label="Notifications" />);
        expect(
            screen.getByRole("switch", { name: "Notifications" }),
        ).toBeInTheDocument();
    });

    it("uses button type by default", () => {
        render(<Switch aria-label="Notifications" />);
        expect(
            screen.getByRole("switch", { name: "Notifications" }),
        ).toHaveAttribute("type", "button");
    });

    it("defaults to unchecked", () => {
        render(<Switch aria-label="Notifications" />);
        expect(
            screen.getByRole("switch", { name: "Notifications" }),
        ).toHaveAttribute("aria-checked", "false");
    });

    it("supports checked state", () => {
        render(<Switch aria-label="Notifications" checked />);
        expect(
            screen.getByRole("switch", { name: "Notifications" }),
        ).toHaveAttribute("aria-checked", "true");
    });

    it("calls onCheckedChange with toggled value", async () => {
        const user = userEvent.setup();
        const onCheckedChange = vi.fn();
        render(
            <Switch
                aria-label="Notifications"
                checked={false}
                onCheckedChange={onCheckedChange}
            />,
        );

        await user.click(
            screen.getByRole("switch", { name: "Notifications" }),
        );

        expect(onCheckedChange).toHaveBeenCalledTimes(1);
        expect(onCheckedChange).toHaveBeenCalledWith(true);
    });

    it("calls onCheckedChange with false when turning off", async () => {
        const user = userEvent.setup();
        const onCheckedChange = vi.fn();
        render(
            <Switch
                aria-label="Notifications"
                checked
                onCheckedChange={onCheckedChange}
            />,
        );

        await user.click(
            screen.getByRole("switch", { name: "Notifications" }),
        );

        expect(onCheckedChange).toHaveBeenCalledWith(false);
    });

    it("supports disabled state", () => {
        render(<Switch aria-label="Notifications" disabled />);
        expect(
            screen.getByRole("switch", { name: "Notifications" }),
        ).toBeDisabled();
    });

    it("does not call onCheckedChange while disabled", async () => {
        const user = userEvent.setup();
        const onCheckedChange = vi.fn();
        render(
            <Switch
                aria-label="Notifications"
                disabled
                onCheckedChange={onCheckedChange}
            />,
        );

        await user.click(
            screen.getByRole("switch", { name: "Notifications" }),
        );

        expect(onCheckedChange).not.toHaveBeenCalled();
    });

    it("forwards className", () => {
        render(
            <Switch aria-label="Notifications" className="custom-switch" />,
        );
        expect(
            screen.getByRole("switch", { name: "Notifications" }),
        ).toHaveClass("custom-switch");
    });

    it("forwards ref", () => {
        const ref = createRef<HTMLButtonElement>();
        render(<Switch aria-label="Notifications" ref={ref} />);
        expect(ref.current).toBeInstanceOf(HTMLButtonElement);
        expect(ref.current).toHaveAttribute("role", "switch");
    });
});
