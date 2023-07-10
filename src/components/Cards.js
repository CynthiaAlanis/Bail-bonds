import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our Services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/payment.png'
              text='Check out our prices'
              label='prices'
              path='/services'
            />
            <CardItem
              src='images/Reliable.png'
              text='Reliable'
              label='Trusting'
              path='/services'
            />
            <CardItem
              src='images/Affordable.jpg'
              text='Affordable'
              label='Affordable'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Contact.png'
              text='Contact Us'
              label='Contact'
              path='/about'
            />
            <CardItem
              src='images/About.png'
              text='420 Bail Bonds has been around since'
              label='About'
              path='/products'
            />
            <CardItem
              src='images/payment.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
