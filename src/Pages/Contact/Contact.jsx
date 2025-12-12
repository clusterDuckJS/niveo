import './contact.css'
import Hero from '../../Components/Hero/Hero'
import { LuClock, LuMail, LuMapPin, LuPhone } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import emailjs from "emailjs-com";

function Contact() {
  const navigate = useNavigate()

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus("Message sent!");
      e.target.reset();
    })
    .catch((err) => {
      console.error(err);
      setStatus("Failed to send. Try again.");
    });
  };

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
        <div className="form-details-wrapper grid col-2 gp-2">
          <div className="card">
            <h3>Send Us a Message</h3>
            <p className='mb-3'>Fill out the form below and we'll get back to you as soon as possible</p>
            <form className="contact-form" onSubmit={sendEmail}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="firstName">First Name</label>
                  <input name="first_name" id="firstName" type="text" placeholder="John" required />
                </div>
                <div className="form-field">
                  <label htmlFor="lastName">Last Name</label>
                  <input name="last_name" id="lastName" type="text" placeholder="Doe" required />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input name="email" id="email" type="email" placeholder="john.doe@example.com" required />
              </div>

              <div className="form-field">
                <label htmlFor="phone">Phone Number</label>
                <input name="phone" id="phone" type="tel" placeholder="+91 XXX XXX XXXX" />
              </div>

              <div className="form-field">
                <label htmlFor="org">Organization</label>
                <input name="org" id="org" type="text" placeholder="Hospital/Clinic Name" />
              </div>

              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input name="subject" id="subject" type="text" placeholder="Product Inquiry" />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4" placeholder="Write your message here..." required />
              </div>

              <button type="submit" className="primary">
                Send Message
              </button>

              {status && <p className="form-status">{status}</p>}
            </form>
          </div>

          <div className="contact-info">
            <h2>Contact Information</h2>
            <p className='mb-3'>Reach out to us through any of the following channels. Our team is ready to assist you with your healthcare equipment needs.</p>
            <div className="card-items-wrapper flex column gp-2">
              <div className="card flex gp-1 align-start">
                <div className="svg-wrapper sm">
                  <LuPhone />
                </div>
                <div className="contact-text-wrapper">
                  <p className='bold-5'>Phone</p>
                  <p>+91 9567679964</p>
                  <p>Mon-Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="card flex gp-1 align-start">
                <div className="svg-wrapper sm">
                  <LuMail />
                </div>
                <div className="contact-text-wrapper">
                  <p className='bold-5'>Email</p>
                  <p>info@niveohealthcare.com</p>
                  <p>We'll respond within 24 hours</p>
                </div>
              </div>
              <div className="card flex gp-1 align-start">
                <div className="svg-wrapper sm">
                  <LuMapPin />
                </div>
                <div className="contact-text-wrapper">
                  <p className='bold-5'>Address</p>
                  <p>Third floor, JC Chambers</p>
                  <p>60/44, Panampilly Nagar</p>
                  <p>Kochi, Ernakulam</p>
                  <p>Kerala 682036, India</p>
                </div>
              </div>
              <div className="card flex gp-1 align-start height-fit">
                <div className="svg-wrapper sm">
                  <LuClock />
                </div>
                <div className="contact-text-wrapper">
                  <p className='bold-5'>Business Hours</p>
                  <p>Mon-Sat: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                  <p> 24/7 Emergency Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="more-info bg-light">
        <h2 className='center'>Looking for Something Specific?</h2>
        <p className='center mb-3'>Quick links to help you find what you need</p>
        <div className="card-wrapper grid col-3 gp-2">
          <div className="card flex column align-center">
            <h3 className='center mb-1 bold-5'>Product Catalog</h3>
            <p className='center mb-1'>Browse our complete range of healthcare equipment</p>
            <button className='secondary' onClick={() => navigate('/products')}>View Products</button>
          </div>

          <div className="card flex column align-center">
            <h3 className='center mb-1 bold-5'>Our Services</h3>
            <p className='center mb-1'>Learn about our sales and service offerings</p>
            <button className='secondary' onClick={() => navigate('/services')}>View Services</button>
          </div>

          <div className="card flex column align-center">
            <h3 className='center mb-1 bold-5'>About Us</h3>
            <p className='center mb-1'>Discover our mission and partnerships</p>
            <button className='secondary' onClick={() => navigate('/about')}>Learn More</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact