import { MainSection } from "components/Sections/Main/MainSection/MainSection";
import { StorySection } from "components/Sections/Story/StorySection";
import { VideoSection } from "components/Sections/Video/VideoSection";
import { ExpertiseSection } from "components/Sections/Expertise/ExpertiseSection";
import { TeamSection } from "components/Sections/Team/TeamSection";
import { WorksSection } from "components/Sections/Works/WorksSection/WorksSection";
import { ReviewsSection } from "components/Sections/Revies/ReviewsSection";
import { ContactSection } from "components/Sections/Contact/ContactSection";
import { FooterSection } from "components/Sections/Footer/FooterSection";
import "./Home.scss";

export function Home() {
    return (
        <div className="home">
            <MainSection />
            <StorySection />
            <VideoSection />
            <ExpertiseSection />
            <TeamSection />
            <WorksSection />
            <ReviewsSection />
            <ContactSection />
            <FooterSection />
        </div>
    );
}
