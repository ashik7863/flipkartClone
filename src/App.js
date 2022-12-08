import './App.css';
import Header from './component/header/Header';
import Navbar from './component/header/navbar/Navbar';
import Slider from './component/header/body/Slider';
import MultiItemCorousel from './component/header/body/MultiItemCorousel';
import { products } from "./component/header/body/MultiItemData";
import { toys } from './component/header/body/MultiItemData';
import { winter } from './component/header/body/MultiItemData';
import { topdeals } from './component/header/body/MultiItemData';
function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Slider/>
      <MultiItemCorousel products={products} title="Deals of the Day"/>
      <MultiItemCorousel products={toys} title="Beauty, Food, Toys & more"/>
      <MultiItemCorousel products={winter} title="Winter Essentials"/>
      <MultiItemCorousel products={topdeals} title="Top Deals"/>
      {/* <MultiItemCorousel title="Hand-picked Christmas Specials"/>
      <MultiItemCorousel title="Sports, Healthcare & more"/>
      <MultiItemCorousel title="Wedding & Gifting Specials"/>
      <MultiItemCorousel title="Home & Kitchen Essentials"/>
      <MultiItemCorousel title="New Year Specials"/>
      <MultiItemCorousel title="Shop Monthly Essentials"/> */}
    </div>
  );
}

export default App;
