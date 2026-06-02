import { Button } from "./Button"
import { Input } from "./Input"

export const Control = () => {
    return (
        <>
        <Button handleClick={(event, id) => {
            console.log("Event", event, id)
        }} />
        
        <Input handleChange={(event) => {
            console.log("Event ===", event)
        }}></Input>
        </>
    )
}