import * as actionType from '../constants/productConstant';
export const getProductReducer=(state={products:[]},action)=>{
    switch(action.type){
        case actionType.getProductSuccess:
            return {products:action.payload};
        case actionType.getProductFail:
            return {error:action.payload};
        default:
            return state;
    }
}
export const getProductDetailsReducer=(state={products:{}},action)=>{
    switch(action.type){
        case actionType.getProductDetailsRequest:
            return {loading:true};
        case actionType.getProductDetailsSuccess:
            return {loading:false,product:action.payload};
        case actionType.getProductDetailsFail:
            return {loading:false,error:action.payload};
        default:
            return state;
    }
}