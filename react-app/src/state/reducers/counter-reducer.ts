export const counterReducer = (state: number, action: CounterAction) => {
    switch(action.type) {
        case "increase":
            state = state + action.value;
            break;
        case "decrease":
            state = state - action.value;
            break;
    }
    return state
}