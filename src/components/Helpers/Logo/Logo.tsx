import classNames from "classnames";
import LogoImage from "assets/logo.svg";
import "./Logo.scss";

interface ILogoProps {
    className?: string;
}

export function Logo({ className }: ILogoProps) {
    return (
        <a href="#">
            <div className={classNames("logo", className)}>
                <img className="logo__img" src={LogoImage} alt="Logo" />
                <p className="logo__company">tajam</p>
            </div>
        </a>
    );
}
