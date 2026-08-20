import { cn } from "@/lib/utils";
import React from "react";

export interface SelectProps extends React.ComponentPropsWithoutRef<"select"> {
  ariaInvalid?: "true" | "false";
  children?: React.ReactNode;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "w-full rounded-md border border-slate-300 px-3 py-2 text-sm mb-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
          "aria-invalid:border-red-500 aria-invalid:ring-2 aria-invalid:ring-red-500/20",
          className,
        )}
        {...rest}
      >
        {children}
      </select>
    );
  },
);

Select.displayName = "Select";

export { Select };
