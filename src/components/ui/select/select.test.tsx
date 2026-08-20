import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Select } from "./select";

describe("Select", () => {
  it("renders correctly", () => {
    render(
      <Select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Select>,
    );
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });
  it("accepts user input", async () => {
    const user = userEvent.setup();
    render(
      <Select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Select>,
    );
    const select = screen.getByRole("combobox");
    await user.selectOptions(select, "2");
    expect(select).toHaveValue("2");
  });
  it("supports disabled state", () => {
    render(
      <Select disabled>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Select>,
    );
  });
  it("supports aria-invalid", () => {
    render(
      <Select aria-invalid="true">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Select>,
    );
  });
  it("supports aria-label", () => {
    render(
      <Select aria-label="Select an option">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Select>,
    );
  });
  it("supports aria-describedby", () => {
    render(
      <Select aria-describedby="error-message">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Select>,
    );
  });
  it("supports aria-required", () => {
    render(
      <Select aria-required="true">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Select>,
    );
  });
  it("supports required state", () => {
    render(
      <Select required>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Select>,
    );
  });
});
