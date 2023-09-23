import { HeaderOnly } from '../components/Layouts';

import Home from '../pages/Home';
import BathProducts from '../pages/BathProducts';
import ShowerProducts from '../pages/ShowerProducts';
import HairCare from '../pages/HairCare';
import Special from '../pages/Special';

//ai cung xem duoc, khong can dang nhap
const publicRoutes = [
  { path: '/', component: Home },
  {
    path: '/category/bath-products',
    component: BathProducts,
  },
  { path: '/category/shower-products', component: ShowerProducts },
  { path: '/category/hair-care', component: HairCare },
  { path: '/special', component: Special, layout: HeaderOnly },
];
//dang nhap moi xem duoc => login
const privateRoutes = [];
export { publicRoutes, privateRoutes };
