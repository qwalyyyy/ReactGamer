import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Redirect} from 'react-router-dom';
import { faChevronLeft, faChevronRight, faKey, faRocket, faUsers } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import goat from './images/goat.jpeg';
import fall from './images/fall.jpg';
import rocket from './images/rocket.jpg';
import freeToPlay from './images/free.jpg';
import payToPlay from './images/pay.jpg';

class Home extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
     
      <div className="home-container">
        <div className="slider-container">
          <Slider ref={(slider) => (this.slider = slider)} {...settings}>
            <div>
              <div className="image-wrapper">
                <img src={goat} alt="goat" className="slider-image" />
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="slider-arrow prev"
                  onClick={() => this.slider.slickPrev()}
                />
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="slider-arrow next"
                  onClick={() => this.slider.slickNext()}
                />
              </div>
            </div>
            <div>
              <div className="image-wrapper">
                <img src={fall} alt="fall" className="slider-image" />
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="slider-arrow prev"
                  onClick={() => this.slider.slickPrev()}
                />
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="slider-arrow next"
                  onClick={() => this.slider.slickNext()}
                />
              </div>
            </div>
            <div>
              <div className="image-wrapper">
                <img src={rocket} alt="rocket" className="slider-image" />
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="slider-arrow prev"
                  onClick={() => this.slider.slickPrev()}
                />
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="slider-arrow next"
                  onClick={() => this.slider.slickNext()}
                />
              </div>
            </div>
          </Slider>
        </div>

        <div className="button-images-container">
          <div className="button-image-wrapper">
            <Link to="/free-to-play" className="image-button" style={{ backgroundImage: `url(${freeToPlay})` }}>
              <span className="button-text">MARKET</span>
            </Link>
          </div>
          <div className="button-image-wrapper">
            <Link to="/pay-to-play" className="image-button" style={{ backgroundImage: `url(${payToPlay})` }}>
              <span className="button-text">PLAYLIST</span>
            </Link>
          </div>
        </div>

        <div className="key-features">
          <h2>Key Features</h2>
          <div className="feature">
            <FontAwesomeIcon icon={faKey} className="feature-icon" />
            <h3>Feature One</h3>
            <p>Some description about feature one.</p>
          </div>
          <div className="feature">
            <FontAwesomeIcon icon={faRocket} className="feature-icon" />
            <h3>Feature Two</h3>
            <p>Some description about feature two.</p>
          </div>
          <div className="feature">
            <FontAwesomeIcon icon={faUsers} className="feature-icon" />
            <h3>Feature Three</h3>
            <p>Some description about feature three.</p>
          </div>
        </div>

        <div className="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonial">
            <p>"This is the best service ever!"</p>
            <p className="author">- John Doe</p>
          </div>
          <div className="testimonial">
            <p>"Absolutely wonderful experience!"</p>
            <p className="author">- Jane Smith</p>
          </div>
          <div className="testimonial">
            <p>"I love this platform!"</p>
            <p className="author">- Emily Johnson</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
