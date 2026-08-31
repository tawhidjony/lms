"use client";

import { Button, Modal, type TModalRef } from "@/components/ui";
import { useTranslations } from "next-intl";
import { useRef } from "react";

import ContractFormComponent from "../form/contract.form.component";

type ContractListHeaderProps = {
  listQueryKey?: (string | number)[];
};

export default function ContractListHeader({
  listQueryKey,
}: ContractListHeaderProps) {
  const modalRef = useRef<TModalRef | null>(null);
  const t = useTranslations("operatorContracts");

  const handleExportCsv = () => {
    void t("exportCsvDemo");
  };

  return (
    <>
      <Modal modalRef={modalRef} title={t("form.addTitle")}>
        <ContractFormComponent
          modalRef={modalRef}
          listQueryKey={listQueryKey}
        />
      </Modal>
      <div className="flex flex-wrap justify-between items-start gap-3 mb-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">{t("title")}</h2>
          <p className="text-sm text-slate-500">{t("description")}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            color="neutral"
            data-demo-save={t("exportCsvDemo")}
            onClick={handleExportCsv}
          >
            {t("exportCsv")}
          </Button>
          <Button id="btnAddContract" onClick={() => modalRef.current?.modalOpen()}>
            {t("addContract")}
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            {t("stats.activeContracts")}
          </div>
          <div
            className="text-2xl font-bold text-slate-900"
            id="contractStatActive"
          >
            8
          </div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            {t("stats.monthlyRevenue")}
          </div>
          <div
            className="text-2xl font-bold text-slate-900"
            id="contractStatMrr"
          >
            ¥2.8M
          </div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            {t("stats.seatOverage")}
          </div>
          <div
            className="text-2xl font-bold text-red-600"
            id="contractStatOverage"
          >
            3
          </div>
        </div>
      </div>
    </>
  );
}
