import { Container } from "components/Helpers/Container";
import { Button } from "components/Helpers/Button";
import Figure from "assets/figure.svg";
import "./StorySection.scss";

export function StorySection() {
    return (
        <Container>
            <section className="story-section">
                <div>
                    <img
                        className="story-section__img"
                        src={Figure}
                        alt="figure"
                    />
                </div>
                <div className="story-section__about">
                    <h2 className="story-section__title">our story</h2>
                    <ul className="story-section__list">
                        <p className="story-section__text">
                            This is Photoshop's version of Lorem Ipsum. Proin
                            gravida nibh vel velit auctor aliquet. Aenean
                            sollicitudin, lorem quis bibendum auctor, nisi elit
                            consequat ipsum, nec sagittis sem nibh id elit. Duis
                            sed odio sit amet nibh vulputate cursus
                        </p>
                        <p className="story-section__text">
                            Morbi accumsan ipsum velit. Nam nec tellus a odio
                            tincidunt auctor a ornare odio. Sed non mauris vitae
                            erat consequat auctor eu in elit. Class aptent
                            taciti sociosqu ad litora torquent per conubia
                            nostra, per inceptos himenaeos.
                        </p>
                    </ul>
                    <Button>Learn more</Button>
                </div>
            </section>
        </Container>
    );
}
