import { Logo } from "components/Helpers/Logo";
import { Container } from "components/Helpers/Container";
import { Studio } from "../Studio";
import { Subscribe } from "../Subscribe";
import "./FooterSection.scss";

export function FooterSection() {
    return (
        <section className="footer-section">
            <Container className="footer-section__container">
                <div className="footer-section__content">
                    <div className="footer-section__info">
                        <Logo className="footer-section__logo" />
                        <p className="footer-section__description">
                            Lorem quis bibendum auctor, nisi elit consequat
                            ipsum, nec sagittis sem nibh elit. Duis sed odio sit
                            amet auctor a ornare odio non mauris vitae erat in
                            elit
                        </p>
                    </div>
                    <Studio />
                    <Subscribe />
                </div>
                <div className="footer-section__bottom">
                    <nav className="footer-section__nav">
                        <a href="" className="footer-section__nav-link">
                            Help
                        </a>
                        <a href="" className="footer-section__nav-link">
                            Terms & condition
                        </a>
                        <a href="" className="footer-section__nav-link">
                            Privacy
                        </a>
                    </nav>
                    <p className="footer-section__copyright">
                        Copyright © 2015 - Tajem Creative
                    </p>
                </div>
            </Container>
        </section>
    );
}
