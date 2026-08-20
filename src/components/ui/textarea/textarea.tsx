import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.ComponentPropsWithoutRef<"textarea"> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
    return (
        <textarea
            ref={ref}
            className={cn(
                "flex min-h-24 w-full resize-y rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900",
                "placeholder:text-gray-400",
                "outline-none",
                "transition-colors",
                "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
                "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-60",
                "aria-invalid:border-red-500 aria-invalid:ring-2 aria-invalid:ring-red-500/20",
                className,
            )}
            {...props}
        />
    );
});

Textarea.displayName = "Textarea";

export { Textarea };