import React from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';
import { VideoStepNodeData } from '@/types/scenario';

export const VideoStepNode: React.FC<NodeProps> = ({ data, selected }) => {
  const nodeData = data as VideoStepNodeData;

  return (
    <div
      className={`w-[290px] bg-white rounded-xl transition-all font-sans text-xs relative ${
        selected
          ? 'border-2 border-blue-500 shadow-lg ring-2 ring-blue-100'
          : 'border border-gray-300 shadow-sm hover:border-gray-400'
      }`}
    >
      {/* Target Handle (Top) */}
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-blue-600 !w-2.5 !h-2.5 !border-2 !border-white -top-1.5"
      />

      {/* Header */}
      <div className="p-3 pb-2 flex items-center gap-2 border-b border-gray-100">
        <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[11px] shrink-0">
          {nodeData.stepNumber}
        </span>
        <h3 className="font-bold text-gray-800 text-xs truncate">{nodeData.title}</h3>
      </div>

      {/* Metadata */}
      <div className="px-3 py-1.5 bg-gray-50/50 text-[10px] text-gray-500 flex justify-between border-b border-gray-100">
        <span>長さ: {nodeData.length || '2:00'}</span>
        <span>分岐タイミング: {nodeData.branchingTiming || '1:00'}</span>
      </div>

      {/* Content */}
      <div className="p-3">
        <div className="bg-gray-50 border border-gray-200 rounded p-2 mb-2">
          <span className="text-[9px] font-bold text-gray-400 block mb-0.5">質問</span>
          <p className="text-gray-700 font-medium text-[11px]">{nodeData.question}</p>
        </div>

        {/* Options List */}
        <div className="space-y-1.5 mb-3">
          {nodeData.options && nodeData.options.length > 0 ? (
            nodeData.options.map((option, idx) => (
              <div
                key={option.id}
                className="bg-blue-50/60 border border-blue-100 rounded p-2 text-gray-700"
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[9px]">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-[11px] font-medium">{option.answerText}</span>
                </div>
                {option.nextStepId && (
                  <span className="text-[9px] text-gray-400 block ml-5">
                    → ステップ {option.nextStepId}
                  </span>
                )}
              </div>
            ))
          ) : (
            <p className="text-[10px] text-gray-400 italic">回答選択肢がまだありません</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 pt-2 border-t border-gray-100">
          <button className="flex-1 py-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 rounded text-[11px]">
            編集
          </button>
          <button className="flex-1 py-1 bg-white border border-red-200 hover:bg-red-50 text-red-500 rounded text-[11px]">
            削除
          </button>
        </div>
      </div>

      {/* Single Bottom Source Handle for Org-chart tree */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-blue-600 !w-2.5 !h-2.5 !border-2 !border-white -bottom-1.5"
      />
    </div>
  );
};