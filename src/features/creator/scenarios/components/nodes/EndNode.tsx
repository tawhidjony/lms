"use client";

import { cn } from "@/lib/utils";
import { Handle, Position } from "@xyflow/react";
import { useTranslations } from "next-intl";
import React from "react";

export const EndNode: React.FC = () => {
  const t = useTranslations("creatorScenarios");

  return (
    <div className="flex cursor-grab flex-col items-center active:cursor-grabbing">
      <Handle
        type="source"
        position={Position.Top}
        id="top"
        className={cn(
          "!h-3.5 !w-3.5 !rounded-sm !border-2 !border-slate-400 !bg-white !shadow-sm transition-transform hover:!scale-110",
        )}
      />
      <div className="rounded-full border-2 border-slate-300 bg-white px-3 py-0.5 text-[10px] font-bold text-slate-600 uppercase shadow-sm">
        {t("builder.nodes.end")}
      </div>
    </div>
  );
};
