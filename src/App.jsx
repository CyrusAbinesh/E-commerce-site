import React from 'react';
import './App.css';
import '../src/scss/styles.scss';
import Navbar from './Navbar/Navbar';
import air from './assets/ef9b84918ccb83fd.webp';
import ear from './assets/b35a105fe8bc8cbb.webp';
import iphone from './assets/iPhone-15-Pro-review-6.webp';
import green from './assets/e7554fcdb3042316.webp';
import tv from './assets/ab9ccf8a8ad6a05f.webp';
import mac from './assets/boliviainteligente-vuXB9cnf1Ts-unsplash.jpg';
import shoe from './assets/xavier-teo-SxAXphIPWeg-unsplash.jpg';
import print from './assets/mahrous-houses-5AoOejjRUrA-unsplash.jpg';
import speaker from './assets/jonathan-borba-JrjA12c-4Hg-unsplash.jpg';
import watch from './assets/al-amin-mir-TJ48QfPfMHI-unsplash.jpg';
import cam from './assets/robert-shunev-mS1nlYbq1kA-unsplash.jpg';
import glass from './assets/sabri-tuzcu-kxR3hh0IRHU-unsplash.jpg';
function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />

        {/* Carousel Section */}
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={green} className="d-block w-100" alt="Green Image" />
              <div className="carousel-caption d-none d-md-block">
              
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={tv} className="d-block w-100" alt="TV Image" />
              <div className="carousel-caption d-none d-md-block">
               
              </div>
            </div>
            <div className="carousel-item">
              <img src={ear} className="d-block w-100" alt="Earphones Image" />
              <div className="carousel-caption d-none d-md-block">
               
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Featured Products Section */}
        <section className="featured-products mt-4 mb-5">
          <h2 className="section-title text-center">Featured Products</h2>
          <div className="row mt-4">
            {/* Four cards in each row */}
            {[shoe, iphone, mac, print, cam, glass, speaker, watch ].map((image, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="card">
                  <img src={image} className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <h5 className="card-title">Product Title {index + 1}</h5>
                    <p className="card-text">
                      This is a description of the product. It has great features that you will love.
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials bg-gradient-violet-blue text-white py-5">
          <h2 className="section-title text-center">What Our Customers Say</h2>
          <div className="testimonials-container mt-4 d-flex justify-content-around">
            <div className="testimonial-card p-4">
              <p>
                "Amazing service and quality! I love my new phone, and the support was outstanding."
              </p>
              <p className="testimonial-name">- Jane Doe</p>
            </div>
            <div className="testimonial-card p-4">
              <p>
                "The wireless earbuds are top-notch. Excellent sound quality and fast delivery."
              </p>
              <p className="testimonial-name">- John Smith</p>
            </div>
            <div className="testimonial-card p-4">
              <p>
                "Great experience! The smart TV has stunning visuals and fantastic features."
              </p>
              <p className="testimonial-name">- Emily Clark</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer bg-dark text-white text-center py-4">
          <p>© 2024 Treeko. All rights reserved.</p>
          <p>Follow us on:</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
