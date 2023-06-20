"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva, VariantProps } from "class-variance-authority";
import { Icon } from "~components/core/icon";
import { classnames } from "~utils/classnames";

const checkboxStyles = cva(
  "peer h-4 w-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
);

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxStyles> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={classnames(checkboxStyles({ className }))}
      {...rest}
    >
      <CheckboxPrimitive.Indicator
        className={classnames("flex items-center justify-center text-current")}
      >
        <Icon icon="check" className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
