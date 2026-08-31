import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormProvider, useForm } from "react-hook-form";
import { describe, expect, it } from "vitest";
import z from "zod";
import { UiForm } from "../../ui-form";
import { FormInput } from "../form-input";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
});

type TestFormValues = z.input<typeof schema>;

function TestForm() {
  return (
    <UiForm
      schema={schema}
      onSubmit={(data) => {
        // console.log(data);
      }}
      defaultValues={{ name: "" }}
    >
      <FormInput<TestFormValues>
        name="name"
        label="Name"
        placeholder="Enter name"
      />
    </UiForm>
  );
}

function DisabledTestForm() {
  const methods = useForm<TestFormValues>({
    defaultValues: { name: "" },
  });

  return (
    <FormProvider {...methods}>
      <form>
        <FormInput<TestFormValues> name="name" label="Name" disabled />
      </form>
    </FormProvider>
  );
}

describe("FormInput", () => {
  it("renders label and input", () => {
    render(<TestForm />);
    expect(screen.getByRole("textbox", { name: "Name" })).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter name")).toBeInTheDocument();
  });

  it("registers input with react-hook-form", async () => {
    const user = userEvent.setup();
    render(<TestForm />);
    const input = screen.getByRole("textbox", { name: "Name" });
    await user.type(input, "Tawhid");
    expect(input).toHaveValue("Tawhid");
  });

  it("shows required indicator", () => {
    render(
      <UiForm schema={schema} defaultValues={{ name: "" }} onSubmit={() => {}}>
        <FormInput<TestFormValues> name="name" label="Name" required />
      </UiForm>,
    );
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("supports disabled state", () => {
    render(<DisabledTestForm />);
    expect(screen.getByRole("textbox", { name: "Name" })).toBeDisabled();
  });
});
