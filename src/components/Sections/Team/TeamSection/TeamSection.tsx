import { Container } from "components/Helpers/Container";
import { Person } from "components/Sections/Team/Person";
import { personsList } from "utils/personsList";
import { Button } from "components/Helpers/Button";
import "./TeamSection.scss";

export function TeamSection() {
    return (
        <section className="team-section">
            <Container>
                <div>
                    <h2 className="team-section__title">
                        MEET OUR AMAZING TEAM
                    </h2>
                    <p className="team-section__text">
                        Lorem ipsum dolor sit amet proin gravida nibh vel velit
                    </p>
                    <div className="line"></div>
                </div>
                <div>
                    <ul className="team-section__list">
                        {personsList.map((data) => {
                            return (
                                <li
                                    key={data.name + data.job}
                                    className="team-section__item"
                                >
                                    <Person {...data} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="team-section__footer">
                    <p className="team-section__cta-text">
                        Become part of our dream team, let’s join us !{" "}
                    </p>
                    <Button>we are hiring</Button>
                </div>
            </Container>
        </section>
    );
}
