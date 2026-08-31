"use client";

import { Badge, ButtonLink } from "@/components/ui";
import { tableFeaturesType } from "@/components/UiTable/table";
import { createColumnHelper } from "@tanstack/react-table";
import { useTranslations } from "next-intl";
import type { Package } from "../types/package.types";

function PackageEditLink({ packageId }: { packageId: string }) {
  const t = useTranslations("operatorPackages");

  return (
    <ButtonLink
      href={`/operator/packages/${packageId}/edit`}
      variant="outline"
      color="primary"
      size="sm"
    >
      {t("edit")}
    </ButtonLink>
  );
}

export const packageListColumns = (t: ReturnType<typeof useTranslations>) => {
  const columnHelper = createColumnHelper<typeof tableFeaturesType, Package>();
  return columnHelper.columns([
    columnHelper.accessor("name", {
      id: "package",
      header: t("columns.package"),
      cell: ({ getValue }) => {
        const name = getValue();
        return <Badge title={name} color="primary" />;
      },
    }),
    columnHelper.accessor("monthlyPrice", {
      header: t("columns.monthly"),
      cell: ({ getValue }) => (
        <span className="text-sm font-medium">{getValue()}</span>
      ),
    }),
    columnHelper.accessor("yearlyPrice", {
      header: t("columns.yearly"),
      cell: ({ getValue }) => (
        <span className="text-sm text-slate-600">{getValue()}</span>
      ),
    }),
    columnHelper.accessor("seats", {
      header: t("columns.seats"),
      cell: ({ getValue }) => <span className="text-sm">{getValue()}</span>,
    }),
    columnHelper.accessor("tenantCount", {
      header: t("columns.tenants"),
      cell: ({ getValue }) => <span className="text-sm">{getValue()}</span>,
    }),
    columnHelper.accessor("status", {
      header: t("columns.status"),
      cell: ({ getValue }) => {
        const status = getValue();
        return (
          <Badge
            title={status}
            color={status === "active" ? "green" : "danger"}
          />
        );
      },
    }),
    columnHelper.display({
      id: "actions",
      header: t("columns.actions"),
      cell: ({ row }) => <PackageEditLink packageId={row.original.id} />,
    }),
  ]);
};
