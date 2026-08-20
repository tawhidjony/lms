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
import * as z from "zod";

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

export type TUiFormProps<
  TInput extends FieldValues,
  TOutput extends FieldValues,
> = {
  schema: z.ZodType<TOutput, TInput>;
  defaultValues?: DefaultValues<TInput>;
  onSubmit: SubmitHandler<TOutput>;
  children: ReactNode;
  ref?: Ref<TUiFormRef<TInput>>;
} & Omit<ComponentPropsWithoutRef<"form">, "onSubmit">;
