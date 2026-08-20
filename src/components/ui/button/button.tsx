import * as React from "react";

import { cn } from "@/lib/utils";

// Define color and variant types
type ButtonVariant = "solid" | "outline" | "ghost";
type ButtonColor = "primary" | "secondary" | "danger" | "neutral";

type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
    loading?: boolean;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
}

const baseColorClasses: Record<ButtonColor, { solid: string; outline: string; ghost: string }> = {
    primary: {
        solid: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        outline: "bg-transparent text-blue-700 hover:bg-blue-50 border border-blue-500 focus:ring-blue-500",
        ghost: "bg-transparent text-blue-700 hover:bg-blue-50 focus:ring-blue-500",
    },
    secondary: {
        solid: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400",
        outline: "bg-transparent text-gray-700 hover:bg-gray-100 border border-gray-300 focus:ring-gray-400",
        ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
    },
    danger: {
        solid: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
        outline: "bg-transparent text-red-700 hover:bg-red-50 border border-red-500 focus:ring-red-500",
        ghost: "bg-transparent text-red-700 hover:bg-red-50 focus:ring-red-500",
    },
    neutral: {
        solid: "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400",
        outline: "bg-transparent text-gray-700 hover:bg-gray-100 border border-gray-300 focus:ring-gray-400",
        ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
    },
};

const sizeClasses: Record<ButtonSize, string> = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 text-sm",
    lg: "h-11 px-6 text-base",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = "solid",
            color = "primary",
            size = "md",
            loading = false,
            disabled,
            children,
            type = "button",
            icon,
            iconPosition = "left",
            ...props
        },
        ref,
    ) => {
        const isDisabled = disabled || loading;
        const renderIcon = icon && !loading; // Don't show user icon if loading spinner is showing

        return (
            <button
                ref={ref}
                type={type}
                disabled={isDisabled}
                aria-busy={loading || undefined}
                className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-md font-medium",
                    "outline-none transition-colors",
                    "focus:ring-2 focus:ring-offset-2",
                    "disabled:cursor-not-allowed disabled:opacity-60",
                    baseColorClasses[color][variant],
                    sizeClasses[size],
                    className,
                )}
                {...props}
            >
                {loading && (
                    <span
                        aria-hidden="true"
                        className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
                    />
                )}
                {renderIcon && iconPosition === "left" && (
                    <span className="inline-flex items-center">{icon}</span>
                )}
                {children}
                {renderIcon && iconPosition === "right" && (
                    <span className="inline-flex items-center">{icon}</span>
                )}
            </button>
        );
    },
);

Button.displayName = "Button";

export {
    Button,
    type ButtonSize,
    type ButtonVariant,
    type ButtonColor,
};