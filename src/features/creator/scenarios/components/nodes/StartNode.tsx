import React from 'react';
import { Handle, Position } from '@xyflow/react';

export const StartNode: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-emerald-500 text-white text-[11px] font-bold px-4 py-1 rounded-full shadow-md uppercase tracking-wider">
        START
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-emerald-600 !w-3 !h-3 !border-2 !border-white"
      />
    </div>
  );
};