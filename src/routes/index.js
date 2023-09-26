// import { HeaderOnly } from '../components/Layouts';

import Home from '../pages/Home';
import BathProducts from '../pages/BathProducts';
import ShowerProducts from '../pages/ShowerProducts';
import HairCare from '../pages/HairCare';
import ProductDetails from '../pages/ProductDetails';
import FeaturedProducts from '../pages/FeaturedProducts';

//ai cung xem duoc, khong can dang nhap
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/collections/featured', component: FeaturedProducts },

  {
    path: '/collections/bath',
    component: BathProducts,
  },
  { path: '/collections/shower', component: ShowerProducts },
  { path: '/collections/hair', component: HairCare },
  { path: '/product/:id', component: ProductDetails },
];
//dang nhap moi xem duoc => login
const privateRoutes = [];
export { publicRoutes, privateRoutes };
