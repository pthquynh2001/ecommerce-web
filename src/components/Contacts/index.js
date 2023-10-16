import classNames from 'classnames/bind';
import styles from './Contacts.module.scss';
// import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const Contacts = () => {
  const contactData = {
    customerCare: {
      phone: '(+44) 1234 123456',
      liveChat: "Click the 'chat with us' icon to the right",
      sms: '(+44) 1234 654321',
      email: 'wecare@lush.co.uk',
    },
    openingHours: {
      'Monday to Friday': '8:00am-7:00pm GMT',
      Saturday: '9:00am-5:00pm',
      Sunday: '10:00am-4:00pm',
      'Bank Holidays': '10:00am-4:00pm',
      "Easter Sunday, Christmas Day, New Year's Day": 'Closed',
    },
    postAddress: {
      address: 'Lush Customer Care Poole Quay',
      unit: 'Unit 21-22 Dolphin Quays',
      state: 'Poole Dorset',
      postalCode: 'BH15 1HU',
      country: 'United Kingdom',
    },
    pressOffice: {
      email: 'lushpr@lush.co.uk',
      phone: '0207 434 3948',
      markConstantineEmail: 'gina.wheatley@lush.co.uk',
    },
    lushCharity: {
      grantEmail: 'charitypot@lush.co.uk',
      phone: '(+44) 01202 641001',
    },
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('grid', 'wide')}>
          <h1 className={cx('title')}>Contact Us</h1>
          <h2>Personalised shopping and phone orders</h2>
          <p className={cx('description')}>
            You can easily contact us to place an order over the phone and even
            enjoy a personalised shopping experience with one of our expert
            Customer Care team members. Call us on{' '}
            <a href={`tel:${contactData.customerCare.phone}`}>
              {contactData.customerCare.phone}
            </a>
            .
          </p>
          <h2>Customer Care</h2>
          <p>
            Phone:{' '}
            <a href={`tel:${contactData.customerCare.phone}`}>
              {contactData.customerCare.phone}
            </a>
          </p>
          <p>
            SMS:{' '}
            <a href={`tel:${contactData.customerCare.phone}`}>
              {contactData.customerCare.sms}
            </a>
          </p>
          <p>
            Email:{' '}
            <a href={`mailto:${contactData.customerCare.email}`}>
              {contactData.customerCare.email}
            </a>
          </p>
          <h2>Opening Hours:</h2>
          {Object.entries(contactData.openingHours).map(([day, hours]) => (
            <p key={day}>
              {day}: {hours}
            </p>
          ))}
          <b>
            *** Please note our opening times vary over the festive period ***
          </b>
          <h2>Post Address:</h2>
          {Object.entries(contactData.postAddress).map(([address, info]) => (
            <p key={address}>{info}</p>
          ))}
          <h2>Press Office</h2>
          <p>
            Phone:{' '}
            <a href={`tel:${contactData.pressOffice.phone}`}>
              {contactData.pressOffice.phone}
            </a>
          </p>
          <p>
            Email:{' '}
            <a href={`mailto:${contactData.pressOffice.email}`}>
              {contactData.pressOffice.email}
            </a>
          </p>

          <p>
            For press enquiries relating to Mark Constantine OBE, please email:{' '}
            <a href={`mailto:${contactData.pressOffice.markConstantineEmail}`}>
              {contactData.pressOffice.markConstantineEmail}
            </a>
          </p>

          <h2>Lush Charity</h2>
          <p>
            Phone:{' '}
            <a href={`tel:${contactData.lushCharity.phone}`}>
              {contactData.lushCharity.phone}
            </a>
          </p>
          <p>
            If you have an enquiry about applying for a grant from Charity Pot,
            contact:
            <a href={`mailto:${contactData.lushCharity.grantEmail}`}>
              {contactData.lushCharity.grantEmail}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
