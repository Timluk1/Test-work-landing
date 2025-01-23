import { useState } from "react";
import Video from "assets/video.svg";
import Close from "assets/close-video.svg";
import "./VideoSection.scss";

export function VideoSection() {
    const [showVideo, setShowVideo] = useState<boolean>(false);
    const toggleVideo = () => setShowVideo(!showVideo);
    return (
        <section className="video-section">
            {showVideo ? (
                <div>
                    <div className="video-section__overlay">
                        <button
                            onClick={toggleVideo}
                            className="video-section__close"
                        >
                            <img src={Close} alt="close-video" />
                        </button>
                        <iframe
                            className="video-section__iframe"
                            width="720"
                            height="405"
                            src="https://rutube.ru/play/embed/f884aa6ed5f94120b7304506042fe5bb/"
                            allow="clipboard-write; autoplay"
                        ></iframe>
                    </div>
                </div>
            ) : (
                <button
                    className="video-section__content"
                    onClick={toggleVideo}
                >
                    <img className="video-section__img" src={Video} alt="" />
                    <p className="video-section__text">Watch our story</p>
                </button>
            )}
        </section>
    );
}
