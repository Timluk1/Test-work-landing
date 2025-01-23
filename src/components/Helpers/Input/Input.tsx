import classNames from "classnames";
import "./Input.scss";

interface InputProps {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type?: string;
    className?: string;
}

export function Input({
    value,
    onChange,
    placeholder,
    type = "text",
    className,
}: InputProps) {
    return (
        <div className="input-container">
            <input
                className={classNames("input", className)}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}
