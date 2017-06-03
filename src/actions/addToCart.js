/**
 * Created by charan reddy on 6/1/2017.
 */
export const addToCart=(currentItem)=>{
    return{
        type:'ADD_CART',
        payload:currentItem.price
    }
}
