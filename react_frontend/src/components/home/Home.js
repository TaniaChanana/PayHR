import React from 'react';
import './Home.css';
import Header from '../header/Header';
import bgimage from '../../images/hr-portal.png';
import aboutimage from '../../images/about.png';
import contactimage from '../../images/contact.png';

import { Link } from 'react-router-dom';
function Home() {
    return (
        <>
            <div className="home">
                <Header />
                <div id = 'home' className='d-flex align-items-center justify-content-between container pt-4 home-container'>
                    <div className='home-details'>
                        <h1 class="display-3 text-center text-md-start">
                            Welcome to <br /> <span class="text-primary">PayHR</span>.
                        </h1>
                        <h4 class="display-6 text-center text-md-start">
                            Smile, you’ve found us..
                        </h4>
                        <p class="lead text-center text-md-start text-muted mb-6 mb-lg-8">
                            Take the mystery out of selecting and developing leaders.
                        </p>

                    </div>
                    <img src={bgimage} alt="" />
                </div>
               
                <div id = 'about' className='about py-5 my-3 d-flex flex-column align-items-center'>
                    <h1 class="display-3 text-md-start text-primary my-4" >About</h1>
                    <div className='d-flex justify-content-between align-items-center'>
                        <img src={aboutimage} alt = ""/>
                        <p className='lead text-center text-md-start text-muted mb-6 mb-lg-8'>Pay HR :
                        Managing human resources for your small business can be complicated and time-consuming.
                         If you’re a small business owner, or a finance or HR manager, we suggest checking out 
                         our Genesis HR website. It is chock-full of helpful resources, HR templates, and 
                         actionable blog posts for your small business—and everyone from the owner, to the 
                         HR manager, to the vice president of finance will find valuable information. Even if
                          you’re not working with us, you can still take advantage of our expertise through our 
                          weekly PEO blog that addresses common HR questions and pain points; our social 
                          presence on Twitter and LinkedIn; and free resources like templates and guides.
                    </p>
                    </div>
                </div>

                <div id = 'services' className='service py-5 my-3 d-flex flex-column align-items-center'>
                    <h1 class="display-3 text-md-start text-primary my-4">Services</h1>
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-md-4 aos-init aos-animate" data-aos="fade-up">
                                <div class="icon text-primary mb-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M7 3h10a4 4 0 110 8H7a4 4 0 110-8zm0 6a2 2 0 100-4 2 2 0 000 4z" fill="#335EEA"></path><path d="M7 13h10a4 4 0 110 8H7a4 4 0 110-8zm10 6a2 2 0 100-4 2 2 0 000 4z" fill="#335EEA" opacity=".3"></path></g></svg>            </div>

                                <h3>
                                    Built for Employees
                                </h3>
                                <p class="text-muted mb-6 mb-md-0">
                                    Employees can view their salaries and also can view his/her profile.
                                </p>

                            </div>
                            
                            <div class="col-12 col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

                                <div class="icon text-primary mb-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z" fill="#335EEA"></path><rect fill="#335EEA" opacity=".3" transform="rotate(15 12 12)" x="11" y="4" width="2" height="16" rx="1"></rect></g></svg>            </div>

                                <h3>
                                    Built for HR
                                </h3>
                                <p class="text-muted mb-0">
                                HR can add, update and delete any employee or can add the salaries 
                                </p>

                            </div>

                            <div class="col-12 col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

                                <div class="icon text-primary mb-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z" fill="#335EEA"></path><rect fill="#335EEA" opacity=".3" transform="rotate(15 12 12)" x="11" y="4" width="2" height="16" rx="1"></rect></g></svg>            </div>

                                <h3>
                                    Built for Companies
                                </h3>
                                <p class="text-muted mb-0">
                               Companies can maintain their employees information
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
        

                <div id = 'contact' className='contact py-5 my-3 d-flex flex-column align-items-center'>
                    <h1 class="display-3 text-md-start text-primary my-4">Contact Us</h1>
                    <div className='d-flex justify-content-center align-items-center contact-container'>
                        <img src={contactimage} alt = ""/>
                        <form className='form-container'>
                            <div class="form-group">
                                <label for="exampleInputEmail1" className='mb-2'>Email address</label>
                                <input type="email" class="form-control mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1" className='mb-2'>Name</label>
                                <input type="text" class="form-control mb-2" id="exampleInputName1" placeholder="Enter name" />
                            </div>

                            <div class="form-group">
                                <label for="exampleInputMessage1" className='mb-2'>Message</label>
                                <textarea rows={5} type="text" class="form-control mb-2" id="exampleInputMessage1" placeholder="Enter Message" />
                            </div>

                            <button type="submit" class="btn btn-primary ">Submit</button>
                        </form>
                    </div>
                </div>



                <footer class="footer py-8 py-md-11 bg-gray-200">
                    <p>© Copyright 2022</p>
                </footer>
            </div>
        </>
    )
}

export default Home
