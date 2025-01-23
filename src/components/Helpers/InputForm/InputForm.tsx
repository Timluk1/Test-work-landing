import classNames from "classnames";
import { InputPropsForm } from "./types";
import "./InputForm.scss";

export function InputForm({
    className,
    placeholder,
    type = "text",
    register,
    name,
    error,
}: InputPropsForm) {
    return (
        <div className="input-container">
            {type === "textarea" ? (
                <textarea
                    className={classNames("input-form textarea", className, {
                        "input-error": error,
                    })}
                    placeholder={placeholder}
                    {...register(name)}
                ></textarea>
            ) : (
                <input
                    className={classNames("input-form", className, {
                        "input-error": error,
                    })}
                    type={type}
                    placeholder={placeholder}
                    {...register(name)}
                />
            )}
            {error && (
                <span className="input-error-message">{error.message}</span>
            )}
        </div>
    );
}
