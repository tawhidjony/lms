import { Input } from "@/components/ui/input/input";
import React from "react";
import {
  Controller,
  type FieldValues,
  Path,
  useFormContext,
} from "react-hook-form";

type FormInputProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  label: string;
} & Omit<React.ComponentPropsWithoutRef<"input">, "name">;

export function FormInput<TFieldValues extends FieldValues = FieldValues>(
  props: FormInputProps<TFieldValues>,
) {
  const { name, label, ...rest } = props;
  const { control } = useFormContext<TFieldValues>();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        return (
          <div className="flex flex-col">
            <label htmlFor={name} className="mb-1 font-medium">
              {label}
            </label>
            <Input
              id={name}
              aria-invalid={fieldState.invalid ? "true" : "false"}
              {...field}
              {...rest}
            />
            {fieldState.error && (
              <span className="text-red-500 text-sm mt-1">
                {fieldState.error.message}
              </span>
            )}
          </div>
        );
      }}
    />
  );
}
