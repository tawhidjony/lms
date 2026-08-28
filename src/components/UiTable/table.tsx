"use client";

import { cn } from "@/lib/utils";
import {
  ColumnDef,
  createSortedRowModel,
  RowData,
  rowSortingFeature,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const thClassName =
  "px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200";

const tdClassName = "px-4 py-3 border-b border-slate-100";

type TUiTableComponentProps<T extends RowData> = {
  data: T[];
  columns: ColumnDef<typeof tableFeaturesType, T>[];
  id?: string;
  className?: string;
};

export const tableFeaturesType = tableFeatures({
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
});

export function UiTableComponent<T extends RowData>({
  data,
  columns,
  id,
  className,
}: TUiTableComponentProps<T>) {
  const table = useTable({
    features: tableFeaturesType,
    columns,
    data,
  });

  return (
    <div className={cn("overflow-x-auto", className)}>
      <Table id={id} className="min-w-full text-sm">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  colSpan={header.colSpan}
                  className={thClassName}
                >
                  {header.isPlaceholder ? null : (
                    <table.FlexRender header={header} />
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} className="transition hover:bg-slate-50/60">
              {row.getAllCells().map((cell) => (
                <TableCell key={cell.id} className={tdClassName}>
                  <table.FlexRender cell={cell} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
