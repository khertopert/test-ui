import { useState } from "react";

export function Test() {
    const [hidden, setHidden] = useState(false);

    return <>
        {!hidden && <div>
            <span>Hi, i am Test component</span>
        </div>}
        <button onClick={() => setHidden(!hidden)}>hidden</button>
    </>
}