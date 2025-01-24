import { Logo } from "components/Helpers/Logo";
import { useContext } from "react";
import { MenuContext } from "context";
import Menu from "assets/menu.svg";
import { sections } from "utils/sections";
import "./Header.scss";

export function Header() {
    const { setIsOpen } = useContext(MenuContext);
    const toggle = () => {
        setIsOpen((value) => !value);
    };
    const onClickLink = (selector: string, event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header className="header">
            <Logo />
            <button onClick={toggle}>
                <img className="header__menu" src={Menu} alt="Menu" />
            </button>
            <nav className="header__nav">
                {sections.map((value) => (
                    <a
                        className="header__link"
                        key={value.text}
                        href="#"
                        onClick={(event) => onClickLink(value.selector, event)}
                    >
                        {value.text}
                    </a>
                ))}
            </nav>
        </header>
    );
}
