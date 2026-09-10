"use client";

import { Button, Modal, TModalRef } from "@/components/ui";
import { useRef } from "react";
import ScenarioFormComponent from "../form/scenarios.form.component";

export default function ScenariosListHeader() {
  const modalRef = useRef<TModalRef | null>(null);

  return (
    <>
      <Modal modalRef={modalRef} title="Add Scenario">
        <ScenarioFormComponent modalRef={modalRef} />
      </Modal>
      <div className="flex flex-wrap justify-between items-start gap-3 mb-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">Scenarios</h2>
          <p className="text-sm text-slate-500">
            Manage interactive training scenarios for courses.
          </p>
        </div>
        <Button
          id="btnAddScenario"
          onClick={() => modalRef.current?.modalOpen()}
        >
          Add Scenario
        </Button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">Total</div>
          <div
            className="text-2xl font-bold text-slate-900"
            id="scenarioStatTotal"
          >
            12
          </div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            Published
          </div>
          <div
            className="text-2xl font-bold text-slate-900"
            id="scenarioStatPublished"
          >
            8
          </div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">Draft</div>
          <div
            className="text-2xl font-bold text-slate-900"
            id="scenarioStatDraft"
          >
            3
          </div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            Archived
          </div>
          <div
            className="text-2xl font-bold text-slate-900"
            id="scenarioStatArchived"
          >
            1
          </div>
        </div>
      </div>
    </>
  );
}
