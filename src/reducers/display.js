/**
 * Created by charan reddy on 5/31/2017.
 */
export default function(state=null,action){
    switch(action.type){
        case "ITEM_SELECTED":
            return action.payload;
            break;
}
return state;
}