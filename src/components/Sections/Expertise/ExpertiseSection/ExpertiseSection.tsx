import { Skill } from "components/Sections/Expertise/Skill";
import { skills } from "utils/skillsList";
import { Container } from "components/Helpers/Container";
import "./ExpertiseSection.scss";

export function ExpertiseSection() {
    return (
        <section className="expertise-section">
            <Container>
                <div className="expertise-section__content">
                    <h2 className="expertise-section__title">expertise</h2>
                    <p className="expertise-section__text">
                        Lorem ipsum dolor sit amet proin gravida nibh vel velit
                    </p>
                    <div className="expertise-section__line"></div>
                </div>
                <div className="expertise-section__list">
                    {skills.map((data) => (
                        <Skill key={data.title} {...data} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
