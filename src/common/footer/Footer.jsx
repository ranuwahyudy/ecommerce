import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box footer-brand">
            <h1>Erigo Store</h1>
            <p>
              Erigo is an Indonesian developing fashion brand which propose high
              quality and design in order to support your traveling and daily
              needs. In Indonesia, Erigo has been one of the best, high quality
              and reliable clothing line in market.
            </p>
          </div>

          <div className="box">
            <h2>Help</h2>
            <ul>
              <li>Exchanges & Returns</li>
              <li>Payment Information</li>
              <li>Track Your Order</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="box">
            <h2>Business</h2>
            <ul>
              <li>About Us</li>
              <li>Pop-up Store</li>
              <li>Careers</li>
              <li>News</li>
            </ul>
          </div>
          <div className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>
                Jalan Legok Raya Erigo Fulfilment Center Legok, Banten 15820, ID
              </li>
              <li>Email: hello@erigostore.co.id</li>
              <li>Phone: (021) 7824262</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
