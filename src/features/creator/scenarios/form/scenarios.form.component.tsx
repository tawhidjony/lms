"use client";

import { UiForm } from "@/components/form";
import { TUiFormRef } from "@/components/form/ui-form.types";
import { type TModalRef } from "@/components/ui";
import { useRef } from "react";

import {
  createScenarioFormSchema,
  TScenarioFormSchemaInput,
  TScenarioFormSchemaOutput,
} from "./scenarios.form.schema";
import { scenarioFormDefaultValues } from "./scenarios.form.type";
import ScenarioFormView from "./scenarios.form.view";

type ScenarioFormComponentProps = {
  modalRef: React.RefObject<TModalRef | null>;
};

export default function ScenarioFormComponent({
  modalRef,
}: ScenarioFormComponentProps) {
  const schema = createScenarioFormSchema();
  const formRef = useRef<TUiFormRef<TScenarioFormSchemaInput>>(null);

  const onSubmit = async (data: TScenarioFormSchemaOutput): Promise<void> => {
    void data;
    console.log(data);
  };

  return (
    <UiForm<TScenarioFormSchemaInput, TScenarioFormSchemaOutput>
      schema={schema}
      defaultValues={scenarioFormDefaultValues}
      onSubmit={onSubmit}
      ref={formRef}
    >
      <ScenarioFormView onCancel={() => modalRef.current?.modalClose()} />
    </UiForm>
  );
}
