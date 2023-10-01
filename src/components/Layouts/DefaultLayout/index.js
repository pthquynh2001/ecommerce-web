import Footer from '../../Footer';
import Header from '../../Header';

import { Fragment, useState, useEffect } from 'react';

function DefaultLayout({ children }) {
  const [scrolledToTop, setScrolledToTop] = useState(false);

  useEffect(() => {
    if (!scrolledToTop) {
      window.scrollTo(0, 0);
      setScrolledToTop(true);
    }
  }, [scrolledToTop]);
  return (
    <Fragment>
      <Header />
      <div className='container' style={{ marginTop: 'var(--header-height)' }}>
        <div className='content'>{children}</div>
      </div>
      <Footer />
    </Fragment>
  );
}
export default DefaultLayout;
