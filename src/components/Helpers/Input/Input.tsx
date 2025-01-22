import classNames from "classnames";
import { InputProps } from "./types";
import "./Input.scss";

export function Input({
    className,
    placeholder,
    type = "text",
    register,
    name,
    error,
}: InputProps) {
    return (
        <div className="input-container">
            {type === "textarea"
                ?
                <textarea className={classNames("input textarea", className, {
                    "input-error": error,
                })}
                    placeholder={placeholder}
                    {...register(name)}></textarea>
                :
                <input
                    className={classNames("input", className, {
                        "input-error": error,
                    })}
                    type={type}
                    placeholder={placeholder}
                    {...register(name)}
                />
            }
            {error && (
                <span className="input-error-message">{error.message}</span>
            )}
        </div>
    );
}
