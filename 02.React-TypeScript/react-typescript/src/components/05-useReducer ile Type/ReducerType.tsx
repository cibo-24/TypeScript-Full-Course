import React, { useReducer } from 'react'

const initialState = { count: 0 };

type CounterType = {
    count: number;
}

type ActionType = {
    type: string;
    payload: number;
};

type ResetType = {
    type: "reset";
}

type CounterAction = ActionType | ResetType; 

function reducer(state: CounterType, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            return { count: state.count - action.payload };
        case 'reset':
            return initialState;
        default: 
            return state;

    }
}



function ReducerType() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            Sayı: {state.count}
            <button onClick={() => dispatch({type: 'increment', payload: 15})}>15 Arttır</button>
            <button onClick={() => dispatch({type: 'decrement', payload: 15})}>15 Azalt</button>
            <button onClick={() => dispatch({type: 'reset'})}>Sıfırla</button>
        </div>
    )
}

export default ReducerType