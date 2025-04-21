import type { ReactNode } from "react";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

export type GenericFieldProps<TFieldValues extends FieldValues> = {
  form: UseFormReturn<TFieldValues, any, TFieldValues>;
  name: Path<TFieldValues>;
  label?: string;
  hint?: ReactNode;
  placeholder?: string;
  description?: ReactNode;
  required?: boolean;
};
