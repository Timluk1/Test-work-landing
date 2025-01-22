import { Header } from "components/Sections/Main/Header";
import { Container } from "components/Helpers/Container";
import { About } from "components/Sections/Main/About";
import "./MainSection.scss";

export function MainSection() {
    return (
        <section className="main-section">
            <Container>
                <Header />
                <About className="main-section__about" />
            </Container>
        </section>
    );
}
