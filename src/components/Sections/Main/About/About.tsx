import { Button } from "components/Helpers/Button";
import classNames from "classnames";
import "./About.scss";

interface IAboutProps {
    className: string;
}

export function About({ className }: IAboutProps) {
    return (
        <div className={classNames("about", className)}>
            <h1 className="about__title">We Are Awesome Creative Agency </h1>
            <div className="about__line"></div>
            <p className="about__text">
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
                amet mauris. Morbi accumsan ipsum velit.
            </p>
            <Button className="about__button">Learn more</Button>
        </div>
    );
}
