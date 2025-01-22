import classNames from "classnames";
import "./Button.scss";

interface IButtonProps {
    children: React.ReactNode;
    className?: string;
}

export function Button({ children, className }: IButtonProps) {
    return (
        <button className={classNames("button", className)}>{children}</button>
    );
}
