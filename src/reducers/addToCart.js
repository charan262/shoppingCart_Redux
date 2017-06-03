/**
 * Created by charan reddy on 6/1/2017.
 */
const initialstate={
    addedItems:[],
}
export default function(state=0,action){

            switch(action.type){
                case "ADD_CART":
                    return state+action.payload;
                    break;
            }
            return state;

    }
