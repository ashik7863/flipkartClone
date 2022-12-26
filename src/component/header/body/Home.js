import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header';
import Navbar from '../navbar/Navbar';
import Slider from './Slider';
import MultiItemCorousel from './MultiItemCorousel';
import { products } from './MultiItemData';
import { toys } from './MultiItemData';
import { winter } from './MultiItemData';
import { topdeals } from './MultiItemData';
import Advertisement from './Advertisement';
import { getProducts } from '../../../redux/action/productAction';


function Home() {
  const {products}=useSelector(state=>state.getProducts);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch])
  return (
    <>
      
      <Slider/>
      <Advertisement products={products} title="Deals of the Day" timer={true}/>
      <MultiItemCorousel products={toys} title="Beauty, Food, Toys & more" timer={false}/>
      <MultiItemCorousel products={winter} title="Winter Essentials" timer={false}/>
      <MultiItemCorousel products={topdeals} title="Top Deals" timer={false}/>

    </>
  );
}

export default Home;
