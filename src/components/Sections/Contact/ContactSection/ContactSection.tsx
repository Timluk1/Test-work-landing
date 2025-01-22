import { Input } from "components/Helpers/Input";
import { Container } from "components/Helpers/Container";
import { Button } from "components/Helpers/Button";
import { useForm } from "react-hook-form";
import type { FormData } from "components/Helpers/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "components/Helpers/Input/zod";
import "./ContactSection.scss";

export function ContactSection() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(FormSchema)
    });

    const onSubmit = async (data: FormData) => {
        console.log("SUCCESS", data);
    };
    return (
        <div className="contact-section">
            <Container>
                <h2 className="contact-section__title">GIVE US A GOOD NEWS</h2>
                <form
                    className="contact-section__form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="contact-section__inputs">
                        <Input
                            placeholder="Name"
                            name="name"
                            register={register}
                            error={errors.name}
                            type="text"
                        />
                        <Input
                            placeholder="Email"
                            name="email"
                            register={register}
                            error={errors.email}
                            type="email"
                        />
                        <Input
                            placeholder="+1 (999) 999-99-99"
                            name="phone"
                            register={register}
                            error={errors.phone}
                            type="tel"
                        />
                        <Input
                            placeholder="Subject"
                            name="subject"
                            register={register}
                            error={errors.subject}
                            type="text"
                        />
                        <Input
                            className="contact-section__message"
                            placeholder="Your Message"
                            name="message"
                            register={register}
                            error={errors.message}
                            type="textarea"
                        />
                    </div>
                    <Button className="contact-section__button">submit</Button>
                </form>
            </Container>
        </div>
    );
}
