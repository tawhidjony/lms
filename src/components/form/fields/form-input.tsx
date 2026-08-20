"use client";
import * as React from "react";
import {
  get,
  useFormContext,
  type FieldValues,
  type Path,
} from "react-hook-form";

import { cn } from "@/lib/utils";

export type FormInputProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  label?: string;
  required?: boolean;
  helperText?: string;
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
} & Omit<React.ComponentPropsWithoutRef<"input">, "name">;

export function FormInput<TFieldValues extends FieldValues>({
  name,
  label,
  required,
  helperText,
  containerClassName,
  labelClassName,
  errorClassName,
  id,
  className,
  ...inputProps
}: FormInputProps<TFieldValues>) {
  const {
    register,
    formState: { errors },
  } = useFormContext<TFieldValues>();

  console.log(errors);

  const inputId = id ?? String(name);
  const error = get(errors, name);

  const errorMessage =
    error &&
    typeof error === "object" &&
    "message" in error &&
    typeof error.message === "string"
      ? error.message
      : undefined;

  return (
    <div className={cn("space-y-1.5", containerClassName)}>
      {label && (
        <label
          htmlFor={inputId}
          className={cn(
            "block text-sm font-medium text-gray-700",
            labelClassName,
          )}
        >
          {label}
          {required && (
            <span aria-hidden="true" className="ml-1 text-red-500">
              *
            </span>
          )}
        </label>
      )}

      <input
        id={inputId}
        aria-invalid={errorMessage ? "true" : "false"}
        aria-describedby={
          errorMessage
            ? `${inputId}-error`
            : helperText
              ? `${inputId}-description`
              : undefined
        }
        className={cn(
          "block w-full rounded-lg border bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition",
          "placeholder:text-gray-400",
          "focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20",
          "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500",
          "border-gray-300",
          errorMessage &&
            "border-red-500 focus:border-red-500 focus:ring-red-500/20",
          className,
        )}
        {...inputProps}
        {...register(name)}
      />

      {helperText && !errorMessage && (
        <p id={`${inputId}-description`} className="text-xs text-gray-500">
          {helperText}
        </p>
      )}

      {errorMessage && (
        <p
          id={`${inputId}-error`}
          role="alert"
          className={cn("text-sm text-red-600", errorClassName)}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}

FormInput.displayName = "FormInput";
