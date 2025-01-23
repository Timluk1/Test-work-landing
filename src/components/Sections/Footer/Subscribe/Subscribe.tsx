import { Input } from "components/Helpers/Input";
import Send from "assets/send.svg";
import Instagram from "assets/socials/Instagram.svg";
import Twitter from "assets/socials/Twitter.svg";
import Dribbble from "assets/socials/Dribble.svg";
import Facebook from "assets/socials/Facebook.svg";
import Google from "assets/socials/google.svg";
import Youtube from "assets/socials/youtube.svg";
import "./Subscribe.scss";

export function Subscribe() {
    return (
        <div className="subscribe">
            <h4 className="subscribe__title">stay in touch</h4>
            <div className="subscribe__content subscribe-form">
                <Input
                    className="subscribe__input"
                    placeholder="Subscribe our newsletter"
                />
                <button className="subscribe-form__button">
                    <img src={Send} alt="image-send" />
                </button>
            </div>
            <ul className="subscribe__list">
                <li className="subscribe__list-item">
                    <a href="">
                        <img src={Facebook} alt="facebook" />
                    </a>
                </li>
                <li className="subscribe__list-item">
                    <a href="">
                        <img src={Twitter} alt="twitter" />
                    </a>
                </li>
                <li className="subscribe__list-item">
                    <a href="">
                        <img src={Dribbble} alt="dribbble" />
                    </a>
                </li>
                <li className="subscribe__list-item">
                    <a href="">
                        <img src={Instagram} alt="instagram" />
                    </a>
                </li>
                <li className="subscribe__list-item">
                    <a href="">
                        <img src={Google} alt="google" />
                    </a>
                </li>
                <li className="subscribe__list-item">
                    <a href="">
                        <img src={Youtube} alt="youtube" />
                    </a>
                </li>
            </ul>
        </div>
    );
}
