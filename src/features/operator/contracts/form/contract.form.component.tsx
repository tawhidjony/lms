"use client";

import { UiForm } from "@/components/form";
import type { TUiFormRef } from "@/components/form/ui-form.types";
import type { TModalRef } from "@/components/ui";
import { tenantApi } from "@/features/operator/tenant/api/tenant.api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useMessages, useTranslations } from "next-intl";
import { useRef } from "react";

import { contractApi } from "../api/contract.api";
import { contractKeys } from "../api/contract.keys";
import {
  createContractFormSchema,
  type TContractFormSchemaInput,
  type TContractFormSchemaOutput,
} from "./contract.form.schema";
import { contractFormDefaultValues } from "./contract.form.type";
import ContractFormView from "./contract.form.view";

type ContractFormComponentProps = {
  modalRef: React.RefObject<TModalRef | null>;
  contractId?: string;
  listQueryKey?: (string | number)[];
};

export default function ContractFormComponent({
  modalRef,
  contractId,
  listQueryKey,
}: ContractFormComponentProps) {
  const isEdit = Boolean(contractId);
  const messages = useMessages();
  const schema = createContractFormSchema(messages);
  const formRef = useRef<TUiFormRef<TContractFormSchemaInput>>(null);
  const queryClient = useQueryClient();
  const t = useTranslations("operatorContracts");
  const tCommon = useTranslations("Common");

  const { data: contractData, isPending, isError } = useQuery({
    queryKey: [...contractKeys.detail(contractId ?? "")],
    queryFn: () => contractApi.getContract(contractId as string),
    enabled: isEdit,
  });

  const { data: tenantsData, isPending: isTenantsLoading } = useQuery({
    queryKey: ["tenants", "select"],
    queryFn: () => tenantApi.getAllTenants({ page: 0, limit: 100 }),
  });

  const tenantOptions =
    tenantsData?.data.map((tenant) => ({
      label: tenant.name,
      value: tenant.id,
    })) ?? [];

  const onSubmit = async (
    data: TContractFormSchemaOutput,
  ): Promise<void> => {
    if (isEdit && contractId) {
      await contractApi.updateContract(contractId, data);
    } else {
      await contractApi.createContract(data);
    }

    if (listQueryKey) {
      await queryClient.invalidateQueries({ queryKey: listQueryKey });
    } else {
      await queryClient.invalidateQueries({ queryKey: contractKeys.lists() });
    }

    modalRef.current?.modalClose();
  };

  if (isEdit && isPending) {
    return <div className="text-sm text-slate-500">{tCommon("loading")}</div>;
  }

  if (isEdit && isError) {
    return <div className="text-sm text-red-500">{t("list.error")}</div>;
  }

  const defaultValues: TContractFormSchemaInput = contractData
    ? {
        tenantId: contractData.tenantId,
        plan: contractData.plan,
        status: contractData.status,
        maxUsers: contractData.maxUsers,
        activeUsers: contractData.activeUsers,
        contractStart: contractData.contractStart,
        contractEnd: contractData.contractEnd,
        amount: contractData.amount,
        currency: contractData.currency,
      }
    : contractFormDefaultValues;

  return (
    <UiForm<TContractFormSchemaInput, TContractFormSchemaOutput>
      key={contractId ?? "new"}
      schema={schema}
      defaultValues={defaultValues}
      onSubmit={onSubmit}
      ref={formRef}
    >
      <ContractFormView
        isEdit={isEdit}
        tenantOptions={tenantOptions}
        isTenantsLoading={isTenantsLoading}
        onCancel={() => modalRef.current?.modalClose()}
      />
    </UiForm>
  );
}
