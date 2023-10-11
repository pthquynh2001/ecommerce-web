import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faX,
  faMinus,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Cart = ({ state }) => {
  const [isOpen, setIsOpen] = useState(true);

  const data = [
    {
      id: 79,
      name: 'Product Name',
      mainImg:
        'https://res.cloudinary.com/dencxhraw/image/upload/v1695927894/lush-image/new-products/49945b56be7441e6b62ad4d9942e5cdd_900x_sn0fk9.webp',
      secondImg:
        'https://res.cloudinary.com/dencxhraw/image/upload/v1695929325/lush-image/new-products/931dd95d44464cada71d5c3925c00798_900x_sepofm.webp',
      cat: 'hair',
      type: 'Shampoo',
      tagline: 'tagline',
      price: 85,
      featured: false,
      collection: '',
      scent: 'Spicy',
      keyIng: 'Citrus',
      color: 'Yellow',
    },
    {
      id: 80,
      name: 'Product Name',
      mainImg:
        'https://res.cloudinary.com/dencxhraw/image/upload/v1695929322/lush-image/new-products/0bb8983afc6f4263ab5c1bec0cf10f0a_720x_vab9vi.webp',
      secondImg:
        'https://res.cloudinary.com/dencxhraw/image/upload/v1695929325/lush-image/new-products/931dd95d44464cada71d5c3925c00798_900x_sepofm.webp',
      cat: 'hair',
      type: 'Shampoo',
      tagline: 'tagline',
      price: 1,
      featured: false,
      collection: '',
      scent: 'Fresh',
      keyIng: 'Citrus',
      color: 'Purple',
    },
  ];

  return (
    <div
      className={cx('wrapper', isOpen && state)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={cx('inner')}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={cx('header')}>
          <h2 className={cx('title')}>shopping cart</h2>
          <button
            className={cx('close-btn')}
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
        <div className={cx('content', 'divider')}>
          {data.map((product, index) => {
            return (
              <div className={cx('product')} key={index}>
                <div className={cx('row')}>
                  <div className={cx('col', 'l-4')}>
                    <div className={cx('img-holder')}>
                      <img
                        className={cx('img')}
                        alt='product-img'
                        src={product.mainImg}
                      />
                    </div>
                  </div>
                  <div className={cx('col', 'l-8')}>
                    <div className={cx('details')}>
                      <p className={cx('name')}>{product.name}</p>
                      <p className={cx('type')}>{product.type}</p>
                      <i className={cx('remove-icon')}>
                        <FontAwesomeIcon icon={faTrash} />
                      </i>
                      <div className={cx('input-wrapper', 'quantity')}>
                        <i
                          className={cx('input-icon', 'minus', 'quantity-icon')}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </i>

                        <input
                          className={cx('input-field', 'quantity-input')}
                        ></input>
                        <i
                          className={cx('input-icon', 'plus', 'quantity-icon')}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </i>
                      </div>
                      <p className={cx('price')}>${product.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={cx('footer')}>
          <div className={cx('trade')}>
            <p className={cx('title')}>Total</p>
            <p className={cx('amount')}>$100</p>
          </div>
          <p className={cx('note')}>
            Taxes and shipping fee will be calculated at checkout
          </p>
          <Link to='/cart'>
            <div className={cx('btn')} onClick={() => setIsOpen(!isOpen)}>
              <p className={cx('btn-text')}>CHECKOUT</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
