import React from 'react';
import Navigation from "../components/navbar";

export default function About() {
  return (
    <div>
      <Navigation/>
      <div className="about-container">
        <h2 className='AboutTitle'>About Us</h2>
        <p className='AboutText'>
          Welcome to GoGoGrocery! We are a leading online grocery shopping platform
          that aims to provide you with a convenient and seamless shopping experience.
          Our mission is to make grocery shopping easy, fast, and hassle-free for our
          valued customers.
        </p>
        <p className='AboutText'>
          At GoGoGrocery, you can find a wide range of high-quality products, including
          fresh produce, pantry essentials, household items, and more. We work with
          trusted suppliers to ensure that you receive the best products right at your
          doorstep.
        </p>
        <p className='AboutText'>
          Our user-friendly website allows you to browse through various categories,
          add items to your cart, and make secure payments. We also offer timely
          delivery options to fit your schedule, making your shopping experience
          convenient and enjoyable.
        </p>
        <p className='AboutText'>
          Thank you for choosing GoGoGrocery for your grocery needs. We value your
          feedback and suggestions to continually improve our services. If you have
          any questions or need assistance, please don't hesitate to contact our
          customer support team.
        </p>
      </div>
    </div>
  );
}
