"use client";

import { Node } from "@xyflow/react";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { VideoStepNodeData } from "../scenario/scenario.type";
import {
  ScenarioStepDefaults,
  useScenarioStore,
} from "../store/useScenarioStore";

interface Props {
  node: Node;
  onClose: () => void;
  stepDefaults: ScenarioStepDefaults;
}

export const StepEditSidebar: React.FC<Props> = ({
  node,
  onClose,
  stepDefaults,
}) => {
  const t = useTranslations("creatorScenarios");
  const {
    updateNodeData,
    addOptionToNode,
    removeOptionFromNode,
    updateOptionText,
  } = useScenarioStore();
  const data = node.data as VideoStepNodeData;

  const [title, setTitle] = useState(data.title || "");
  const [videoUrl, setVideoUrl] = useState(
    data.videoUrl || "videos/new-step.mp4",
  );
  const [length, setLength] = useState(data.length || "2:00");
  const [branchingTiming, setBranchingTiming] = useState(
    data.branchingTiming || "1:00",
  );
  const [question, setQuestion] = useState(data.question || "");

  useEffect(() => {
    if (data) {
      setTitle(data.title || "");
      setVideoUrl(data.videoUrl || "videos/new-step.mp4");
      setLength(data.length || "2:00");
      setBranchingTiming(data.branchingTiming || "1:00");
      setQuestion(data.question || "");
    }
  }, [node.id, data]);

  const handleSave = () => {
    updateNodeData(node.id, {
      title,
      videoUrl,
      length,
      branchingTiming,
      question,
    });
  };

  return (
    <div className="w-80 h-full bg-white border-l border-gray-200 shadow-xl flex flex-col z-20">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="font-bold text-sm text-gray-800">
          {t("builder.sidebar.title")}
        </h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 text-lg font-bold"
        >
          ✕
        </button>
      </div>

      <div className="p-4 flex-1 overflow-y-auto space-y-4 text-xs">
        <div>
          <label className="block text-gray-600 font-medium mb-1">
            {t("builder.sidebar.videoTitle")}
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-1">
            {t("builder.sidebar.videoUrl")}
          </label>
          <input
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              {t("builder.sidebar.length")}
            </label>
            <input
              type="text"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              {t("builder.sidebar.branchingTiming")}
            </label>
            <input
              type="text"
              value={branchingTiming}
              onChange={(e) => setBranchingTiming(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-1">
            {t("builder.sidebar.question")}
          </label>
          <textarea
            rows={2}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none resize-none"
          />
        </div>

        <div className="pt-2 border-t border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-gray-700">
              {t("builder.sidebar.answerOptions")}
            </span>
            <button
              onClick={() => addOptionToNode(node.id, stepDefaults)}
              className="text-blue-600 hover:text-blue-700 font-semibold text-[11px]"
            >
              {t("builder.sidebar.addOption")}
            </button>
          </div>

          <div className="space-y-3">
            {data.options && data.options.length > 0 ? (
              data.options.map((opt, idx) => {
                const optionLetter = String.fromCharCode(65 + idx);
                return (
                  <div
                    key={opt.id}
                    className="p-3 bg-gray-50 border border-gray-200 rounded-lg space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-600">
                        {t("builder.sidebar.optionLetter", {
                          letter: optionLetter,
                        })}
                      </span>
                      <button
                        onClick={() => removeOptionFromNode(node.id, opt.id)}
                        className="text-red-500 hover:text-red-700 text-[11px] font-medium"
                      >
                        {t("builder.sidebar.delete")}
                      </button>
                    </div>

                    <div>
                      <label className="block text-gray-500 text-[10px] mb-1">
                        {t("builder.sidebar.answerText")}
                      </label>
                      <input
                        type="text"
                        value={opt.answerText}
                        onChange={(e) =>
                          updateOptionText(node.id, opt.id, e.target.value)
                        }
                        className="w-full p-1.5 bg-white border border-gray-300 rounded outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-500 text-[10px] mb-1">
                        {t("builder.sidebar.nextStep")}
                      </label>
                      <div className="p-1.5 bg-white border border-gray-200 rounded text-gray-600 text-[11px]">
                        {t("builder.sidebar.nextStepValue", {
                          id: opt.nextStepId ?? "",
                        })}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-gray-400 italic text-[11px]">
                {t("builder.sidebar.noOptions")}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 flex gap-2 bg-gray-50">
        <button
          onClick={handleSave}
          className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium text-xs transition-colors"
        >
          {t("builder.sidebar.apply")}
        </button>
        <button
          onClick={onClose}
          className="px-3 py-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-600 rounded font-medium text-xs transition-colors"
        >
          {t("builder.sidebar.close")}
        </button>
      </div>
    </div>
  );
};
