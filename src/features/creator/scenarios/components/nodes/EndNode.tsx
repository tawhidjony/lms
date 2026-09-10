import React from 'react';
import { Handle, Position } from '@xyflow/react';

export const EndNode: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-gray-400 !w-3 !h-3 !border-2 !border-white"
      />
      <div className="bg-white border-2 border-gray-300 text-gray-600 text-[10px] font-bold px-3 py-0.5 rounded-full shadow-sm uppercase">
        END
      </div>
    </div>
  );
};