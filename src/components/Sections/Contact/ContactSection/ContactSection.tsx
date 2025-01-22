import { Input } from "components/Helpers/Input"
import { Container } from "components/Helpers/Container"
import { Button } from "components/Helpers/Button"
import "./ContactSection.scss"

export function ContactSection() {
    return (
        <div className="contact-section">
            <Container>
                <h2 className="contact-section__title">GIVE US A GOOD NEWS</h2>
                <form className="contact-section__form" action="">
                    <div className="contact-section__inputs">
                        <Input placeholder="name" type="text" />
                        <Input placeholder="email" type="email" />
                        <Input placeholder="+1 (999) 999-99-99" type="tel" />
                        <Input placeholder="subject" type="text" />
                        <Input placeholder="your message" />
                    </div>
                    <Button className="contact-section__button">
                        submit
                    </Button>
                </form>
            </Container>
        </div>
    )
}
