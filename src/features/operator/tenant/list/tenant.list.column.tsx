"use client";

import { Button, Modal, TModalRef } from "@/components/ui";
import { tableFeaturesType } from "@/components/UiTable/table";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { createColumnHelper } from "@tanstack/react-table";
import { useRef } from "react";
import { Tenant } from "../types/tenant.types";

// Translator and translation removed

const badgeClassName =
  "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium";

function getPlanBadgeClass(plan: string) {
  switch (plan.toLowerCase()) {
    case "enterprise":
      return "border-violet-200 bg-violet-50 text-violet-700";
    case "professional":
      return "border-blue-200 bg-blue-50 text-blue-700";
    case "trial":
      return "border-amber-200 bg-amber-50 text-amber-700";
    default:
      return "border-slate-200 bg-slate-100 text-slate-600";
  }
}

function getStatusBadgeClass(status: string) {
  switch (status.toLowerCase()) {
    case "active":
      return "border-green-200 bg-green-50 text-green-700";
    case "trial":
      return "border-amber-200 bg-amber-50 text-amber-700";
    case "suspended":
      return "border-red-200 bg-red-50 text-red-700";
    case "inactive":
      return "border-slate-200 bg-slate-100 text-slate-600";
    default:
      return "border-slate-200 bg-slate-100 text-slate-600";
  }
}

function getPlanLabel(plan: string) {
  switch (plan.toLowerCase()) {
    case "enterprise":
      return "Enterprise";
    case "professional":
      return "Professional";
    case "trial":
      return "Trial";
    default:
      return plan;
  }
}

function getStatusLabel(status: string) {
  switch (status.toLowerCase()) {
    case "active":
      return "Active";
    case "trial":
      return "Trial";
    case "suspended":
      return "Suspended";
    case "inactive":
      return "Inactive";
    default:
      return status;
  }
}

function ChangeTenantStatusModal(tenantId: string, status: string) {
  const modalRef = useRef<TModalRef | null>(null);
  return (
    <Modal modalRef={modalRef} title="Update Status" open={true}>
      <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6">
        <h3 className="font-semibold text-slate-800 mb-2">Update Status</h3>
        <p className="text-sm text-slate-600 mb-1">
          <span id="statusTenantName" className="font-medium text-slate-800" />
        </p>
        <p className="text-xs text-slate-500 mb-4">
          Current status: <span id="statusCurrentBadge" />
        </p>
        <label className="text-xs font-medium text-slate-600">New Status</label>
        <select
          id="statusNewSelect"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1 mb-4"
        >
          <option value="active">Active</option>
          <option value="trial">Trial</option>
          <option value="suspended">Suspended</option>
          <option value="inactive">Inactive</option>
        </select>
        <div className="flex gap-2 justify-end">
          <button
            data-close-modal="tenantStatusModal"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            id="tenantStatusSave"
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Update
          </button>
        </div>
      </div>
    </Modal>
  );
}

const TenantListColumns = () => {
  const columnHelper = createColumnHelper<typeof tableFeaturesType, Tenant>();
  return columnHelper.columns([
    columnHelper.accessor("name", {
      id: "company",
      header: "Company",
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-blue-700 text-xs font-bold text-white">
            {row.original.initials}
          </span>
          <div>
            <Link
              href={{
                pathname: "/operator/tenant/detail",
                query: { id: row.original.id },
              }}
              className="text-sm font-medium text-slate-800 hover:text-blue-600"
            >
              {row.original.name}
            </Link>
            <div className="text-[11px] text-slate-400">
              {row.original.nameJa}
            </div>
          </div>
        </div>
      ),
    }),
    columnHelper.accessor("tenantId", {
      header: "Tenant ID",
      cell: ({ getValue }) => (
        <span className="font-mono text-sm text-slate-600">{getValue()}</span>
      ),
    }),
    columnHelper.accessor("users", {
      header: "Users",
      cell: ({ getValue }) => <span className="text-sm">{getValue()}</span>,
    }),
    columnHelper.accessor("courses", {
      header: "Courses",
      cell: ({ getValue }) => <span className="text-sm">{getValue()}</span>,
    }),
    columnHelper.accessor("plan", {
      header: "Plan",
      cell: ({ getValue }) => {
        const plan = getValue();
        return (
          <span className={cn(badgeClassName, getPlanBadgeClass(plan))}>
            {getPlanLabel(plan)}
          </span>
        );
      },
    }),
    columnHelper.accessor("expiryDate", {
      header: "Expiry",
      cell: ({ getValue }) => (
        <span className="text-sm text-slate-600">{getValue()}</span>
      ),
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: ({ getValue }) => {
        const status = getValue();
        return (
          <span className={cn(badgeClassName, getStatusBadgeClass(status))}>
            {getStatusLabel(status)}
          </span>
        );
      },
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="px-1 py-2 text-xs"
              data-tenant-edit={row.original.id}
            >
              Edit
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="px-1 py-2 text-xs"
              onClick={() =>
                ChangeTenantStatusModal(row.original.id, row.original.status)
              }
            >
              Status
            </Button>
            <Link
              href={{
                pathname: "/operator/tenant/detail",
                query: { id: row.original.id },
              }}
              className="text-xs text-blue-600 hover:underline"
            >
              Detail
            </Link>
          </div>
        );
      },
    }),
  ]);
};

export const tenantListColumns = TenantListColumns();
