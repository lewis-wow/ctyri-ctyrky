import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { type FieldValues } from "react-hook-form";
import type { GenericFieldProps } from "../types";
import { NumberInput } from "./NumberInput";

export type NumberFieldProps<TFieldValues extends FieldValues> =
  GenericFieldProps<TFieldValues>;

export const NumberField = <TFieldValues extends FieldValues>({
  form,
  name,
  label,
  hint,
  placeholder,
  description,
  required,
}: NumberFieldProps<TFieldValues>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {(label || hint) && (
            <FormLabel>
              <div className="flex justify-between">
                <span>{label}</span>
                <span>{hint}</span>
              </div>
            </FormLabel>
          )}
          <FormControl>
            <NumberInput
              placeholder={placeholder}
              required={required}
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
