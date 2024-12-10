import React from "react";
import MyImage from "../assets/MyImage.jpg";
import bgshowcase1 from "../assets/bg-showcase-1.jpg";
import bgshowcase2 from "../assets/bg-showcase-2.jpg";
import bgshowcase3 from "../assets/bg-showcase-3.jpg";
import testimonials1 from "../assets/testimonials-1.jpg";
import testimonials2 from "../assets/testimonials-2.jpg";
import testimonials3 from "../assets/testimonials-3.jpg";


const Mainbody = () => {
    return (
        <>
            <section class="showcase">
                <div class="container-fluid p-0">
                    <div class="row g-0">
                        <div
                            style={{ backgroundImage: `url(${bgshowcase1})` }} class="col-lg-6 order-lg-2 text-white showcase-img"></div>
                        <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                            <h2>Fully Responsive Design</h2>
                            <p class="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                        </div>
                    </div>
                    <div class="row g-0">
                        <div style={{ backgroundImage: `url(${bgshowcase2})` }} class="col-lg-6 text-white showcase-img"></div>
                        <div class="col-lg-6 my-auto showcase-text">
                            <h2>Updated For Bootstrap 5</h2>
                            <p class="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
                        </div>
                    </div>
                    <div class="row g-0">
                        <div style={{ backgroundImage: `url(${bgshowcase3})` }} class="col-lg-6 order-lg-2 text-white showcase-img"></div>
                        <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                            <h2>Easy to Use & Customize</h2>
                            <p class="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                        </div>
                    </div>
                </div>
            </section>


            <section class="testimonials text-center bg-light">
                <div class="container">
                    <h2 class="mb-5">What people are saying...</h2>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="testimonial-item mx-auto mb-5 mb-lg-0">

                                <div style={{
                                    backgroundImage: `url(${testimonials1})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '100px',
                                    height: '100px'
                                }} className="rounded-circle mb-3 mx-auto"></div>
                                <h5>Margaret E.</h5>
                                <p class="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                                <div style={{
                                    backgroundImage: `url(${testimonials2})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '100px',
                                    height: '100px'
                                }} className="rounded-circle mb-3 mx-auto"></div>
                                <h5>Fred S.</h5>
                                <p class="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                                <div style={{
                                    backgroundImage: `url(${testimonials3})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '100px',
                                    height: '100px'
                                }} className="rounded-circle mb-3 mx-auto"></div>
                                <h5>Sarah W.</h5>
                                <p class="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="call-to-action text-white text-center" id="signup" style={{backgroundImage: `url(${MyImage})`}}>
                <div class="container position-relative">
                    <div class="row justify-content-center">
                        <div class="col-xl-6">
                            <h2 class="mb-4">Ready to get started? Sign up now!</h2>
                            <form class="form-subscribe" id="contactFormFooter" data-sb-form-api-token="API_TOKEN">
                                <div class="row">
                                    <div class="col">
                                        <input class="form-control form-control-lg" id="emailAddressBelow" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                                        <div class="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:required">Email Address is required.</div>
                                        <div class="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:email">Email Address Email is not valid.</div>
                                    </div>
                                    <div class="col-auto"><button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                                </div>
                                <div class="d-none" id="submitSuccessMessage">
                                    <div class="text-center mb-3">
                                        <div class="fw-bolder">Form submission successful!</div>
                                        <p>To activate this form, sign up at</p>
                                    </div>
                                </div>
                                <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                            </form>
                        </div>  
                    </div>
                </div>
            </section>
            
            <footer class="footer bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 h-100 text-center text-lg-start my-auto">
                        <ul class="list-inline mb-2">
                            <li class="list-inline-item"><a href="#!">About</a></li>
                            <li class="list-inline-item">⋅</li>
                            <li class="list-inline-item"><a href="#!">Contact</a></li>
                            <li class="list-inline-item">⋅</li>
                            <li class="list-inline-item"><a href="#!">Terms of Use</a></li>
                            <li class="list-inline-item">⋅</li>
                            <li class="list-inline-item"><a href="#!">Privacy Policy</a></li>
                        </ul>
                        <p class="text-muted small mb-4 mb-lg-0">&copy; Your Website 2023. All Rights Reserved.</p>
                    </div>
                    <div class="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item me-4">
                                <a href="#!"><i class="bi-facebook fs-3"></i></a>
                            </li>
                            <li class="list-inline-item me-4">
                                <a href="#!"><i class="bi-twitter fs-3"></i></a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#!"><i class="bi-instagram fs-3"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}


export default Mainbody;