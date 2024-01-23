"use client";

import React, { forwardRef } from "react";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";
import { FormErrors } from "./form-error";

interface FormInputProps {
  name?: string;
  placeholder?: string;
  label?: string;
  id: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  errors?: Record<string, string[] | undefined>;
  className?: string;
  defaultValue?: string;
  onBlur?: () => void;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      name,
      placeholder,
      label,
      id,
      type,
      required,
      defaultValue = "",
      disabled,
      className,
      errors,
      onBlur,
    }: FormInputProps,
    ref
  ) => {
    const { pending } = useFormStatus();
    return (
      <div className="space-y-2">
        <div className="space-y-1">
          {label && (
            <Label
              htmlFor={name}
              className="text-xs font-semibold text-neutral-700 "
            >
              {label}
            </Label>
          )}
          <Input
            onBlur={onBlur}
            defaultValue={defaultValue}
            ref={ref}
            required={required}
            name={id}
            id={id}
            placeholder={placeholder}
            type={type}
            disabled={pending || disabled}
            className={cn("text-sm px-2 py-1 h-7", className)}
            aria-describedby={`${id}-error`}
          />
        </div>
        <FormErrors id={id} errors={errors} />
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
