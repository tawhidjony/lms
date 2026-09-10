"use client";

import { FormInput } from "@/components/form/fields/form-input";
import { FormSelect } from "@/components/form/fields/form-select";
import { FormTextarea } from "@/components/form/fields/form-textarea";
import { Button } from "@/components/ui";

import { TScenarioFormSchemaInput } from "./scenarios.form.schema";

type ScenarioFormViewProps = {
  onCancel?: () => void;
};

export default function ScenarioFormView({ onCancel }: ScenarioFormViewProps) {
  return (
    <>
      <div className="grid gap-3 text-sm sm:grid-cols-2">
        <div className="sm:col-span-2">
          <FormInput<TScenarioFormSchemaInput>
            name="title"
            id="scenarioFormTitle"
            label="Title"
            placeholder="Scenario title"
            required
          />
        </div>

        <div className="sm:col-span-2">
          <FormTextarea<TScenarioFormSchemaInput>
            name="description"
            id="scenarioFormDescription"
            label="Description"
            placeholder="Describe the scenario"
            rows={3}
          />
        </div>

        <div>
          <FormInput<TScenarioFormSchemaInput>
            name="category"
            id="scenarioFormCategory"
            label="Category"
            placeholder="e.g. Safety"
            required
          />
        </div>

        <div>
          <FormSelect<TScenarioFormSchemaInput>
            name="difficulty"
            id="scenarioFormDifficulty"
            label="Difficulty"
            placeholder="Select difficulty"
            options={[
              { label: "Beginner", value: "beginner" },
              { label: "Intermediate", value: "intermediate" },
              { label: "Advanced", value: "advanced" },
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
            label="Steps"
          />
        </div>

        <div>
          <FormSelect<TScenarioFormSchemaInput>
            name="status"
            id="scenarioFormStatus"
            label="Status"
            placeholder="Select status"
            options={[
              { label: "Draft", value: "draft" },
              { label: "Published", value: "published" },
              { label: "Archived", value: "archived" },
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
          Cancel
        </Button>
        <Button type="submit" id="scenarioFormSave">
          Save
        </Button>
      </div>
    </>
  );
}
