import { useReducer } from "react";

type reducerProp = {
    count: number
}

type actionProp = {
    type: 'increment' | 'decrement' | 'reset';
}

const onReducer = (state: reducerProp, action: actionProp) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1}
        case 'decrement':
            return { count: state.count -  1}
        case 'reset': 
            return { count: 0}
    
        default:
            return { count: 0};
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(onReducer, { count: 0})

    const onIncrement = () => {
        return dispatch({type: 'increment'})

    }

    const onDecrement = () => {
        return dispatch({type: 'decrement'})
    }

    const onReset = () => {
        dispatch({type: 'reset'} as actionProp)
    }

    return (
        <>
            Count: {state.count}
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>

            <button onClick={onReset}>Reset</button>
        </>
    )
}