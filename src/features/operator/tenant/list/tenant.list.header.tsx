"use client";
import { Button, Modal, TModalRef } from "@/components/ui";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import TenantFormComponent from "../form/tenant.form.component";

export default function TenantListHeader() {
  const modalRef = useRef<TModalRef | null>(null);
  const t = useTranslations("operatorTenant");
  return (
    <>
      <Modal modalRef={modalRef} title={t("form.addTitle")}>
        <TenantFormComponent modalRef={modalRef} />
      </Modal>
      <div className="flex flex-wrap justify-between items-start gap-3 mb-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">{t("title")}</h2>
          <p className="text-sm text-slate-500">
            {t("description")}{" "}
            <a href="packages.html" className="text-blue-600 hover:underline">
              {t("viewPackages")}
            </a>
          </p>
        </div>
        <Button id="btnAddTenant" onClick={() => modalRef.current?.modalOpen()}>
          {t("addTenant")}
        </Button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            {t("stats.total")}
          </div>
          <div
            className="text-2xl font-bold text-slate-900"
            id="tenantStatTotal"
          >
            12
          </div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            {t("stats.active")}
          </div>
          <div
            className="text-2xl font-bold text-slate-900"
            id="tenantStatActive"
          >
            8
          </div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            {t("stats.trial")}
          </div>
          <div
            className="text-2xl font-bold text-slate-900"
            id="tenantStatTrial"
          >
            2
          </div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            {t("stats.suspended")}
          </div>
          <div
            className="text-2xl font-bold text-slate-900"
            id="tenantStatSuspended"
          >
            2
          </div>
        </div>
      </div>
    </>
  );
}
