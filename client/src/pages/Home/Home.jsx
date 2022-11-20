import './Home.scss';
import Carousel from '../../components/Carousel/Carousel';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import LatestProducts from '../../components/LatestProducts/LatestProducts';

const Home = () => (
  <div className="home">
    <Carousel />
    <FeaturedProducts />
    <LatestProducts />
  </div>
);

export default Home;
