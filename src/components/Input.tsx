type InputProps = {
    value?: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input = ( {value, handleChange} : InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Evebnt", event);
    }
    return (
        <input 
        value={value}
        onChange={handleChange}/>
    )
}