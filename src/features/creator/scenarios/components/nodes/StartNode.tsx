"use client";

import { cn } from "@/lib/utils";
import { Handle, Position } from "@xyflow/react";
import { useTranslations } from "next-intl";
import React from "react";

export const StartNode: React.FC = () => {
  const t = useTranslations("creatorScenarios");

  return (
    <div className="flex cursor-grab flex-col items-center active:cursor-grabbing">
      <div className="rounded-full bg-emerald-500 px-4 py-1 text-[11px] font-bold tracking-wider text-white uppercase shadow-md">
        {t("builder.nodes.start")}
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        className={cn(
          "!h-3.5 !w-3.5 !rounded-sm !border-2 !border-emerald-600 !bg-white !shadow-sm transition-transform hover:!scale-110",
        )}
      />
    </div>
  );
};
