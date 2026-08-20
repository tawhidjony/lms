import { render, screen, } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, } from "vitest";
import { Input, } from "@/components/ui/input";

describe("Input", () => {
    it("renders correctly", () => {
        render(<Input aria-label="Name" placeholder="Enter name" />);
        const input = screen.getByRole("textbox", { name: "Name" });
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("placeholder", "Enter name");
    });

    it("accepts user input", async () => {
        const user = userEvent.setup();
        render(<Input aria-label="Name" />);
        const input = screen.getByRole("textbox", { name: "Name" });        
        await user.type(input, "Tawhid");
        expect(input).toHaveValue("Tawhid");
    });

    it("supports disabled state", () => {
        render(<Input aria-label="Name" disabled />);
        expect(screen.getByRole("textbox", { name: "Name" })).toBeDisabled();
    });

    it("supports aria-invalid", () => {
        render(<Input aria-label="Name" aria-invalid="true" />);
        expect(screen.getByRole("textbox", { name: "Name" })).toHaveAttribute("aria-invalid", "true");
    });
});