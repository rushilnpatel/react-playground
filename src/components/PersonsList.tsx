type PersonListProps = {
    names: {
        first: string,
        last: string
    }[]
}
export const PersonList = (props: PersonListProps) => {
    return (
    <div id="persons-list">
        {props.names.map((name) => {
            return (
                <h2>{name.first} {name.last}</h2>
            )
        })}
    </div>
)
}