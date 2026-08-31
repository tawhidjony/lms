import * as React from "react";

import { cn } from "@/lib/utils";

export type TableProps = React.TableHTMLAttributes<HTMLTableElement>;

export function Table({ children, className, ...props }: TableProps) {
  return (
    <table className={cn("overflow-x-auto", className)} {...props}>
      {children}
    </table>
  );
}

export function TableHeader({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement> & {
  children: React.ReactNode;
}) {
  return (
    <thead
      className={cn("bg-slate-50 border-b border-slate-200", className)}
      {...props}
    >
      {children}
    </thead>
  );
}

export function TableBody({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement> & {
  children: React.ReactNode;
}) {
  return (
    <tbody className={cn("bg-white", className)} {...props}>
      {children}
    </tbody>
  );
}

export function TableRow({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableRowElement> & { children: React.ReactNode }) {
  return (
    <tr className={cn("hover:bg-slate-50/60", className)} {...props}>
      {children}
    </tr>
  );
}

export function TableCell({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableCellElement> & { children: React.ReactNode }) {
  return (
    <td
      className={cn("px-4 py-3 border-b border-slate-100", className)}
      {...props}
    >
      {children}
    </td>
  );
}

export function TableHead({
  children,
  className,
  ...props
}: React.ThHTMLAttributes<HTMLTableCellElement> & {
  children?: React.ReactNode;
}) {
  return (
    <th
      className={cn(
        "px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200",
        className,
      )}
      {...props}
    >
      {children}
    </th>
  );
}
