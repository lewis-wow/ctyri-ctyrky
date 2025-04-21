import { Button as ButtonUI, buttonVariants } from "./ui/button";
import { type VariantProps } from "class-variance-authority";
import { type ComponentProps } from "react";
import { match } from "ts-pattern";
import { Loading } from "./Loading";

export type ButtonProps = {
  isLoading?: boolean;
} & ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export const Button = ({ isLoading, children, ...props }: ButtonProps) => {
  return (
    <ButtonUI {...props}>
      {match({ isLoading })
        .with({ isLoading: true }, () => <Loading />)
        .otherwise(() => children)}
    </ButtonUI>
  );
};
