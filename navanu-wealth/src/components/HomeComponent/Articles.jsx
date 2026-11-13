import React from 'react'
import article1 from "../../assets/images/article1.jpg";
import article2 from "../../assets/images/article2.jpg";
import article3 from "../../assets/images/article3.jpg";
import usersmall from "../../assets/images/user_small.png";
import calendarsmall from "../../assets/images/calendar_small.png";

const Articles = () => {
  return (
    <>
        <section className='articles'>
            <div className="container">
                <div className='section_title text-center'>
                    <h2>Insights & Articles</h2>
                    <h3>Stay informed with expert knowledge and financial trends.</h3>
                </div>
                <div className="row pt-1">
                    <div className="col-lg-4">
                        <div className="single_article">
                            <div className='aricle_img'>
                                <img src={article1} alt="" />
                                <span className='small_badge'>Investment Tips</span>
                            </div>
                            <div className='article_content'>
                                <div className='article_meta'>
                                    <h6><img src={usersmall} alt="" /> Navin Jhajharia</h6>
                                    <h6><img src={calendarsmall} alt="" />January 01, 2025</h6>
                                </div>
                                <div className='main_content text-center'>
                                    <h4>5 Investment Mistakes to Avoid in 2024</h4>
                                    <p>Learn about common investment pitfalls and how to navigate market volatility with smart financial decisions.</p>
                                    <a href="#">Read More <i className="fa-solid fa-chevron-right"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single_article">
                            <div className='aricle_img'>
                                <img src={article2} alt="" />
                                <span className='small_badge'>Tax Planning</span>
                            </div>
                            <div className='article_content'>
                                <div className='article_meta'>
                                    <h6><img src={usersmall} alt="" /> Priya Sharma</h6>
                                    <h6><img src={calendarsmall} alt="" />March 12, 2025</h6>
                                </div>
                                <div className='main_content text-center'>
                                    <h4>Tax Planning Strategies for FY 2024-25</h4>
                                    <p>Maximize your tax savings with effective planning strategies and understand the latest changes in tax regulations.</p>
                                    <a href="#">Read More <i className="fa-solid fa-chevron-right"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single_article">
                            <div className='aricle_img'>
                                <img src={article3} alt="" />
                                <span className='small_badge'>Financial Planning</span>
                            </div>
                            <div className='article_content'>
                                <div className='article_meta'>
                                    <h6><img src={usersmall} alt="" /> Navin Jhajharia</h6>
                                    <h6><img src={calendarsmall} alt="" />January 01, 2025</h6>
                                </div>
                                <div className='main_content text-center'>
                                    <h4>Building Emergency Fund: Your Financial Safety Net</h4>
                                    <p>Discover why emergency funds are crucial and learn practical steps to build one that protects your family's future.</p>
                                    <a href="#">Read More <i className="fa-solid fa-chevron-right"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="center_btn text-center"><a href="#">View All Articles <i class="fa-solid fa-angles-right"></i></a></div>
            </div>
        </section>
    </>
  )
}

export default Articles