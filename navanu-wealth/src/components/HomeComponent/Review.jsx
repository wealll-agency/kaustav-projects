import React, { useEffect } from 'react'
import clientpic from "../../assets/images/client_pic.png";



const Review = () => {

    useEffect(()=>{
             // Wait until jQuery is loaded and DOM is ready
        setTimeout(() => {
          if (window.$) {
            window.$(".review-carousel").owlCarousel({
            items: 2.5,
            loop: true,
            margin: 20,
            nav: true,
            dots: true,
            autoplay: true,
            autoplayTimeout:2000,
            navText: ['<i className="fa-solid fa-chevron-left"></i>', '<i className="fa-solid fa-chevron-right"></i>'],
            responsive: {
            0: { items: 1 },
            768: { items: 2.5 }
        }
           
        });
    
          }
        }, 100);
    
        },[])

  return (
    <>
        <section className='client_review'>
            <div className="container">
                <div className='section_title text-center'>
                    <h2>Insights & Articles</h2>
                    <h3>Stay informed with expert knowledge and financial trends.</h3>
                </div>
                <div className="owl-carousel owl-theme review-carousel">
                    <div className="single-review">
                        <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <p>"Nauvana helped me plan for my daughter's education and our retirement simultaneously. Their systematic approach and regular monitoring give me complete peace of mind."</p>
                        <div className='review_meta'>
                            <div className='image'>
                                <img src={clientpic} alt="" />
                            </div>
                            <div className='content'>
                                <h5>Swati Arora</h5>
                                <span>Business Owner, Kolkata</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-review">
                        <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <p>“Navanu transformed the way I think about investments. Their advice is always transparent and effective.”</p>
                        <div className='review_meta'>
                            <div className='image'>
                                <img src={clientpic} alt="" />
                            </div>
                            <div className='content'>
                                <h5>Priyansh Sharma</h5>
                                <span>Small Business Owner, Kolkata</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-review">
                        <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <p>"Started my investment journey with Nauvana 3 years ago. Their disciplined SIP approach and smart fund selection have helped me accumulate ₹5 lakhs already. Excellent service!"</p>
                        <div className='review_meta'>
                            <div className='image'>
                                <img src={clientpic} alt="" />
                            </div>
                            <div className='content'>
                                <h5>Vivek Saraf</h5>
                                <span>Entrepreneur, Mumbai </span>
                            </div>
                        </div>
                    </div>

                    <div className="single-review">
                        <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <p>"Nauvana helped me plan for my daughter's education and our retirement simultaneously. Their systematic approach and regular monitoring give me complete peace of mind."</p>
                        <div className='review_meta'>
                            <div className='image'>
                                <img src={clientpic} alt="" />
                            </div>
                            <div className='content'>
                                <h5>Swati Arora</h5>
                                <span>Business Owner, Kolkata</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-review">
                        <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <p>“Navanu transformed the way I think about investments. Their advice is always transparent and effective.”</p>
                        <div className='review_meta'>
                            <div className='image'>
                                <img src={clientpic} alt="" />
                            </div>
                            <div className='content'>
                                <h5>Priyansh Sharma</h5>
                                <span>Small Business Owner, Kolkata</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-review">
                        <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <p>"Started my investment journey with Nauvana 3 years ago. Their disciplined SIP approach and smart fund selection have helped me accumulate ₹5 lakhs already. Excellent service!"</p>
                        <div className='review_meta'>
                            <div className='image'>
                                <img src={clientpic} alt="" />
                            </div>
                            <div className='content'>
                                <h5>Vivek Saraf</h5>
                                <span>Entrepreneur, Mumbai </span>
                            </div>
                        </div>
                    </div>

                    <div className="single-review">
                        <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <p>"Nauvana helped me plan for my daughter's education and our retirement simultaneously. Their systematic approach and regular monitoring give me complete peace of mind."</p>
                        <div className='review_meta'>
                            <div className='image'>
                                <img src={clientpic} alt="" />
                            </div>
                            <div className='content'>
                                <h5>Swati Arora</h5>
                                <span>Business Owner, Kolkata</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-review">
                        <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <p>“Navanu transformed the way I think about investments. Their advice is always transparent and effective.”</p>
                        <div className='review_meta'>
                            <div className='image'>
                                <img src={clientpic} alt="" />
                            </div>
                            <div className='content'>
                                <h5>Priyansh Sharma</h5>
                                <span>Small Business Owner, Kolkata</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-review">
                        <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <p>"Started my investment journey with Nauvana 3 years ago. Their disciplined SIP approach and smart fund selection have helped me accumulate ₹5 lakhs already. Excellent service!"</p>
                        <div className='review_meta'>
                            <div className='image'>
                                <img src={clientpic} alt="" />
                            </div>
                            <div className='content'>
                                <h5>Vivek Saraf</h5>
                                <span>Entrepreneur, Mumbai </span>
                            </div>
                        </div>
                    </div>

                    <div className="single-review">
                        <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <p>"Nauvana helped me plan for my daughter's education and our retirement simultaneously. Their systematic approach and regular monitoring give me complete peace of mind."</p>
                        <div className='review_meta'>
                            <div className='image'>
                                <img src={clientpic} alt="" />
                            </div>
                            <div className='content'>
                                <h5>Swati Arora</h5>
                                <span>Business Owner, Kolkata</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-review">
                        <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <p>“Navanu transformed the way I think about investments. Their advice is always transparent and effective.”</p>
                        <div className='review_meta'>
                            <div className='image'>
                                <img src={clientpic} alt="" />
                            </div>
                            <div className='content'>
                                <h5>Priyansh Sharma</h5>
                                <span>Small Business Owner, Kolkata</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-review">
                        <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <p>"Started my investment journey with Nauvana 3 years ago. Their disciplined SIP approach and smart fund selection have helped me accumulate ₹5 lakhs already. Excellent service!"</p>
                        <div className='review_meta'>
                            <div className='image'>
                                <img src={clientpic} alt="" />
                            </div>
                            <div className='content'>
                                <h5>Vivek Saraf</h5>
                                <span>Entrepreneur, Mumbai </span>
                            </div>
                        </div>
                    </div>

                    <div className="single-review">
                        <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <p>"Nauvana helped me plan for my daughter's education and our retirement simultaneously. Their systematic approach and regular monitoring give me complete peace of mind."</p>
                        <div className='review_meta'>
                            <div className='image'>
                                <img src={clientpic} alt="" />
                            </div>
                            <div className='content'>
                                <h5>Swati Arora</h5>
                                <span>Business Owner, Kolkata</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-review">
                        <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <p>“Navanu transformed the way I think about investments. Their advice is always transparent and effective.”</p>
                        <div className='review_meta'>
                            <div className='image'>
                                <img src={clientpic} alt="" />
                            </div>
                            <div className='content'>
                                <h5>Priyansh Sharma</h5>
                                <span>Small Business Owner, Kolkata</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-review">
                        <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <p>"Started my investment journey with Nauvana 3 years ago. Their disciplined SIP approach and smart fund selection have helped me accumulate ₹5 lakhs already. Excellent service!"</p>
                        <div className='review_meta'>
                            <div className='image'>
                                <img src={clientpic} alt="" />
                            </div>
                            <div className='content'>
                                <h5>Vivek Saraf</h5>
                                <span>Entrepreneur, Mumbai </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default Review