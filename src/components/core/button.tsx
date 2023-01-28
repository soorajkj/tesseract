'use client';

import { forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const ButtonStyles = cva(
  'relative inline-flex cursor-pointer select-none items-center justify-center truncate rounded border border-color-transparent py-2 px-6'
);

interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes,
    VariantProps<typeof ButtonStyles> {
  loading?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

export default forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, type = 'button', className, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      className={ButtonStyles({ className })}
      {...props}
    >
      {children}
    </button>
  );
});