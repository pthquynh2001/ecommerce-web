import { SinglePage } from '../components/Layouts';

import Home from '../pages/Home';
import BathProducts from '../pages/BathProducts';
import ShowerProducts from '../pages/ShowerProducts';
import HairProducts from '../pages/HairProducts';
import ProductDetails from '../pages/ProductDetails';
import FeaturedProducts from '../pages/FeaturedProducts';
import Cart from '../pages/Cart';
import About from '../pages/About';
import LushArticles from '../pages/LushArticles';
import ArticleContent from '../pages/ArticleContent';
import ContactUs from '../pages/ContactUs';
import LoginPage from '../pages/LoginPage';

//ai cung xem duoc, khong can dang nhap
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/articles', component: LushArticles },
  { path: '/article/:id', component: ArticleContent },
  { path: '/contact', component: ContactUs },
  { path: '/about', component: About, layout: SinglePage },
  { path: '/collections/featured', component: FeaturedProducts, exact: true },
  {
    path: '/collections/bath',
    component: BathProducts,
  },
  { path: '/collections/shower', component: ShowerProducts },
  { path: '/collections/hair', component: HairProducts },
  { path: '/cart', component: Cart },
  { path: '/product/:id', component: ProductDetails },
  { path: '/account/login', component: LoginPage },
];
//dang nhap moi xem duoc => login
const privateRoutes = [];
export { publicRoutes, privateRoutes };
