import { useState, Children, isValidElement, Fragment, useContext, useEffect } from "react";
import { GlobalStore } from "./main";

interface TestProps {
    myTemplate?: (counter: number) => React.ReactElement | React.ReactElement[];
    children?: React.ReactElement | React.ReactElement[];
}

export function Test({ children, myTemplate }: TestProps) {
    const [hidden, setHidden] = useState(false);
    const store = useContext(GlobalStore);

    return <>
        {!hidden && <div data-testid="description-text">
            <span>Hi, i am Test component: {store.counter}</span>
            {Children.toArray(children).filter(child => 
                isValidElement(child) && child.type === 'button')}
        </div>}
        {myTemplate ? [1, 2, 3, 4, 5].map(counter => (<Fragment key={counter}>{myTemplate!(counter)}</Fragment>)): undefined}
        <button data-testid="hidden-button" onClick={() => setHidden(!hidden)}>hidden</button>
    </>
}