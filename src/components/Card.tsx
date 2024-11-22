type CardProps = {
    name: string;
};

export function Card({ name }: CardProps): JSX.Element {
    return (
        <div className="card">
            <p>{name}</p>
        </div>
    );
}
