"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useImperativeHandle } from "react";
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  Path,
  PathValue,
  SetValueConfig,
  useForm,
} from "react-hook-form";
import { ZodType } from "zod";
import { type TInput, type TOutput, type TUiFormProps } from "./ui-form.types";

export const UiForm = <TSchema extends ZodType<FieldValues>>({
  ref,
  defaultValues,
  schema,
  onSubmit,
  children,
  ...formProps
}: TUiFormProps<TSchema>) => {
  const methods = useForm<TInput<TSchema>, unknown, TOutput<TSchema>>({
    defaultValues: defaultValues as DefaultValues<TInput<TSchema>>,
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onClear = () => methods.reset();

  useImperativeHandle(ref, () => ({
    getValues: methods.getValues,
    reset: methods.reset,
    setValue: <K extends Path<TInput<TSchema>>>(
      name: K,
      value: PathValue<TInput<TSchema>, K>,
      options?: SetValueConfig,
    ) => methods.setValue(name, value, options),
    onClear,
    setError: methods.setError,
    trigger: methods.trigger,
  }));

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} {...formProps}>
        {children}
      </form>
    </FormProvider>
  );
};

UiForm.displayName = "UiForm";
