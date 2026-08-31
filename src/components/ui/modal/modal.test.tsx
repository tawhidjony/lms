import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef, useRef } from "react";
import { describe, expect, it, vi } from "vitest";

import { Modal, type TModalRef } from "./modal";

type TestHarnessProps = {
  onClose?: () => void;
  showCloseButton?: boolean;
  description?: string;
};

function TestHarness({
  onClose,
  showCloseButton = true,
  description,
}: TestHarnessProps) {
  const modalRef = useRef<TModalRef>(null);

  return (
    <>
      <button type="button" onClick={() => modalRef.current?.modalOpen()}>
        Open modal
      </button>
      <button type="button" onClick={() => modalRef.current?.modalClose()}>
        Close modal
      </button>
      <button type="button" onClick={() => modalRef.current?.modalToggle()}>
        Toggle modal
      </button>
      <Modal
        modalRef={modalRef}
        title="Add tenant"
        description={description}
        showCloseButton={showCloseButton}
        closeLabel="Close"
        onClose={onClose}
      >
        <p>Modal body content</p>
      </Modal>
    </>
  );
}

describe("Modal", () => {
  it("does not show dialog content while closed", () => {
    render(<TestHarness />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("opens via modalRef.modalOpen()", async () => {
    const user = userEvent.setup();
    render(<TestHarness />);

    await user.click(screen.getByRole("button", { name: "Open modal" }));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Add tenant" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Modal body content")).toBeInTheDocument();
  });

  it("closes via modalRef.modalClose()", async () => {
    const user = userEvent.setup();
    render(<TestHarness />);

    await user.click(screen.getByRole("button", { name: "Open modal" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Close modal" }));

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("toggles visibility via modalRef.modalToggle()", async () => {
    const modalRef = createRef<TModalRef>();

    render(
      <Modal modalRef={modalRef} title="Add tenant">
        <p>Modal body content</p>
      </Modal>,
    );

    await waitFor(() => expect(modalRef.current).not.toBeNull());

    await act(async () => {
      modalRef.current?.modalToggle();
    });
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    await act(async () => {
      modalRef.current?.modalToggle();
    });
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("calls onClose and closes when the close button is clicked", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<TestHarness onClose={onClose} />);

    await user.click(screen.getByRole("button", { name: "Open modal" }));
    await user.click(screen.getByRole("button", { name: "Close" }));

    expect(onClose).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("renders description when provided", async () => {
    const user = userEvent.setup();
    render(<TestHarness description="Update tenant details" />);

    await user.click(screen.getByRole("button", { name: "Open modal" }));

    expect(screen.getByText("Update tenant details")).toBeInTheDocument();
  });

  it("hides the close button when showCloseButton is false", async () => {
    const user = userEvent.setup();
    render(<TestHarness showCloseButton={false} />);

    await user.click(screen.getByRole("button", { name: "Open modal" }));

    expect(
      screen.queryByRole("button", { name: "Close" }),
    ).not.toBeInTheDocument();
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
