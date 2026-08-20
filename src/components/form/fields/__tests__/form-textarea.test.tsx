import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormProvider, useForm } from "react-hook-form";
import { describe, expect, it } from "vitest";
import { FormTextarea } from "../form-textarea";

type TestFormValues = {
    question: string;
};

function TestForm() {
    const methods = useForm<TestFormValues>({
        defaultValues: {
            question: "",
        },
    });

    return (
        <FormProvider {...methods}>
            <FormTextarea<TestFormValues>
                name="question"
                label="Question"
                placeholder="Enter question"
                required
            />
        </FormProvider>
    );
}

function DisabledTestForm() {
    const methods = useForm<TestFormValues>();

    return (
        <FormProvider {...methods}>
            <FormTextarea<TestFormValues>
                name="question"
                label="Question"
                disabled
            />
        </FormProvider>
    );
}

describe("FormTextarea", () => {
    it("renders textarea with label", () => {
        render(<TestForm />);
        expect(screen.getByRole("textbox", { name: "Question" })).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Enter question")).toBeInTheDocument();
    });

    it("registers textarea with react-hook-form", async () => {
        const user = userEvent.setup();
        render(<TestForm />);
        const textarea = screen.getByRole("textbox", { name: "Question" });
        await user.type(textarea, "What is React?");
        expect(textarea).toHaveValue("What is React?");
    });

    it("renders required indicator", () => {
        render(<TestForm />);
        expect(screen.getByText("*")).toBeInTheDocument();
    });

    it("supports helper text", () => {
        function HelperTestForm() {
            const methods = useForm<TestFormValues>();

            return (
                <FormProvider {...methods}>
                    <FormTextarea<TestFormValues>
                        name="question"
                        label="Question"
                        helperText="Maximum 500 characters"
                    />
                </FormProvider>
            );
        }

        render(<HelperTestForm />);
        expect(screen.getByText("Maximum 500 characters")).toBeInTheDocument();
    });

    it("supports disabled state", () => {
        render(<DisabledTestForm />);
        expect(screen.getByLabelText("Question")).toBeDisabled();
    });
});