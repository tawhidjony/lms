"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export type FormItemProps = React.ComponentPropsWithoutRef<"div">;

export function FormItem({ className, ...props }: FormItemProps) {
  return <div className={cn("mb-3", className)} {...props} />;
}

FormItem.displayName = "FormItem";
