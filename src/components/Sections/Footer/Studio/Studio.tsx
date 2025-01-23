import Geo from "assets/geo.svg";
import Phone from "assets/phone.svg"
import "./Studio.scss";

export function Studio() {
    return (
        <div className="studio">
            <h4 className="studio__title">Our studio</h4>
            <div>
                <div className="studio__content studio__content-first">
                    <img src={Geo} alt="geo" />
                    <p className="studio__text">
                        Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres
                        - Jakarta Barat 11480 - Indonesia
                    </p>
                </div>
                <div className="studio__content">
                    <img src={Phone} alt="phone" />
                    <p className="studio__text">(+62) 21-2224 3333</p>
                </div>
            </div>
        </div>
    );
}
