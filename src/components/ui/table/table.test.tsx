import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

function renderSampleTable() {
  return render(
    <Table aria-label="Users">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Alice</TableCell>
          <TableCell>alice@example.com</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob</TableCell>
          <TableCell>bob@example.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>,
  );
}

describe("Table", () => {
  it("renders table content passed as children", () => {
    renderSampleTable();

    expect(screen.getByRole("table", { name: "Users" })).toBeInTheDocument();
  });
});

describe("TableHeader", () => {
  it("renders column headers", () => {
    renderSampleTable();

    expect(
      screen.getByRole("columnheader", { name: "Name" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "Email" }),
    ).toBeInTheDocument();
  });
});

describe("TableBody", () => {
  it("renders body rows", () => {
    renderSampleTable();

    expect(screen.getAllByRole("row")).toHaveLength(3);
    expect(screen.getByRole("cell", { name: "Alice" })).toBeInTheDocument();
    expect(
      screen.getByRole("cell", { name: "bob@example.com" }),
    ).toBeInTheDocument();
  });
});

describe("TableRow", () => {
  it("groups cells within a row", () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <TableCell>First</TableCell>
            <TableCell>Second</TableCell>
          </TableRow>
        </tbody>
      </table>,
    );

    const row = screen.getByRole("row");
    expect(row).toHaveTextContent("First");
    expect(row).toHaveTextContent("Second");
  });
});

describe("TableHead", () => {
  it("renders header cell content", () => {
    render(
      <table>
        <thead>
          <tr>
            <TableHead>Status</TableHead>
          </tr>
        </thead>
      </table>,
    );

    expect(
      screen.getByRole("columnheader", { name: "Status" }),
    ).toBeInTheDocument();
  });
});

describe("TableCell", () => {
  it("renders cell content", () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Active</TableCell>
          </tr>
        </tbody>
      </table>,
    );

    expect(screen.getByRole("cell", { name: "Active" })).toBeInTheDocument();
  });
});

describe("Table composition", () => {
  it("renders a complete accessible table structure", () => {
    renderSampleTable();

    expect(screen.getByRole("table", { name: "Users" })).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "Name" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "Email" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "Alice" })).toBeInTheDocument();
    expect(
      screen.getByRole("cell", { name: "alice@example.com" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "Bob" })).toBeInTheDocument();
    expect(
      screen.getByRole("cell", { name: "bob@example.com" }),
    ).toBeInTheDocument();
  });
});
