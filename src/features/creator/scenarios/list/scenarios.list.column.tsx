"use client";

import { Badge, Button, ButtonLink, Modal, TModalRef } from "@/components/ui";
import { tableFeaturesType } from "@/components/UiTable/table";
import { Link } from "@/i18n/navigation";
import { createColumnHelper } from "@tanstack/react-table";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { Scenario } from "../types/scenarios.types";

function ScenarioEdit(scenarioEdited: Scenario) {
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
            {scenarioEdited.title}
          </h3>
          <p className="text-xs text-slate-500 mb-4">
            Current status:{" "}
            <span className="font-medium text-slate-800">
              {scenarioEdited.status}
            </span>
          </p>
          <label className="text-xs font-medium text-slate-600">
            New Status
          </label>
          <select
            id="statusNewSelect"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1 mb-4"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>
          <div className="flex gap-2 justify-end">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => modalRef.current?.modalClose()}
            >
              Cancel
            </button>
            <button
              id="scenarioStatusSave"
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

function ScenarioStatus(scenarioStatus: Scenario) {
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
            {scenarioStatus.title}
          </h3>
          <p className="text-xs text-slate-500 mb-4">
            Current status:{" "}
            <span className="font-medium text-slate-800">
              {scenarioStatus.status}
            </span>
          </p>
          <label className="text-xs font-medium text-slate-600">
            New Status
          </label>
          <select
            id="statusNewSelect"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1 mb-4"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>
          <div className="flex gap-2 justify-end">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => modalRef.current?.modalClose()}
            >
              Cancel
            </button>
            <button
              id="scenarioStatusSave"
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

const ScenarioDetail = ({ scenarioId }: { scenarioId: string }) => {
  const t = useTranslations();
  return (
    <ButtonLink
      href={`/creator/scenarios/${scenarioId}`}
      variant="outline"
      color="neutral"
      size="sm"
    >
      {t("Common.detail")}
    </ButtonLink>
  );
};

const ScenariosListColumns = () => {
  const columnHelper = createColumnHelper<typeof tableFeaturesType, Scenario>();
  return columnHelper.columns([
    columnHelper.accessor("title", {
      id: "title",
      header: "Title",
      cell: ({ row }) => (
        <div>
          <Link
            href={`/creator/scenarios/${row.original.id}`}
            className="text-sm font-medium text-slate-800 hover:text-blue-600"
          >
            {row.original.title}
          </Link>
          <div className="text-[11px] text-slate-400 line-clamp-1">
            {row.original.description}
          </div>
        </div>
      ),
    }),
    columnHelper.accessor("category", {
      header: "Category",
      cell: ({ getValue }) => (
        <span className="text-sm text-slate-600">{getValue()}</span>
      ),
    }),
    columnHelper.accessor("difficulty", {
      header: "Difficulty",
      cell: ({ getValue }) => {
        const difficulty = getValue();
        return (
          <Badge
            title={difficulty}
            color={
              difficulty === "advanced"
                ? "danger"
                : difficulty === "intermediate"
                  ? "yellow"
                  : "primary"
            }
          />
        );
      },
    }),
    columnHelper.accessor("steps", {
      header: "Steps",
      cell: ({ getValue }) => <span className="text-sm">{getValue()}</span>,
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: ({ getValue }) => {
        const status = getValue();
        return (
          <Badge
            title={status}
            color={
              status === "published"
                ? "green"
                : status === "draft"
                  ? "yellow"
                  : "neutral"
            }
          />
        );
      },
    }),
    columnHelper.accessor("updatedAt", {
      header: "Updated",
      cell: ({ getValue }) => (
        <span className="text-sm text-slate-600">{getValue()}</span>
      ),
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-2">
            <ScenarioEdit {...row.original} />
            <ScenarioStatus {...row.original} />
            <ScenarioDetail scenarioId={row.original.id as string} />
          </div>
        );
      },
    }),
  ]);
};

export const scenariosListColumns = ScenariosListColumns();
