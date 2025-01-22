import "./Person.scss"

interface IPersonProps {
    name: string;
    job: string;
    imgSrc?: string;
}

export function Person({ name, job }: IPersonProps) {
    return (
        <div className="person">   
            <div className="person__image">
                <img src="" alt="" />
            </div>
            <div className="person__content">
                <h3 className="person__title">{name}</h3>
                <p className="person__text">{job}</p>
            </div>
        </div>
    )
}
