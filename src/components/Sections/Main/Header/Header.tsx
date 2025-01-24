import { Logo } from "components/Helpers/Logo";
import { useContext } from "react";
import { MenuContext } from "context";
import Menu from "assets/menu.svg";
import "./Header.scss";

export function Header() {
    const { setIsOpen } = useContext(MenuContext);
    const toogle = () => {
        setIsOpen((value) => !value);
    }
    return (
        <header className="header">
            <Logo />
            <button onClick={toogle}>
                <img className="header__menu" src={Menu} alt="" />
            </button>
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
