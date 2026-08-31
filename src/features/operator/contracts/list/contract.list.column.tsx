"use client";

import {
  Badge,
  Button,
  ButtonLink,
  Modal,
  type TModalRef,
} from "@/components/ui";
import { tableFeaturesType } from "@/components/UiTable/table";
import { Link } from "@/i18n/navigation";
import { createColumnHelper } from "@tanstack/react-table";
import type { useTranslations } from "next-intl";
import { useRef } from "react";

import ContractFormComponent from "../form/contract.form.component";
import type { Contract } from "../types/contract.types";
import ContractStatusModal from "./contract.status.modal";

function ContractEditAction({
  contract,
  listQueryKey,
  t,
}: {
  contract: Contract;
  listQueryKey?: (string | number)[];
  t: ReturnType<typeof useTranslations>;
}) {
  const modalRef = useRef<TModalRef | null>(null);

  return (
    <>
      <Button
        type="button"
        variant="outline"
        color="primary"
        size="sm"
        onClick={() => modalRef.current?.modalOpen()}
      >
        {t("rowActions.edit")}
      </Button>
      <Modal modalRef={modalRef} title={t("form.editTitle")}>
        <ContractFormComponent
          modalRef={modalRef}
          contractId={contract.id}
          listQueryKey={listQueryKey}
        />
      </Modal>
    </>
  );
}

export const contractListColumns = (
  t: ReturnType<typeof useTranslations>,
  listQueryKey?: (string | number)[],
) => {
  const columnHelper = createColumnHelper<typeof tableFeaturesType, Contract>();

  return columnHelper.columns([
    columnHelper.accessor("tenantName", {
      id: "tenant",
      header: t("columns.tenant"),
      cell: ({ row }) => (
        <Link
          href={`/operator/tenants/${row.original.tenantId}`}
          className="text-sm font-medium text-slate-800 hover:text-blue-600"
        >
          {row.original.tenantName}
        </Link>
      ),
    }),
    columnHelper.accessor("plan", {
      header: t("columns.plan"),
      cell: ({ getValue }) => {
        const plan = getValue();
        return <Badge title={plan} color="primary" />;
      },
    }),
    columnHelper.accessor("maxUsers", {
      header: t("columns.seats"),
      cell: ({ getValue }) => <span className="text-sm">{getValue()}</span>,
    }),
    columnHelper.accessor("activeUsers", {
      header: t("columns.used"),
      cell: ({ getValue, row }) => {
        const activeUsers = getValue();
        const isOverage = activeUsers > row.original.maxUsers;
        return (
          <span
            className={`text-sm ${isOverage ? "font-medium text-red-600" : ""}`}
          >
            {activeUsers}
          </span>
        );
      },
    }),
    columnHelper.accessor("contractStart", {
      header: t("columns.start"),
      cell: ({ getValue }) => (
        <span className="text-sm text-slate-600">{getValue()}</span>
      ),
    }),
    columnHelper.accessor("contractEnd", {
      header: t("columns.renewal"),
      cell: ({ getValue }) => (
        <span className="text-sm text-slate-600">{getValue()}</span>
      ),
    }),
    columnHelper.accessor("amount", {
      header: t("columns.monthly"),
      cell: ({ getValue }) => (
        <span className="text-sm font-medium">{getValue()}</span>
      ),
    }),
    columnHelper.accessor("status", {
      header: t("columns.status"),
      cell: ({ getValue }) => {
        const status = getValue();
        return <Badge title={status} color="neutral" />;
      },
    }),
    columnHelper.display({
      id: "actions",
      header: t("columns.actions"),
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <ContractEditAction
            contract={row.original}
            listQueryKey={listQueryKey}
            t={t}
          />
          <ContractStatusModal
            contract={row.original}
            listQueryKey={listQueryKey}
          />
          <ButtonLink
            href={`/operator/tenants/${row.original.tenantId}`}
            variant="outline"
            color="neutral"
            size="sm"
          >
            {t("rowActions.tenant")}
          </ButtonLink>
        </div>
      ),
    }),
  ]);
};
