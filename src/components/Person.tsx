type PersonType = {
    first: string,
    last: string
}

export const Person = (props: PersonType) => {
    return (
        <span>{props.first} {props.last}</span>
    )
}