import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../../redux/action/productAction';
import StarRateIcon from '@mui/icons-material/StarRate';
import ActionItem from './ActionItem';

const DetailView = () => {
  const dispatch=useDispatch();
  const {id}=useParams();
  const{loading,product}=useSelector(state=>state.getProductDetails);
  useEffect(()=>{

      dispatch(getProductDetails(id));
    
  },[])
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
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
          </div>
        </div>
      }
    </div>
  )
}

export default DetailView
