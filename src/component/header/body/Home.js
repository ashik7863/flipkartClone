import Header from '../Header';
import Navbar from '../navbar/Navbar';
import Slider from './Slider';
import MultiItemCorousel from './MultiItemCorousel';
import { products } from './MultiItemData';
import { toys } from './MultiItemData';
import { winter } from './MultiItemData';
import { topdeals } from './MultiItemData';
import Advertisement from './Advertisement';
function Home() {
  return (
    <>
      <Navbar/>
      <Slider/>
      <Advertisement products={products} title="Deals of the Day" timer={true}/>
      <MultiItemCorousel products={toys} title="Beauty, Food, Toys & more" timer={false}/>
      <MultiItemCorousel products={winter} title="Winter Essentials" timer={false}/>
      <MultiItemCorousel products={topdeals} title="Top Deals" timer={false}/>

    </>
  );
}

export default Home;
