type StatusProps = {
    status: 'loading' | 'success' | 'error'
}


export const Status = (props: StatusProps) => {
    return(
        <p>Status - {props.status}</p>
    )
}