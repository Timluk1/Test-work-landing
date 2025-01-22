import "./Skill.scss";

interface ISkillProps {
    title: string;
    text: string;
    imgSrc: string;
}

export function Skill({ title, text, imgSrc }: ISkillProps) {
    return (
        <div className="skill">
            <img className="skill__img" src={imgSrc} alt="" />
            <h3 className="skill__title">{title}</h3>
            <p className="skill__text">{text}</p>
        </div>
    );
}
