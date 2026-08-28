"use client";

import { UiForm } from "@/components/form";
import { TUiFormRef } from "@/components/form/ui-form.types";
import { useMessages } from "next-intl";
import { useRef } from "react";

import { type TModalRef } from "@/components/ui";
import {
  createTenantFormSchema,
  TTenantFormSchemaInput,
  TTenantFormSchemaOutput,
} from "./tenant.form.schema";
import { tenantFormDefaultValues } from "./tenant.form.type";
import TenantFormView from "./tenant.form.view";

type TenantFormComponentProps = {
  modalRef: React.RefObject<TModalRef | null>;
};

export default function TenantFormComponent({
  modalRef,
}: TenantFormComponentProps) {
  const messages = useMessages();
  const schema = createTenantFormSchema(messages);
  const formRef = useRef<TUiFormRef<TTenantFormSchemaInput>>(null);

  const onSubmit = async (data: TTenantFormSchemaOutput): Promise<void> => {
    void data;
    // formRef.current?.reset();
    // modalRef.current?.modalClose();
    console.log(data);
  };

  return (
    <UiForm<TTenantFormSchemaInput, TTenantFormSchemaOutput>
      schema={schema}
      defaultValues={tenantFormDefaultValues}
      onSubmit={onSubmit}
      ref={formRef}
    >
      <TenantFormView onCancel={() => modalRef.current?.modalClose()} />
    </UiForm>
  );
}
