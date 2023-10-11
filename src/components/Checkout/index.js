import classNames from 'classnames/bind';
import styles from './Checkout.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

// import { useState } from 'react';
// import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Checkout = () => {
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
    <div className={cx('wrapper')}>
      <div>
        <div className={cx('row')}>
          {/* START LEFT SIDE */}
          <div className={cx('col', 'l-7')}>
            <div className={cx('checkout')}>
              {/* start: left - information form */}
              <div className={cx('checkout-section')}>
                <h2 className={cx('section-title')}>Information</h2>
                <form className={cx('information-form')}>
                  <div className={cx('contact')}>
                    <h3>Contact</h3>
                    <label htmlFor='email-input' className={cx('input-label')}>
                      <input
                        required
                        id='email-input'
                        type='email'
                        className={cx('text-input')}
                      />
                      <span className={cx('placeholder')}>Email</span>
                    </label>
                    <label
                      htmlFor='check-input'
                      className={cx('input-label', 'check-label')}
                    >
                      <input
                        required
                        id='check-input'
                        type='checkBox'
                        className={cx('check-input')}
                      />
                      <span className={cx('checkmark')}>
                        <i className={cx('checkmark-icon')}>
                          <FontAwesomeIcon icon={faCheck} />
                        </i>
                      </span>
                      <span className={cx('check-text')}>
                        Subscribe to receive exclusive offers and order status
                        updates
                      </span>
                    </label>
                  </div>
                  <div className={cx('delivery-address')}>
                    <h3>Delivery Address</h3>
                    <div className={cx('row')}>
                      <div className={cx('col', 'l-6')}>
                        <label
                          htmlFor='first-name-input'
                          className={cx('input-label')}
                        >
                          <input
                            required
                            id='first-name-input'
                            type='text'
                            className={cx('text-input')}
                          />
                          <span className={cx('placeholder')}>First name</span>
                        </label>
                      </div>
                      <div className={cx('col', 'l-6')}>
                        <label
                          htmlFor='last-name-input'
                          className={cx('input-label')}
                        >
                          <input
                            required
                            id='last-name-input'
                            type='text'
                            className={cx('text-input')}
                          />
                          <span className={cx('placeholder')}>Last name</span>
                        </label>
                      </div>
                    </div>
                    <label htmlFor='phone-input' className={cx('input-label')}>
                      <input
                        required
                        id='phone-input'
                        type='text'
                        className={cx('text-input')}
                      />
                      <span className={cx('placeholder')}>Phone number</span>
                    </label>
                    <label
                      htmlFor='country-input'
                      className={cx('input-label')}
                    >
                      <input
                        required
                        id='country-input'
                        type='text'
                        className={cx('text-input')}
                      />
                      <span className={cx('placeholder')}>Country/Region</span>
                    </label>

                    <div className={cx('row')}>
                      <div className={cx('col', 'l-6')}>
                        <label
                          htmlFor='province-input'
                          className={cx('input-label')}
                        >
                          <input
                            required
                            id='province-input'
                            type='text'
                            className={cx('text-input')}
                          />
                          <span className={cx('placeholder')}>Province</span>
                        </label>
                      </div>
                      <div className={cx('col', 'l-6')}>
                        <label
                          htmlFor='city-input'
                          className={cx('input-label')}
                        >
                          <input
                            required
                            id='city-input'
                            type='text'
                            className={cx('text-input')}
                          />
                          <span className={cx('placeholder')}>City</span>
                        </label>
                      </div>
                    </div>
                    <label htmlFor='street-input' className={cx('input-label')}>
                      <input
                        required
                        id='street-input'
                        type='text'
                        className={cx('text-input')}
                      />
                      <span className={cx('placeholder')}>Street</span>
                    </label>
                    <label
                      htmlFor='postcode-input'
                      className={cx('input-label')}
                    >
                      <input
                        required
                        id='postcode-input'
                        type='text'
                        className={cx('text-input')}
                      />
                      <span className={cx('placeholder')}>Postcode</span>
                    </label>
                  </div>
                  <div className={cx('remark')}>
                    <h3>Remark (optional)</h3>
                    <label htmlFor='remark-input' className={cx('input-label')}>
                      <input
                        id='remark-input'
                        type='text'
                        className={cx('text-input')}
                      />
                      <span className={cx('placeholder')}>Remark</span>
                    </label>
                  </div>
                </form>
              </div>
              {/* end: left - information form */}

              {/* start: left - delivery method form */}
              <div className={cx('checkout-section')}>
                <h2 className={cx('section-title')}>Delivery Method</h2>
                <form className={cx('delivery-form')}>
                  <div className={cx('delivery-method')}>
                    <label
                      htmlFor='delivery-method-input-1'
                      className={cx('radio-label')}
                    >
                      <input
                        id='delivery-method-input-1'
                        className={cx('radio-input')}
                        type='radio'
                      />
                      <span className={cx('radio-title')}>
                        Standard Delivery (Ninjavan)
                      </span>
                      <span className={cx('radiomark')}></span>
                      <span className={cx('method-charge')}>$6</span>
                    </label>
                    <div className={cx('description')}>
                      Order cut off time is 10am Mondays to Saturdays (excluding
                      PH). Delivery takes 1-4 working days. Delivery time varies
                      and cannot be specified. There are no deliveries on
                      Sundays and PH. Standard Delivery is free for orders over
                      $60.
                    </div>
                  </div>
                  <div
                    className={cx('delivery-method', 'delivery-method--active')}
                    //'delivery-method--active'
                  >
                    <label
                      htmlFor='delivery-method-input-2'
                      className={cx('radio-label')}
                    >
                      <input
                        id='delivery-method-input-2'
                        type='radio'
                        className={cx('radio-input')}
                        defaultChecked
                      />
                      <span className={cx('radio-title')}>
                        Express Courier (Next Day Delivery)
                      </span>
                      <span className={cx('method-charge')}>$10</span>
                      <span className={cx('radiomark')}></span>
                    </label>
                    <div className={cx('description')}>
                      Orders made before 10am on Mon-Sat(excluding PH) will be
                      delivered between 12noon-11pm of that day. Orders made
                      after 10am on Mon-Sat(excluding PH) will be delivered
                      between 12noon-11pm of the next working day. There are no
                      deliveries on Sundays and PH. Express Courier is free for
                      orders over $200.
                    </div>
                  </div>
                </form>
              </div>
              {/* end: left - delivery method form */}

              {/* start: left - payment  form */}
              <div className={cx('checkout-section')}>
                <h2 className={cx('section-title')}>Payment Method</h2>
                <div className={cx('payment-method', 'payment-method--active')}>
                  <label
                    htmlFor='payment-method-input-1'
                    className={cx('radio-label')}
                  >
                    <input
                      id='payment-method-input-1'
                      type='radio'
                      className={cx('radio-input')}
                      defaultChecked
                    />
                    <span className={cx('radio-title')}>
                      Credit or Debit card
                    </span>
                    <span className={cx('radiomark')}></span>
                  </label>
                  <i className={cx('card-icon')}></i>
                  <form className={cx('payment-form', 'payment-content')}>
                    <label
                      htmlFor='card-name-input'
                      className={cx('input-label')}
                    >
                      <input
                        required
                        id='card-name-input'
                        type='text'
                        className={cx('text-input')}
                      />
                      <span className={cx('placeholder')}>Name on card</span>
                    </label>
                    <label
                      htmlFor='card-number-input'
                      className={cx('input-label')}
                    >
                      <input
                        required
                        id='card-number-input'
                        type='number'
                        className={cx('text-input')}
                      />
                      <span className={cx('placeholder')}>Card number</span>
                    </label>
                    <div className={cx('row')}>
                      <div className={cx('col', 'l-6')}>
                        <label
                          htmlFor='card-expiry-input'
                          className={cx('input-label')}
                        >
                          <input
                            required
                            id='card-expiry-input'
                            type='number'
                            className={cx('text-input')}
                          />
                          <span className={cx('placeholder')}>Expiry day</span>
                        </label>
                      </div>
                      <div className={cx('col', 'l-6')}>
                        <label
                          htmlFor='card-security-input'
                          className={cx('input-label')}
                        >
                          <input
                            required
                            id='card-security-input'
                            type='number'
                            className={cx('text-input')}
                          />
                          <span className={cx('placeholder')}>
                            Security code
                          </span>
                        </label>
                      </div>
                    </div>
                    <input
                      type='submit'
                      className={cx('btn', 'card-submit-btn', 'btn-shadow')}
                      value='Pay $120'
                    />
                  </form>
                </div>

                <div className={cx('payment-method')}>
                  <label
                    htmlFor='payment-method-input-2'
                    className={cx('radio-label')}
                  >
                    <input
                      id='payment-method-input-2'
                      type='radio'
                      className={cx('radio-input')}
                    />
                    <span className={cx('radio-title')}>Paypal</span>
                    <span className={cx('radiomark')}></span>
                  </label>
                  <i className={cx('card-icon')}></i>
                  <div className={cx('payment-content')}>
                    <button
                      className={cx('btn', 'paypal-submit-btn', 'btn-shadow')}
                    >
                      <p>Paypal</p>
                    </button>
                  </div>
                </div>
              </div>
              {/* end: left - payment  form */}
            </div>
          </div>
          {/* END LEFT SIDE*/}

          {/* START RIGHT SIDE */}
          <div className={cx('col', 'l-5')}>
            <div className={cx('cart-section')}>
              <div className={cx('cart-review')}>
                <h2>Summary & Review</h2>
                <p>2 items</p>
                <div className={cx('products')}>
                  {data.map((product, index) => {
                    return (
                      <div className={cx('product-card')} key={index}>
                        <div className={cx('row')}>
                          <div className={cx('col', 'l-4')}>
                            <div className={cx('img-holder')}>
                              <img
                                alt='product-img'
                                className={cx('product-img')}
                                src={product.mainImg}
                              />
                            </div>
                          </div>
                          <div className={cx('col', 'l-8')}>
                            <div className={cx('details')}>
                              <p className={cx('product-name')}>
                                {product.name}
                              </p>
                              <p className={cx('product-type')}>
                                {product.type}
                              </p>
                              <p className={cx('product-qty')}>QTY: 2</p>
                              <p className={cx('product-price')}>
                                ${product.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className={cx('trade-summation')}>
                  <div className={cx('subtotal')}>
                    <p className={cx('title')}>Subtotal</p>
                    <p className={cx('charge')}>$14.00</p>
                  </div>
                  <div className={cx('subtotal')}>
                    <p className={cx('title')}>Delivery</p>
                    <p className={cx('charge')}>$12.00</p>
                  </div>
                  <div className={cx('total')}>
                    <p className={cx('title')}>Total</p>
                    <p className={cx('charge')}>$25.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
