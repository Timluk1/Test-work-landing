import { ElementType, ReactNode } from "react";
import classNames from "classnames";
import "./Container.scss";

interface IContainerProps {
    as?: ElementType;
    children: ReactNode;
    className?: string;
}

export function Container({
    as: Component = "div",
    children,
    className,
}: IContainerProps) {
    return (
        <Component className={classNames("container", className)}>
            {children}
        </Component>
    );
}
