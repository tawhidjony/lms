import * as React from "react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type ButtonVariant = "solid" | "outline" | "ghost";
type ButtonColor = "primary" | "secondary" | "danger" | "neutral";
type ButtonSize = "sm" | "md" | "lg";

type LinkProps = React.ComponentProps<typeof Link>;

export interface ButtonLinkProps extends Omit<LinkProps, "className"> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

const baseColorClasses: Record<
  ButtonColor,
  { solid: string; outline: string; ghost: string }
> = {
  primary: {
    solid: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline:
      "bg-transparent text-blue-700 hover:bg-blue-50 border border-blue-500 focus:ring-blue-500",
    ghost: "bg-transparent text-blue-700 hover:bg-blue-50 focus:ring-blue-500",
  },
  secondary: {
    solid: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400",
    outline:
      "bg-transparent text-gray-700 hover:bg-gray-100 border border-gray-300 focus:ring-gray-400",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
  },
  danger: {
    solid: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    outline:
      "bg-transparent text-red-700 hover:bg-red-50 border border-red-500 focus:ring-red-500",
    ghost: "bg-transparent text-red-700 hover:bg-red-50 focus:ring-red-500",
  },
  neutral: {
    solid: "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400",
    outline:
      "bg-transparent text-gray-700 hover:bg-gray-100 border border-gray-300 focus:ring-gray-400",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
  },
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-xs px-2.5 py-1",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-6 text-base",
};

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      className,
      variant = "solid",
      color = "primary",
      size = "sm",
      loading = false,
      disabled,
      children,
      icon,
      iconPosition = "left",
      onClick,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;
    const renderIcon = icon && !loading;

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (isDisabled) {
        event.preventDefault();
        return;
      }
      onClick?.(event);
    };

    return (
      <Link
        ref={ref}
        aria-disabled={isDisabled || undefined}
        aria-busy={loading || undefined}
        tabIndex={isDisabled ? -1 : undefined}
        onClick={handleClick}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-md font-medium cursor-pointer  ",
          "outline-none transition-colors",
          "focus:ring-0 focus:ring-offset-0",
          isDisabled && "pointer-events-none cursor-not-allowed opacity-60",
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
      </Link>
    );
  },
);

ButtonLink.displayName = "ButtonLink";

export { ButtonLink };
