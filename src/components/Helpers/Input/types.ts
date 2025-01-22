import { UseFormRegister, FieldError } from "react-hook-form";
import { InputHTMLAttributes } from "react";

export interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export interface InputProps {
    placeholder: string;
    name: keyof FormData;
    register: UseFormRegister<FormData>;
    error: FieldError | undefined;
    className?: string;
    type?: InputHTMLAttributes<HTMLInputElement>["type"];
}
