import classNames from "classnames"
import { InputHTMLAttributes } from "react";
import "./Input.scss"

interface InputProps {
    placeholder: string;
    value?: string;
    onChange?: () => void;
    className?: string;
    type?: InputHTMLAttributes<HTMLInputElement>["type"]
}

export function Input({ className, placeholder, type="text" }: InputProps) {
    return (
        <input className={classNames("input", className)} type={type} placeholder={placeholder}/>
    )
}
