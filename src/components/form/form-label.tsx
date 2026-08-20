"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export type FormLabelProps = React.ComponentPropsWithoutRef<"label"> & {
  required?: boolean;
};

export function FormLabel({
  required,
  className,
  children,
  ...props
}: FormLabelProps) {
  return (
    <label
      className={cn("block text-xs font-medium text-slate-600 mb-1", className)}
      {...props}
    >
      {children}

      {required && (
        <span aria-hidden="true" className="ml-1 text-red-500">
          *
        </span>
      )}
    </label>
  );
}

FormLabel.displayName = "FormLabel";
