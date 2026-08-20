import { Select } from "@/components/ui";
import React from "react";
import {
  Controller,
  type FieldValues,
  Path,
  useFormContext,
} from "react-hook-form";
import { FormItem } from "../form-item";
import { FormLabel } from "../form-label";
import { FormMessage } from "../form-message";

type FormSelectProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  id: string;
  options: { label: string; value: string | number }[];
  label?: string;
  placeholder?: string;
  required?: boolean;
} & Omit<React.ComponentPropsWithoutRef<"select">, "name" | "id" | "required">;

export function FormSelect<TFieldValues extends FieldValues = FieldValues>(
  props: FormSelectProps<TFieldValues>,
) {
  const { name, id, label, options, placeholder, required, ...rest } = props;
  const { control } = useFormContext<TFieldValues>();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        return (
          <FormItem>
            {label && (
              <FormLabel htmlFor={name}>
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
              </FormLabel>
            )}
            <Select
              id={id}
              aria-invalid={fieldState.invalid && "true"}
              {...field}
              {...rest}
            >
              <option value="">{placeholder}</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
            {fieldState.error && (
              <FormMessage>{fieldState.error.message}</FormMessage>
            )}
          </FormItem>
        );
      }}
    />
  );
}

FormSelect.displayName = "FormSelect";
