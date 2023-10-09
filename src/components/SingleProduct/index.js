import classNames from 'classnames/bind';
import styles from './SingleProduct.module.scss';
import Explore from './Explore';
import { useState, useEffect, useMemo, useRef } from 'react';
import { getProducts } from '../api/getAPIs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

const SingleProduct = ({ id }) => {
  // const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [selectedImg, setSelectedImg] = useState('');
  const [quantityValue, setQuantityValue] = useState(1);
  // const magnifyRef = useRef();
  const selectedImgRef = useRef();
  const zoomImgRef = useRef();

  const params = useMemo(() => {
    return {
      page: 1,
      limit: 1,
      id: id,
    };
  }, [id]);

  // START: fetch API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // setLoading(true);
        const [data] = await getProducts(params);
        // setLoading(false);
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [params]);
  // EMD: fetch API

  //START: thay doi main img khi chon thumb img
  useEffect(() => setSelectedImg(product.mainImg), [product]);
  //END: thay doi main img khi chon thumb img

  // START: thay doi nhap so san pham bang ban phim
  const handleQuantityInput = (e) => {
    const newValue = Math.max(e.target.value, 1);
    setQuantityValue(newValue);
  };
  // END: thay doi nhap so san pham bang ban phim

  // START: zoom anh khi hover
  if (selectedImgRef.current && zoomImgRef.current) {
    selectedImgRef.current.addEventListener('mousemove', (e) => {
      const diffX = (70 * e.offsetX) / e.target.width;
      const diffY = (70 * e.offsetY) / e.target.height;
      zoomImgRef.current.style.display = 'block';
      zoomImgRef.current.style.setProperty('--zoom-t', diffY + '%');
      zoomImgRef.current.style.setProperty('--zoom-b', 70 - diffY + '%');
      zoomImgRef.current.style.setProperty('--zoom-l', diffX + '%');
      zoomImgRef.current.style.setProperty('--zoom-r', 70 - diffX + '%');
      zoomImgRef.current.style.transform = `scale(1.5) translateX(${
        -diffX / 15
      }%) translateY(${-diffY / 15}%)
      `;
    });
    selectedImgRef.current.addEventListener('mouseout', () => {
      zoomImgRef.current.style.display = 'none';
    });
  }

  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('grid', 'wide')}>
          <div className={cx('row')}>
            <div className={cx('col', 'l-7')}>
              <div className={cx('gallery')}>
                <div className={cx('row')}>
                  <div className={cx('col', 'l-2')}>
                    <div className={cx('thumbs')}>
                      <img
                        className={cx('thumb-img', {
                          'selected-thumb': selectedImg === product.mainImg,
                        })}
                        alt='thumb-img'
                        src={product.mainImg}
                        onClick={() => {
                          setSelectedImg(product.mainImg);
                        }}
                      />
                      <img
                        className={cx('thumb-img', {
                          'selected-thumb': selectedImg === product.secondImg,
                        })}
                        alt='thumb-img'
                        src={product.secondImg}
                        onClick={() => {
                          setSelectedImg(product.secondImg);
                        }}
                      />
                    </div>
                  </div>
                  <div className={cx('col', 'l-10')}>
                    <div className={cx('selected')}>
                      <img
                        className={cx('selected-img')}
                        alt='selected-img'
                        src={selectedImg}
                        // onMouseMove={(e) => handleZoom(e)}
                        ref={selectedImgRef}
                      />
                      <div className={cx('holder')}></div>
                      <img
                        className={cx('zoom-img')}
                        alt='selected-img'
                        src={selectedImg}
                        ref={zoomImgRef}
                      />

                      {/* <div className={cx('magnify')} ref={magnifyRef}></div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={cx('col', 'l-5')}>
              <div className={cx('product-summary')}>
                <h1 className={cx('name')}>{product.name}</h1>
                <p className={cx('type')}>
                  {product.cat} Product - {product.type}
                </p>
                <p className={cx('tagline')}>{product.tagline}</p>
                <p className={cx('feature')}>
                  Embrace the jolly jostle of festive fragrances, and indulge in
                  this oil-rich soap made with golden caster sugar syrup that
                  creates a decadent lather. Cleansing suds burst with Brazilian
                  orange oil, warming olibanum oil, and woody clove bud oil.
                </p>
                <p className={cx('price')}>${product.price}</p>
              </div>
              <div className={cx('cart')}>
                <div className={cx('quantity', 'input-wrapper')}>
                  <i
                    className={cx('input-icon', 'minus')}
                    onClick={() =>
                      setQuantityValue((prev) => (prev > 1 ? prev - 1 : 1))
                    }
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </i>
                  <input
                    type='number'
                    min={1}
                    value={quantityValue}
                    className={cx('input-field')}
                    onInput={(e) => handleQuantityInput(e)}
                  />
                  <i
                    className={cx('input-icon', 'plus')}
                    onClick={() => setQuantityValue((prev) => prev + 1)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </i>
                </div>
                <button className={cx('btn', 'cart-btn')}>
                  <span className={cx('btn-text', 'cart-btn-text')}>
                    Add to cart
                  </span>
                </button>
              </div>
              <div className={cx('description', 'divider')}>
                <h2 className={cx('desc-title')}>description</h2>
                <p className={cx('sub-title')}>Ingredients:</p>{' '}
                <p>
                  Rapeseed Oil; Coconut Oil (Brassica napus; Cocos nucifera),
                  Golden Caster Sugar Syrup, Propylene Glycol, Glycerine, Water
                  (Aqua), Perfume, Golden Linseeds (Linum usitatissimum), Extra
                  Virgin Coconut Oil (Cocos nucifera), Cinnamon Leaf Oil
                  (Cinnamomum zeylanicum), Clove Bud Oil (Eugenia caryophyllus),
                  Olibanum Oil (Boswellia carterii), Brazilian Orange Oil
                  (Citrus sinensis), Titanium Dioxide, Sodium Chloride, Citric
                  Acid, Synthetic Fluorphlogopite, Sodium Hydroxide, Sodium
                  Bicarbonate, Tin Oxide, EDTA, Tetrasodium Etidronate, Silica,
                  *Citral, *Eugenol, *Limonene, *Linalool, Colour 77491, *
                  Occurs naturally in essential oils
                </p>
                <p className={cx('sub-title')}>How to use:</p>
                <p>Lather up between your hands, cleanse, and rinse.</p>
                <p className={cx('sub-title')}>How to store:</p>
                <p>
                  Keep your soap by the side of the sink or shower in a dry
                  place, until you're ready to hold this gold!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Explore />
    </>
  );
};

export default SingleProduct;
