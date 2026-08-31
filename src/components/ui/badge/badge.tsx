import { cn } from "@/lib/utils";

type BadgeVariant = "solid" | "outline";
type BadgeColor =
  "primary" | "purple" | "danger" | "yellow" | "green" | "neutral";

type BadgeSize = "xs" | "sm" | "md" | "lg";

export type BadgeProps = {
  title: string;
  variant?: BadgeVariant;
  color?: BadgeColor;
  size?: BadgeSize;
};

const baseColorClasses: Record<
  BadgeColor,
  { solid: string; outline: string; ghost?: string }
> = {
  primary: {
    solid: "bg-blue-600 text-white",
    outline: "border-blue-200 bg-blue-50 text-blue-700",
  },
  purple: {
    solid: "bg-purple-600 text-white",
    outline: "border-violet-200 bg-violet-50 text-violet-700",
  },
  yellow: {
    solid: "bg-amber-600 text-white",
    outline: " border-amber-200 bg-amber-50 text-amber-700",
  },
  green: {
    solid: "bg-green-600 text-white",
    outline: "border-green-200 bg-green-50 text-green-700",
  },
  danger: {
    solid: "bg-red-600 text-white",
    outline: "border-red-200 bg-red-50 text-red-700",
  },
  neutral: {
    solid: "bg-gray-100 text-gray-800",
    outline: "border-gray-200 bg-gray-50 text-gray-700",
  },
};

const sizeClasses: Record<BadgeSize, string> = {
  xs: "px-2 py-0.5 text-xs font-medium",
  sm: "px-3 py-0.5 text-xs",
  md: "px-4 py-0.5 text-sm",
  lg: "px-6 py-0.5 text-base",
};

export function Badge({
  title,
  variant = "outline",
  color = "primary",
  size = "xs",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border",
        baseColorClasses[color][variant],
        sizeClasses[size],
      )}
    >
      {title}
    </span>
  );
}
