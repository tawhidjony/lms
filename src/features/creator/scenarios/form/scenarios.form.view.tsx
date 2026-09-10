"use client";

import { FormInput } from "@/components/form/fields/form-input";
import { FormSelect } from "@/components/form/fields/form-select";
import { FormTextarea } from "@/components/form/fields/form-textarea";
import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";

import { TScenarioFormSchemaInput } from "./scenarios.form.schema";

type ScenarioFormViewProps = {
  onCancel?: () => void;
};

export default function ScenarioFormView({ onCancel }: ScenarioFormViewProps) {
  const t = useTranslations("creatorScenarios");

  return (
    <>
      <div className="grid gap-3 text-sm sm:grid-cols-2">
        <div className="sm:col-span-2">
          <FormInput<TScenarioFormSchemaInput>
            name="title"
            id="scenarioFormTitle"
            label={t("form.title")}
            placeholder={t("form.titlePlaceholder")}
            required
          />
        </div>

        <div className="sm:col-span-2">
          <FormTextarea<TScenarioFormSchemaInput>
            name="description"
            id="scenarioFormDescription"
            label={t("form.description")}
            placeholder={t("form.descriptionPlaceholder")}
            rows={3}
          />
        </div>

        <div>
          <FormInput<TScenarioFormSchemaInput>
            name="category"
            id="scenarioFormCategory"
            label={t("form.category")}
            placeholder={t("form.categoryPlaceholder")}
            required
          />
        </div>

        <div>
          <FormSelect<TScenarioFormSchemaInput>
            name="difficulty"
            id="scenarioFormDifficulty"
            label={t("form.difficulty")}
            placeholder={t("form.difficultyPlaceholder")}
            options={[
              { label: t("difficulty.beginner"), value: "beginner" },
              { label: t("difficulty.intermediate"), value: "intermediate" },
              { label: t("difficulty.advanced"), value: "advanced" },
            ]}
            required
          />
        </div>

        <div>
          <FormInput<TScenarioFormSchemaInput>
            name="steps"
            id="scenarioFormSteps"
            type="number"
            min={0}
            label={t("form.steps")}
          />
        </div>

        <div>
          <FormSelect<TScenarioFormSchemaInput>
            name="status"
            id="scenarioFormStatus"
            label={t("form.status")}
            placeholder={t("form.statusPlaceholder")}
            options={[
              { label: t("status.draft"), value: "draft" },
              { label: t("status.published"), value: "published" },
              { label: t("status.archived"), value: "archived" },
            ]}
            required
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          color="neutral"
          onClick={onCancel}
        >
          {t("form.cancel")}
        </Button>
        <Button type="submit" id="scenarioFormSave">
          {t("form.save")}
        </Button>
      </div>
    </>
  );
}
