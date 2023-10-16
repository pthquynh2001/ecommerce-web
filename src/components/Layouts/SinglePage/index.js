import Footer from '../../Footer';

function SinglePage({ children }) {
  return (
    <>
      <div className='container'>
        <div className='content'>{children}</div>
      </div>
      <Footer />
    </>
  );
}
export default SinglePage;
