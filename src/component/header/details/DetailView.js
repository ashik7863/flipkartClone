import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../../redux/action/productAction';
import StarRateIcon from '@mui/icons-material/StarRate';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ActionItem from './ActionItem';

const DetailView = () => {
  const dispatch=useDispatch();
  const {id}=useParams();
  const{loading,product}=useSelector(state=>state.getProductDetails);
  useEffect(()=>{

      dispatch(getProductDetails(id));
    
  },[])
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
  const offer='https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90';
  return (
    <div className='details-item-parent'>
      {
        product && Object.keys(product).length &&
        <div className='details-item-inner'>
          <div className='left'>
          <ActionItem product={product}/>
          </div>
          <div className="right">
            <div style={{fontSize:'17px'}}>{product.title.longTitle}</div>
            <div style={{marginTop:'10px'}}>
              <span style={{background:'#26a541',color:'white',fontSize:'15px',padding:'1px 5px',borderRadius:'4px'}}>3.8 <StarRateIcon fontSize='4px'/></span>
              <span style={{paddingLeft:'8px',fontWeight:'500',color:'#878787'}}>128 Ratings {'&'} 12 Reviews</span>
              <span>
              <img src={fassured} alt="pic" style={{width:'80px',padding:'5px 10px',position:'absolute',marginTop:'-3px'}}/>
              </span>
            </div>
            
            <div style={{marginTop:'14px'}}>
            <span style={{fontSize:'16px',color:'#388e3c',fontWeight:'500',display:'block'}}>{product.discount}</span>
            <span style={{position:'absolute',fontSize:'20px',marginTop:'3px',marginLeft:'-6px'}}><CurrencyRupeeIcon fontSize='large'/></span>
            <span style={{marginLeft:'30px',fontSize:'28px',fontWeight:'600'}}>{product.price.cost}</span>
            <span style={{marginLeft:'15px',fontSize:'15px',textDecoration:'line-through',color:'#878787'}}>₹{product.price.mrp}</span>
            <span style={{marginLeft:'15px',fontSize:'16px',color:'#388e3c',fontWeight:'500'}}>₹{product.price.discount} off</span>
            </div>
            <div style={{marginTop:'8px'}}>
            <span style={{fontSize:'16px',fontWeight:'500',display:'block',marginBottom:'8px'}}>Available offers</span>
            <span style={{display:'block'}}>
              <img src={offer} alt="offer" width={18} style={{position:'absolute',marginTop:'3px'}}/>
              <span style={{marginLeft:'35px',color:'#212121',fontWeight:'500',fontSize:'14px'}}>Special Price</span>
              <span style={{marginLeft:'6px',color:'#212121',fontSize:'13px'}}>Get extra ₹1000 off (price inclusive of cashback/coupon)</span>
            </span>

            <span style={{display:'block',marginTop:'5px'}}>
              <img src={offer} alt="offer" width={18} style={{position:'absolute',marginTop:'3px'}}/>
              <span style={{marginLeft:'35px',color:'#212121',fontWeight:'500',fontSize:'14px'}}>Bank Offer</span>
              <span style={{marginLeft:'6px',color:'#212121',fontSize:'13px'}}>10% instant discount on IDFC FIRST Credit Card EMI Trxns, up to ₹3000 on orders of ₹5,000 and above</span>
            </span>
            <span style={{display:'block',marginTop:'5px'}}>
              <img src={offer} alt="offer" width={18} style={{position:'absolute',marginTop:'3px'}}/>
              <span style={{marginLeft:'35px',color:'#212121',fontWeight:'500',fontSize:'14px'}}>Bank Offer</span>
              <span style={{marginLeft:'6px',color:'#212121',fontSize:'13px'}}>5% Cashback on Flipkart Axis Bank Card</span>
            </span>
            <span style={{display:'block',marginTop:'5px'}}>
              <img src={offer} alt="offer" width={18} style={{position:'absolute',marginTop:'3px'}}/>
              <span style={{marginLeft:'35px',color:'#212121',fontWeight:'500',fontSize:'14px'}}>Partner Offer</span>
              <span style={{marginLeft:'6px',color:'#212121',fontSize:'13px'}}>Purchase now & get a surprise cashback coupon for January / February 2023</span>
            </span>
            <span style={{display:'block',marginTop:'5px'}}>
              <img src={offer} alt="offer" width={18} style={{position:'absolute',marginTop:'3px'}}/>
              <span style={{marginLeft:'35px',color:'#212121',fontWeight:'500',fontSize:'14px'}}>Partner Offer</span>
              <span style={{marginLeft:'6px',color:'#212121',fontSize:'13px'}}>Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500*</span>
            </span>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default DetailView
