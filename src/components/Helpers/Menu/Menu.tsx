import { useContext } from "react";
import { MenuContext } from "context";
import classNames from "classnames";
import Close from "assets/close.svg"
import "./Menu.scss";

export function Menu() {
    const { isOpen, setIsOpen } = useContext(MenuContext);
    const toogle = () => {
        setIsOpen((value)  => !value);
    }
    return (
        <div className="menu">
            <nav className={classNames("side-menu", isOpen && "open")}>
                <div className="menu__header">
                    <button className="menu__button" onClick={toogle}>
                        <img src={Close} alt="" />
                    </button>
                </div>
                <ul className="menu__list">
                    <li className="menu__list-item">
                        <a href="#home">Home</a>
                    </li>
                    <li className="menu__list-item">
                        <a href="#about">About</a>
                    </li>
                    <li className="menu__list-item">
                        <a href="#services">Services</a>
                    </li>
                    <li className="menu__list-item">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>

            </nav>
        </div>
    );
}

export default Menu;
