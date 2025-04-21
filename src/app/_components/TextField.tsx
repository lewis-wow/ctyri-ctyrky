import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { type FieldValues } from "react-hook-form";
import type { GenericFieldProps } from "../types";

export type TextFieldProps<TFieldValues extends FieldValues> =
  GenericFieldProps<TFieldValues> & {
    type?: "text" | "email" | "password";
  };

export const TextField = <TFieldValues extends FieldValues>({
  form,
  name,
  type = "text",
  label,
  hint,
  placeholder,
  description,
  required,
}: TextFieldProps<TFieldValues>) => {
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
            <Input
              placeholder={placeholder}
              type={type}
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
