import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Textarea } from "./textarea";

describe("Textarea", () => {
    it("renders correctly", () => {
        render(<Textarea aria-label="Question" placeholder="Enter question" />);
        const textarea = screen.getByRole("textbox", { name: "Question" });
        expect(textarea).toBeInTheDocument();
        expect(textarea).toHaveAttribute("placeholder", "Enter question");
    });

    it("accepts user input", async () => {
        const user = userEvent.setup();
        render(<Textarea aria-label="Question" />);
        const textarea = screen.getByRole("textbox", { name: "Question" });
        await user.type(textarea, "What is React Hook Form?");
        expect(textarea).toHaveValue("What is React Hook Form?");
    });

    it("supports disabled state", () => {
        render(<Textarea aria-label="Question" disabled />);
        expect(screen.getByRole("textbox", { name: "Question" })).toBeDisabled();
    });

    it("supports aria-invalid", () => {
        render(<Textarea aria-label="Question" aria-invalid="true" />);
        expect(screen.getByRole("textbox", { name: "Question" })).toHaveAttribute("aria-invalid", "true");
    });
});