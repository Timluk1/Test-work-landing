import { Container } from "components/Helpers/Container";
import { useState, useMemo } from "react";
import { reviewsList } from "utils/reviewsList";
import { Author } from "components/Sections/Revies/Author";
import "./ReviewsSection.scss";

export function ReviewsSection() {
    const [activeName, setActiveName] = useState<string>(reviewsList[2].name);

    const active = useMemo(() => {
        return reviewsList.find((data) => data.name === activeName);
    }, [activeName]);

    const onChangeReview = (newName: string) => {
        setActiveName(newName);
    };

    return (
        <section className="reviews-section">
            <Container>
                <div className="reviews-section__placeholder">
                    <div className="reviews-section__content">
                        <p className="reviews-section__quote">“</p>
                        <p className="reviews-section__text">
                            {active?.text}
                        </p>
                    </div>
                    {active && (
                        <div className="reviews-section__author">
                            <h3 className="reviews-section__author-name">{active.name}</h3>
                            <p className="reviews-section__job">{active.job}</p>
                            <ul className="reviews-section__list">
                                {reviewsList.map((data) => {
                                    const props = {
                                        ...data,
                                        isActive: data.name === activeName,
                                        onChangeReview,
                                    };
                                    return (
                                        <li className="reviews-section__list-item" key={data.name + data.job}>
                                            <Author {...props} />
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
}
