import React from 'react'
import rightimg from "../../assets/images/right_img.png";
import tickicon from "../../assets/images/tick_icon.png";
const Whoweare = () => {
  return (
    <>
        <section className='who_we_are'>
            <div className='container'>
                <div className='section_title text-center'>
                    <h3>WHO WE ARE</h3>
                    <h4>About Navanu Wealth</h4>
                </div>
                <div className='row two_col_row align-items-center'>
                    <div className='col-md-6'>
                        <div className='col_left'>
                            <h3>Guiding individuals and businesses toward financial prosperity with expertise and integrity</h3>
                            <p>Navanu is a professional wealth advisory firm dedicated to simple, unbiased, and client-first financial guidance. We help individuals and businesses create and safeguard wealth with integrity and expertise.</p>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='col_right'>
                            <div className='right_img'>
                                <img src={rightimg} alt="" />
                                <div className='top_title'>
                                    <img src={tickicon} alt="" /> Transparency 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Whoweare