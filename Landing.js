import React from 'react'
import './Landing.css';
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function Landing() {
    const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-light bg-light static-top">
            <div className="container">
                <a className="navbar-brand" href="#!" >Grievance Portal</a>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Button variant="dark" onClick={() => navigate('/Register')}>Register</Button>
                    <Button variant="dark" onClick={() => navigate('/Login')}>Login</Button>
                </div>
            </div>
        </nav>
        {/* <!-- Masthead--> */}
        <header className="masthead">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="text-center text-white">
                            {/* <!-- Page heading--> */}
                            <h1 className="mb-5">Got a complaint ? <br/>
                                We are here to help</h1>
                            {/* <!-- Signup form-->
                            <!-- * * * * * * * * * * * * * * *-->
                            <!-- * * SB Forms Contact Form * *-->
                            <!-- * * * * * * * * * * * * * * *-->
                            <!-- This form is pre-integrated with SB Forms.-->
                            <!-- To make this form functional, sign up at-->
                            <!-- https://startbootstrap.com/solution/contact-forms-->
                            <!-- to get an API token!--> */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* <!-- Icons Grid--> */}
        <section className="features-icons bg-light text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="bi-window m-auto text-primary"></i></div>
                            <h3>File Complaint</h3>
                            <p className="lead mb-0">File the complaint </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="bi-layers m-auto text-primary"></i></div>
                            <h3>Track Status</h3>
                            <p className="lead mb-0">Track the current status of the complaint</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="bi-terminal m-auto text-primary"></i></div>
                            <h3>View Past Complaints</h3>
                            <p className="lead mb-0">You can view all the previous complaints</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Image Showcases--> */}
        <section className="showcase">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{"background-image": "url('https://i.itworldcanada.com/wp-content/uploads/2020/02/GettyImages-1088724502-768x535.jpg')"}}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>Choose Department</h2>
                        <p className="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-lg-6 text-white showcase-img" style={{"background-image": "url('https://www.beanscenemag.com.au/wp-content/uploads/2018/07/Workplace-lrg.jpg')"}}></div>
                    <div className="col-lg-6 my-auto showcase-text">
                        <h2>Choose Officer</h2>
                        <p className="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{"background-image": "url('https://iq360inc.com/wp-content/uploads/2019/05/iQ_MarketingtoMillenials.jpg')"}}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>Send Feedback</h2>
                        <p className="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Testimonials--> */}
        
        <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">Categories Of Complaints</h2>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src="https://i.pinimg.com/736x/da/f5/19/daf519e4b8efa7ec1486c33c14ae6f05--hospital-vector-blue-cartoon-character.jpg" alt="..." />
                            <h5>Healthcare</h5><br/>
                            
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src="https://st2.depositphotos.com/1001599/7291/v/600/depositphotos_72919185-stock-illustration-electrician-repairing-an-electrical-panel.jpg" alt="..." />
                            <h5>Electricity</h5><br/>
                            
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src="https://images.theconversation.com/files/300236/original/file-20191105-88382-nasrla.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="..." />
                            <h5>Public Transport</h5><br/>
                            
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src="https://static.vecteezy.com/system/resources/previews/002/297/984/original/water-drop-international-water-power-plant-life-giving-moisture-cartoon-style-free-vector.jpg" alt="..." />
                            <h5>Water</h5><br/>
                            
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src="https://img.freepik.com/free-vector/book-with-lighbulb-cartoon-vector-icon-illustration-object-education-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4009.jpg?w=2000" alt="..." />
                            <h5>Education</h5><br/>
                            
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src="https://previews.123rf.com/images/kannaa123rf/kannaa123rf1607/kannaa123rf160700023/60173051-urban-earth-concept-vector-illustration-for-global-design-flat-cartoon-style-city-building-planet.jpg" alt="..." />
                            <h5>Infrastructure</h5><br/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Call to Action--> */}
        <section className="call-to-action text-white text-center" id="signup">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <h2 className="mb-4">Ready to get started?<br/> Sign up now!</h2>
                        {/* <!-- Signup form-->
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- * * SB Forms Contact Form * *-->
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- This form is pre-integrated with SB Forms.-->
                        <!-- To make this form functional, sign up at-->
                        <!-- https://startbootstrap.com/solution/contact-forms-->
                        <!-- to get an API token!--> */}
                        
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Footer--> */}
        <footer className="footer bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
                        <ul className="list-inline mb-2">
                            <li className="list-inline-item"><a href="#!">About</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Contact</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Terms of Use</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Privacy Policy</a></li>
                        </ul>
                        <p className="text-muted small mb-4 mb-lg-0">&copy; Your Website 2022. All Rights Reserved.</p>
                    </div>
                    <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item me-4">
                                <a href="#!"><i className="bi-facebook fs-3"></i></a>
                            </li>
                            <li className="list-inline-item me-4">
                                <a href="#!"><i className="bi-twitter fs-3"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#!"><i className="bi-instagram fs-3"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
