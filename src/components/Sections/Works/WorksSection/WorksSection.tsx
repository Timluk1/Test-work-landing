import { Container } from "components/Helpers/Container";
import { Button } from "components/Helpers/Button";
import Arrow from "assets/arrow.svg";
import "./WorksSection.scss";

export function WorksSection() {
    return (
        <section className="work-section">
            <Container>
                <div className="work-section__content">
                    <h2 className="work-section__title">Our Works</h2>
                    <button className="work-section__btn">
                        <p className="work-section__text">See All Projects on Dribbble</p>
                        <img src={Arrow} alt="Arrow icon pointing right" />
                    </button>
                </div>
            </Container>
            <div className="work-section__items"></div>
            <Button className="work-section__button">
                Load More
            </Button>
        </section>
    );
}
