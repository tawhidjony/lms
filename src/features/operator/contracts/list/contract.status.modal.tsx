"use client";

import { Button, Modal, type TModalRef } from "@/components/ui";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

import { contractApi } from "../api/contract.api";
import { contractKeys } from "../api/contract.keys";
import type { Contract, ContractStatus } from "../types/contract.types";

type ContractStatusModalProps = {
  contract: Contract;
  listQueryKey?: (string | number)[];
};

export default function ContractStatusModal({
  contract,
  listQueryKey,
}: ContractStatusModalProps) {
  const t = useTranslations("operatorContracts");
  const modalRef = useRef<TModalRef | null>(null);
  const queryClient = useQueryClient();
  const [status, setStatus] = useState<ContractStatus>(contract.status);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleUpdate = async () => {
    setIsSubmitting(true);
    try {
      await contractApi.updateContract(contract.id, { status });
      if (listQueryKey) {
        await queryClient.invalidateQueries({ queryKey: listQueryKey });
      } else {
        await queryClient.invalidateQueries({ queryKey: contractKeys.lists() });
      }
      modalRef.current?.modalClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Button
        type="button"
        variant="outline"
        color="neutral"
        size="sm"
        onClick={() => {
          setStatus(contract.status);
          modalRef.current?.modalOpen();
        }}
      >
        {t("rowActions.status")}
      </Button>
      <Modal modalRef={modalRef} title={t("statusModal.title")} size="sm">
        <p className="mb-1 text-sm text-slate-600">
          <span className="font-medium text-slate-800">
            {contract.tenantName}
          </span>
        </p>
        <p className="mb-4 text-xs text-slate-500">
          {t("statusModal.current")} <span>{contract.status}</span>
        </p>
        <label className="text-xs font-medium text-slate-600">
          {t("statusModal.newStatus")}
        </label>
        <select
          id="contractStatusSelect"
          value={status}
          onChange={(event) => setStatus(event.target.value as ContractStatus)}
          className="mt-1 mb-4 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="valid">{t("statusModal.statusOptions.valid")}</option>
          <option value="trial">{t("statusModal.statusOptions.trial")}</option>
          <option value="suspended">
            {t("statusModal.statusOptions.suspended")}
          </option>
          <option value="expired">
            {t("statusModal.statusOptions.expired")}
          </option>
        </select>
        <div className="flex justify-end gap-2">
          <Button
            type="button"
            variant="outline"
            color="neutral"
            onClick={() => modalRef.current?.modalClose()}
          >
            {t("statusModal.cancel")}
          </Button>
          <Button
            id="contractStatusSave"
            type="button"
            loading={isSubmitting}
            onClick={handleUpdate}
          >
            {t("statusModal.update")}
          </Button>
        </div>
      </Modal>
    </>
  );
}
