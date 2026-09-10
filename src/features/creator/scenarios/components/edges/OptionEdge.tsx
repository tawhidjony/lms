import React from 'react';
import { EdgeProps, EdgeLabelRenderer } from '@xyflow/react';

export const OptionEdge: React.FC<EdgeProps> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  style = {},
  label,
}) => {
  // প্যারেন্ট নোডের হ্যান্ডেল থেকে ৪৫ পিক্সেল নিচে লাইনটি সমানভাবে ডানে/বামে বাঁক নেবে
  const midY = sourceY + 45;

  // একটি নিখুঁত অর্গানাইজেশনাল টি-শেপ ব্র্যাঞ্চিং পাথ তৈরি
  const edgePath = `M ${sourceX} ${sourceY} L ${sourceX} ${midY} L ${targetX} ${midY} L ${targetX} ${targetY}`;

  return (
    <>
      <path
        id={id}
        style={{ stroke: '#3b82f6', strokeWidth: 1.5, ...style }}
        className="react-flow__edge-path"
        d={edgePath}
      />
      {label && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${targetX}px, ${targetY - 18}px)`,
              pointerEvents: 'all',
            }}
            className="nodrag nopan z-10"
          >
            <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center shadow-md border-2 border-white">
              {label}
            </span>
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
};