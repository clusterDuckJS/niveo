import React from 'react'
import './contact.css'
import Hero from '../../Components/Hero/Hero'
import { LuClock, LuMail, LuMapPin, LuPhone } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'

function Contact() {
  const navigate = useNavigate()
  return (
    <div className="contact main-container">
      <Hero
        tag="Get In Touchs"
        title="Contact Us"
        subtitle="Have questions about our products or services? We're here to help"
        background="https://media.gettyimages.com/id/2183509884/photo/group-of-medical-professionals.jpg?b=1&s=2048x2048&w=0&k=20&c=XlPqfShISo7SqDu7GyhDgnmHCOh0Nbh6cc1BlYZZD78="
      >
      </Hero>
      <section className="form-info-wrapper">

        <div className="card">
          <h2>Send Us a Message</h2>
          <p>Fill out the form below and we'll get back to you as soon as possible</p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" placeholder="John" />
              </div>

              <div className="form-field">
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" placeholder="Doe" />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="john.doe@example.com" />
            </div>

            <div className="form-field">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" type="tel" placeholder="+91 XXX XXX XXXX" />
            </div>

            <div className="form-field">
              <label htmlFor="org">Organization</label>
              <input id="org" type="text" placeholder="Hospital/Clinic Name" />
            </div>

            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" placeholder="Product Inquiry" />
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message here..."
              />
            </div>

            <button type="submit" className="contact-submit">
              Submit
            </button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Reach out to us through any of the following channels. Our team is ready to assist you with your healthcare equipment needs.</p>
          <div className="card-items-wrapper">
            <div className="card">
              <div className="svg-wrapper">
                <LuPhone />
              </div>
              <div className="contact-text-wrapper">
                <h5>Phone</h5>
                <p>+91 9567679964</p>
                <p>Mon-Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="card">
              <div className="svg-wrapper">
                <LuMail />
              </div>
              <div className="contact-text-wrapper">
                <h5>Email</h5>
                <p>info@niveohealthcare.com</p>
                <p>We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="card">
              <div className="svg-wrapper">
                <LuMapPin />
              </div>
              <div className="contact-text-wrapper">
                <h5>Address</h5>
                <p>Third floor, JC Chambers</p>
                <p>60/44, Panampilly Nagar</p>
                <p>Kochi, Ernakulam</p>
                <p>Kerala 682036, India</p>
              </div>

              <div className="card">
                <div className="svg-wrapper">
                  <LuClock />
                </div>
                <div className="contact-text-wrapper">
                  <h5>Business Hours</h5>
                  <p>Mon-Sat: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                  <p> 24/7 Emergency Support Available</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="more-info">
        <h2>Looking for Something Specific?</h2>
        <p>Quick links to help you find what you need</p>
        <div className="card-wrapper">
          <div className="card">
            <h3>Product Catalog</h3>
            <p>Browse our complete range of healthcare equipment</p>
            <button onClick={() => navigate('/products')}>View Products</button>
          </div>

          <div className="card">
            <h3>Our Services</h3>
            <p>Learn about our sales and service offerings</p>
            <button onClick={() => navigate('/services')}>View Services</button>
          </div>

          <div className="card">
            <h3>About Us</h3>
            <p>Discover our mission and partnerships</p>
            <button onClick={() => navigate('/about')}>Learn More</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact