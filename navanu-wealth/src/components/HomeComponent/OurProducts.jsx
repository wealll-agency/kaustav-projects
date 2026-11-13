import React from 'react'
import rupeesicon from "../../assets/images/rupees.png";
import equity from "../../assets/images/equity.png";
import lifeinsurance from "../../assets/images/life_insurance.png";
import moneyicon from "../../assets/images/money.png";

const OurProducts = () => {
  return (
    <>
        <section className='our_products'>
            <div className='container'>
                <div className='section_title text-center'>
                    <h2>OUR FINANCIAL PRODUCTS</h2>
                    <h3>Explore our curated solutions for every financial goal.</h3>
                </div>

                <div className='row'>

                    <div className='col-lg-3 col-md-6'>
                        <div className='info_box'>
                            <img src={rupeesicon} alt="" />
                            <h4>Mutual Funds</h4>
                            <p>Access professionally managed portfolios aligned with your risk appetite.</p>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6'>
                        <div className='info_box'>
                            <img src={equity} alt="" />
                            <h4>Equities</h4>
                            <p>Invest directly in companies to build long-term wealth.</p>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6'>
                        <div className='info_box'>
                            <img src={lifeinsurance} alt="" />
                            <h4>Insurance</h4>
                            <p>Safeguard your family and future with comprehensive coverage.</p>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6'>
                        <div className='info_box'>
                            <img src={moneyicon} alt="" />
                            <h4>Fixed Deposit (FD)</h4>
                            <p>Safer investments for stability and predictable returns.</p>
                        </div>
                    </div>

                </div>
                
                <div className='center_btn text-center'>
                    <a href="#">Explore All Products <i className="fa-solid fa-angles-right"></i></a>
                </div>

            </div>
        </section>
    </>
  )
}

export default OurProducts