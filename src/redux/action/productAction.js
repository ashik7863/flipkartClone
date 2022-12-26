import axios from 'axios';
import * as actionType from '../constants/productConstant';

export const getProducts=()=>async(dispatch)=>{
    try {
        const {data}=await axios.get('https://vercel-flipkart-backend-fquc.vercel.app/product');
        dispatch({type:actionType.getProductSuccess,payload:data});
    } catch (error) {
        dispatch({type:actionType.getProductFail,payload:error.message})
    }
}

export const getProductDetails=(id)=>async(dispatch)=>{
    try {
        
        dispatch({type:actionType.getProductDetailsRequest});
        const {data}=await axios.get(`https://vercel-flipkart-backend-fquc.vercel.app/product/${id}`);
        dispatch({type:actionType.getProductDetailsSuccess,payload:data});
    } catch (error) {
        dispatch({type:actionType.getProductDetailsFail,payload:error.message});
    }
}