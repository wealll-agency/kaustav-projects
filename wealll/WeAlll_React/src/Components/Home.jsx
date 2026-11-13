import React from "react";

const Home = () => {
  return (
    <>
      <section className="banner-section">
          <div className="swiper-container slideshow">
            <div className="swiper-wrapper">
              <div className="swiper-slide slide">
                <div
                  className="slide-image"
                  style={{backgroundImage: "url('https://images.unsplash.com/photo-1538083024336-555cf8943ddc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=66b476a51b19889e13182c0e4827af18&auto=format&fit=crop&w=1950&q=80')"}}
                ></div>
                <span className="slide-title">Exotic places</span>
              </div>

              <div className="swiper-slide slide">
                <div
                  className="slide-image"
                  style={{backgroundImage: "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e07d2457879a4e15577ec75a31023e47&auto=format&fit=crop&w=2134&q=80')"}}
                ></div>
                <span className="slide-title">Meet ocean</span>
              </div>

              <div className="swiper-slide slide">
                <div
                  className="slide-image"
                  style={{backgroundImage: "url('https://images.unsplash.com/photo-1482059470115-0aadd6bf6834?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=267bba9a4e280ec64388fe8fb01e9d1b&auto=format&fit=crop&w=1950&q=80')"}}
                ></div>
                <span className="slide-title">Around the world</span>
              </div>
            </div>

            <div className="slideshow-pagination"></div>

            <div className="slideshow-navigation">
              <div className="slideshow-navigation-button prev">
                <span className="fas fa-chevron-left"></span>
              </div>
              <div className="slideshow-navigation-button next">
                <span className="fas fa-chevron-right"></span>
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default Home;
