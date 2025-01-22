import classNames from "classnames";
import "./Author.scss";;

interface IAuthorProps {
    imgSrc: string;
    isActive: boolean;
    name: string;
    onChangeReview: (name: string) => void;
}

export function Author({ imgSrc, isActive, name, onChangeReview }: IAuthorProps) {
    const onClick = () => {
        onChangeReview(name);
    };
    return (
        <button className={classNames("author", { active: isActive })} onClick={onClick}>
            <img src={imgSrc} alt={name} />
        </button>
    );
}
