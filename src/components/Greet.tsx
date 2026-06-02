import { Person } from "./Person"
import { PersonList } from "./PersonsList";

type GreetType = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean
}

const list = [
    {
        first: "Alex",
        last: "Wilson"
    },
    {
        first: "Rushil",
        last: "Patel"
    }
];

export const Greet = (props: GreetType) => {
    const { messageCount = 0 } = props;
    return (
        <>
            {props.isLoggedIn ? 
                <p>Hello <Person first="John" last="Trust"></Person>, You have {messageCount} unread message.</p>
             :
              <p>Hello Guest</p>}
              <PersonList names={list}></PersonList>
        </>
    )
}