"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export type FormMessageProps = React.ComponentPropsWithoutRef<"p"> & {
  children?: React.ReactNode;
};

export function FormMessage({
  children,
  className,
  ...props
}: FormMessageProps) {
  if (!children) {
    return null;
  }

  return (
    <p
      role="alert"
      className={cn("text-sm text-red-600", className)}
      {...props}
    >
      {children}
    </p>
  );
}

FormMessage.displayName = "FormMessage";
