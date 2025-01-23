import { Logo } from "components/Helpers/Logo";
import "./Header.scss";

export function Header() {
    return (
        <header className="header">
            <Logo />
            <nav className="header__nav">
                <a className="header__link active" href="#about">
                    home
                </a>
                <a className="header__link" href="">
                    about
                </a>
                <a className="header__link" href="">
                    expertise
                </a>
                <a className="header__link" href="">
                    teams
                </a>
                <a className="header__link" href="">
                    works
                </a>
                <a className="header__link" href="">
                    people say
                </a>
                <a className="header__link" href="">
                    contact
                </a>
            </nav>
        </header>
    );
}
