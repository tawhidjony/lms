import { ComponentPropsWithoutRef, ReactNode, Ref } from "react";
import {
  DefaultValues,
  FieldValues,
  Path,
  PathValue,
  SetValueConfig,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";
import { z, ZodType } from "zod";

export type TInput<TSchema extends ZodType> = z.input<TSchema>;
export type TOutput<TSchema extends ZodType> = z.output<TSchema>;

export type TUiFormRef<T extends FieldValues> = {
  getValues: UseFormReturn<T>["getValues"];
  reset: UseFormReturn<T>["reset"];
  setValue: <K extends Path<T>>(
    name: K,
    value: PathValue<T, K>,
    options?: SetValueConfig,
  ) => void;
  onClear: () => void;
  setError: UseFormReturn<T>["setError"];
  trigger: UseFormReturn<T>["trigger"];
};

export type TFormHandlerSubmit<T extends ZodType> = SubmitHandler<TOutput<T>>;

export type TUiFormProps<TSchema extends ZodType<FieldValues>> = {
  schema: TSchema;
  defaultValues?: DefaultValues<TInput<TSchema>>;
  onSubmit: TFormHandlerSubmit<TSchema>;
  children: ReactNode;
  ref?: Ref<TUiFormRef<TInput<TSchema>>>;
} & Omit<ComponentPropsWithoutRef<"form">, "onSubmit">;
