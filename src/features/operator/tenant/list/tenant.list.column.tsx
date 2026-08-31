"use client";

import { Badge, Button, ButtonLink, Modal, TModalRef } from "@/components/ui";
import { tableFeaturesType } from "@/components/UiTable/table";
import { Link } from "@/i18n/navigation";
import { createColumnHelper } from "@tanstack/react-table";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { Tenant } from "../types/tenant.types";

function TenantEdit(tenantEdited: Tenant) {
  const t = useTranslations();
  const modalRef = useRef<TModalRef | null>(null);
  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => modalRef.current?.modalOpen()}
      >
        {t("Common.edit")}
      </Button>
      <Modal modalRef={modalRef} title="Update Status">
        <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6">
          <h3 className="font-semibold text-slate-800 mb-2">
            {tenantEdited.name}
          </h3>
          <p className="text-sm text-slate-600 mb-1">
            <span
              id="statusTenantName"
              className="font-medium text-slate-800"
            />
          </p>
          <p className="text-xs text-slate-500 mb-4">
            Current status: <span id="statusCurrentBadge" />
          </p>
          <label className="text-xs font-medium text-slate-600">
            New Status
          </label>
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
    </>
  );
}

function TenantStatus(tenantStatus: Tenant) {
  const t = useTranslations();
  const modalRef = useRef<TModalRef | null>(null);
  return (
    <>
      <Button
        type="button"
        variant="outline"
        color="neutral"
        size="sm"
        onClick={() => modalRef.current?.modalOpen()}
      >
        {t("Common.status")}
      </Button>
      <Modal modalRef={modalRef} title="Update Status">
        <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6">
          <h3 className="font-semibold text-slate-800 mb-2">
            {tenantStatus.name}
          </h3>
          <p className="text-sm text-slate-600 mb-1">
            <span
              id="statusTenantName"
              className="font-medium text-slate-800"
            />
          </p>
          <p className="text-xs text-slate-500 mb-4">
            Current status: <span id="statusCurrentBadge" />
          </p>
          <label className="text-xs font-medium text-slate-600">
            New Status
          </label>
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
    </>
  );
}

const TenantDetail = ({ tenantId }: { tenantId: string }) => {
  const t = useTranslations();
  return (
    <ButtonLink
      href={`/operator/tenants/${tenantId}`}
      variant="outline"
      color="neutral"
      size="sm"
    >
      {t("Common.detail")}
    </ButtonLink>
  );
};

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
          <>
            <Badge
              title={plan}
              color={
                plan.toLowerCase() === "enterprise"
                  ? "purple"
                  : plan.toLowerCase() === "professional"
                    ? "primary"
                    : "yellow"
              }
            />
          </>
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
        console.log(status);
        return (
          <Badge
            title={status}
            color={
              status === "有効"
                ? "green"
                : status === "トライアル"
                  ? "yellow"
                  : "danger"
            }
          />
          // <span className={cn(badgeClassName, getStatusBadgeClass(status))}>
          //   {getStatusLabel(status)}
          // </span>
        );
      },
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-2">
            <TenantEdit {...row.original} />
            <TenantStatus {...row.original} />
            <TenantDetail tenantId={row.original.id as string} />
          </div>
        );
      },
    }),
  ]);
};

export const tenantListColumns = TenantListColumns();
