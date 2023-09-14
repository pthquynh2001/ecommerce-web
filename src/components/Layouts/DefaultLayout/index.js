import Header from '../components/Header';
import Footer from '../components/Footer';
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
