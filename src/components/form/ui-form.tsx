import { zodResolver } from "@hookform/resolvers/zod";
import { useImperativeHandle } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { TUiFormProps } from "./ui-form.types";

export function UiForm<TInput extends FieldValues, TOutput extends FieldValues>(
  props: TUiFormProps<TInput, TOutput>,
) {
  const { schema, defaultValues, onSubmit, children, ref, ...formProps } =
    props;

  const methods = useForm<TInput, unknown, TOutput>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schema),
    defaultValues,
  });

  useImperativeHandle(ref, () => ({
    getValues: methods.getValues,
    reset: methods.reset,
    setValue: methods.setValue,
    onClear: () => methods.reset(defaultValues),
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
}
