import classNames from "classnames";
import "./ErrorMessage.scss";

interface IErrorMessageProps {
    errors: string[];
    className?: string;
}

export function ErrorMessage({ errors, className }: IErrorMessageProps) {
    return (
        <div className={classNames("error-message", className)}>
            {errors.length > 0 ? (
                <ul className="error-message__list">
                    {errors.map((error, index) => (
                        <li key={index} className="error-message__item">
                            {error}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="error-message__text">No errors</p>
            )}
        </div>
    );
}
