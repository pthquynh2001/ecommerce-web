import Footer from '../../Footer';
import Header from '../../Header';

import { Fragment } from 'react';

function DefaultLayout({ children }) {
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
