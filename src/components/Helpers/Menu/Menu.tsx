import { useContext } from "react";
import { MenuContext } from "context";
import { sections } from "utils/sections";
import classNames from "classnames";
import Close from "assets/close.svg"
import "./Menu.scss";

export function Menu() {
    const { isOpen, setIsOpen } = useContext(MenuContext);
    const toogle = () => {
        setIsOpen((value) => !value);
    }
    const onClickLink = (selector: string, event: React.MouseEvent<HTMLAnchorElement>) => {
        setIsOpen(false);
        event.preventDefault();
        document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className="menu">
            <nav className={classNames("side-menu", isOpen && "open")}>
                <div className="menu__header">
                    <button className="menu__button" onClick={toogle}>
                        <img src={Close} alt="" />
                    </button>
                </div>
                <ul className="menu__list">
                    {sections.map((value) => (
                        <li className="menu__list-item" key={value.text}>
                            <a
                                className="header__link"
                                href="#"
                                onClick={(event) => onClickLink(value.selector, event)}
                            >
                                {value.text}
                            </a>
                        </li>

                    ))}
                </ul>

            </nav>
        </div>
    );
}

export default Menu;
