import { useState } from "react";

export function Test() {
    const [hidden, setHidden] = useState(false);

    return <>
        {!hidden && <div data-testid="description-text">
            <span>Hi, i am Test component</span>
        </div>}
        <button data-testid="hidden-button" onClick={() => setHidden(!hidden)}>hidden</button>
    </>
}