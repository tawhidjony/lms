import { Button } from "@/components/ui";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import z from "zod";
import { UiForm } from "../../ui-form";
import { FormSelect } from "../form-select";

const schema = z.object({
  question: z.string().min(1, "Question is required"),
});

type TestFormValues = z.input<typeof schema>;

const TestForm = () => {
  return (
    <UiForm
      schema={schema}
      defaultValues={{ question: "" }}
      onSubmit={() => {}}
    >
      <FormSelect<TestFormValues>
        name="question"
        label="Question"
        placeholder="Enter question"
        required
        id="question"
        options={[{ label: "Question", value: "question" }]}
      />
      <Button type="submit">Submit</Button>
    </UiForm>
  );
};

describe("FormSelect", () => {
  it("renders select with label", () => {
    render(<TestForm />);
    expect(
      screen.getByRole("combobox", { name: "Question" }),
    ).toBeInTheDocument();
  });

  it("renders options", () => {
    render(<TestForm />);
    expect(
      screen.getByRole("option", { name: "Question" }),
    ).toBeInTheDocument();
  });

  it("renders form required indicator", () => {
    render(<TestForm />);
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("renders form error message on submit", async () => {
    const user = userEvent.setup();
    render(<TestForm />);
    await user.click(screen.getByRole("button", { name: "Submit" }));
    expect(await screen.findByText("Question is required")).toBeInTheDocument();
  });
});
