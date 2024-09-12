export function reducer1(state, action){
    switch(action.type){
        case "PLUS" : return state+1;
        case "MINUS" : return state-1;
        default: return state;
    }
} 