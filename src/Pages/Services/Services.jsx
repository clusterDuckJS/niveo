import React from 'react'
import './services.css'
import Hero from '../../Components/Hero/Hero'
import { LuCircleCheckBig, LuClock, LuHeadphones, LuPhone, LuShield, LuTruck, LuUsers } from 'react-icons/lu'

function Services() {
  return (
    <div className="services main-container">
      <Hero
        tag="Advanced Healthcare Innovations"
        title="Niveohealthcare Private Limited"
        subtitle="Cutting-edge medical devices from Innaccel - WHO recognized and award-winning solutions"
        background="https://media.gettyimages.com/id/2183509884/photo/group-of-medical-professionals.jpg?b=1&s=2048x2048&w=0&k=20&c=XlPqfShISo7SqDu7GyhDgnmHCOh0Nbh6cc1BlYZZD78="
      >
      </Hero>
      <section className="services">
        <h2 className='center'>What We Offer</h2>
        <p className='mb-3 center'>Advanced medical equipment solutions with reliable performance and comprehensive support</p>
        <div className="card-container grid col-3 gp-2">
          <div className="card">
            <div className="svg-wrapper mb-1 sm">
              <LuShield />
            </div>
            <h3 className='bold-5 mb-1'>Equipment Sales</h3>
            <p className='mb-1'>We offer high-quality medical equipment for hospitals, clinics, and home care</p>
            <ul>
              <li><LuCircleCheckBig /> Diagnostic tools</li>
              <li><LuCircleCheckBig /> Surgical instruments</li>
              <li><LuCircleCheckBig /> Mobility aids</li>
              <li><LuCircleCheckBig /> Patient monitors</li>
              <li><LuCircleCheckBig /> Ensuring safety, reliability, and top performance</li>
            </ul>
          </div>
          <div className="card">
            <div className="svg-wrapper mb-1 sm">
              <LuTruck />
            </div>
            <h3 className='bold-5 mb-1'>Commitment to Quality and Safety</h3>
            <p className='mb-1'>We provide reliable, high-quality medical equipment, ensuring safety and effectiveness</p>
            <ul>
              <li><LuCircleCheckBig /> Rigorous quality standards</li>
              <li><LuCircleCheckBig /> Safety certifications</li>
              <li><LuCircleCheckBig /> Performance testing</li>
              <li><LuCircleCheckBig /> Compliance with regulations</li>
              <li><LuCircleCheckBig /> Healthcare providers can deliver the best care</li>
            </ul>
          </div>
          <div className="card">
            <div className="svg-wrapper mb-1 sm">
              <LuUsers />
            </div>
            <h3 className='bold-5 mb-1'>Personalized Customer Assistance</h3>
            <p className='mb-1'>We prioritize your satisfaction with ongoing support</p>
            <ul>
              <li><LuCircleCheckBig /> Dedicated account managers</li>
              <li><LuCircleCheckBig /> Customized solutions</li>
              <li><LuCircleCheckBig /> Expert consultation</li>
              <li><LuCircleCheckBig /> Smooth, hassle-free experience</li>
              <li><LuCircleCheckBig /> Long-term partnership focus</li>
            </ul>
          </div>
          <div className="card">
            <div className="svg-wrapper mb-1 sm">
              <LuHeadphones />
            </div>
            <h3 className='bold-5 mb-1'>24/7 Availability</h3>
            <p className='mb-1'>Our 24/7 support ensures you get assistance anytime</p>
            <ul>
              <li><LuCircleCheckBig /> Day or night support</li>
              <li><LuCircleCheckBig /> Weekdays and weekends</li>
              <li><LuCircleCheckBig /> Emergency assistance</li>
              <li><LuCircleCheckBig /> Quick response time</li>
              <li><LuCircleCheckBig /> Always available when you need help</li>
            </ul>
          </div>
          <div className="card">
            <div className="svg-wrapper mb-1 sm">
              <LuHeadphones />
            </div>
            <h3 className='bold-5 mb-1'>Advanced Medical Equipment Solutions</h3>
            <p className='mb-1'>We offer advanced medical equipment, ensuring precision, reliability, and top performance</p>
            <ul>
              <li><LuCircleCheckBig /> Cutting-edge technology</li>
              <li><LuCircleCheckBig /> Precision instruments</li>
              <li><LuCircleCheckBig /> Reliable performance</li>
              <li><LuCircleCheckBig /> Innovation-driven solutions</li>
              <li><LuCircleCheckBig /> Meeting healthcare needs</li>
            </ul>
          </div>
          <div className="card">
            <div className="svg-wrapper mb-1 sm">
              <LuHeadphones />
            </div>
            <h3 className='bold-5 mb-1'>Advanced Medical Equipment Solutions</h3>
            <p className='mb-1'>We offer advanced medical equipment, ensuring precision, reliability, and top performance</p>
            <ul>
              <li><LuCircleCheckBig /> Cutting-edge technology</li>
              <li><LuCircleCheckBig /> Precision instruments</li>
              <li><LuCircleCheckBig /> Reliable performance</li>
              <li><LuCircleCheckBig /> Innovation-driven solutions</li>
              <li><LuCircleCheckBig /> Meeting healthcare needs</li>
            </ul>
          </div>
          <div className="card">
            <div className="svg-wrapper mb-1 sm">
              <LuClock />
            </div>
            <h3 className='bold-5 mb-1'>Maintenance & Repair</h3>
            <p className='mb-1'>Comprehensive maintenance and repair services by skilled biomedical engineers</p>
            <ul>
              <li><LuCircleCheckBig /> Preventive maintenance</li>
              <li><LuCircleCheckBig /> Emergency repairs</li>
              <li><LuCircleCheckBig /> Genuine spare parts</li>
              <li><LuCircleCheckBig /> Certified biomedical engineers</li>
              <li><LuCircleCheckBig /> Service contracts available</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="why-choose-us bg-light">
        <h2 className='center'>Why Choose Our Services</h2>
        <p className='center mb-3'>Experience the difference with our professional healthcare equipment services</p>
        <div className="value-container flex gp-2">
          <div className="value-wrapper flex column align-center">
            <div className="svg-wrapper mb-1 md round">
              <LuCircleCheckBig />
            </div>
            <h4 className='bold-5 mb-1 center'>Certified Technicians</h4>
            <p className='mb-1 center'>All our technicians are factory-trained and certified</p>
          </div>
          <div className="value-wrapper flex column align-center">
            <div className="svg-wrapper mb-1 md round">
              <LuClock />
            </div>
            <h4 className='bold-5 mb-1 center'>Quick Response</h4>
            <p className='mb-1 center'>Fast response times for all service requests</p>
          </div>
          <div className="value-wrapper flex column align-center">
            <div className="svg-wrapper mb-1 md round">
              <LuShield />
            </div>
            <h4 className='bold-5 mb-1 center'>Genuine Parts</h4>
            <p className='mb-1 center'>Only authentic spare parts from manufacturers</p>
          </div>
          <div className="value-wrapper flex column align-center">
            <div className="svg-wrapper mb-1 md round">
              <LuHeadphones />
            </div>
            <h4 className='bold-5 mb-1 center'>24/7 Support</h4>
            <p className='mb-1 center'>Round-the-clock technical assistance available</p>
          </div>
        </div>
      </section>

      <section className="service-process">
        <h2 className='center'>Our Service Process</h2>
        <p className='center mb-3'>Simple and efficient process to get you the support you need</p>
        <div className="value-container flex gp-2">
          <div className="value-wrapper flex column align-center">
            <div className="svg-wrapper round mb-1 sm">
              <h3 className='bold-5'>1</h3>
            </div>
            <h3 className='bold-5 mb-1'>Contact Us</h3>
            <p className='mb-1 center'>Reach out via phone, email, or our contact form</p>
          </div>
          <div className="value-wrapper flex column align-center">
            <div className="svg-wrapper round mb-1 sm">
              <h3 className='bold-5'>2</h3>
            </div>
            <h3 className='bold-5 mb-1'>Assessment</h3>
            <p className='mb-1 center'>We evaluate your needs and provide recommendations</p>
          </div>
          <div className="value-wrapper flex column align-center">
            <div className="svg-wrapper round mb-1 sm">
             <h3 className='bold-5'>3</h3>
            </div>
            <h3 className='bold-5 mb-1'>Service Delivery</h3>
            <p className='mb-1 center'>Our team executes the service professionally</p>
          </div>
          <div className="value-wrapper flex column align-center">
            <div className="svg-wrapper round mb-1 sm">
              <h3 className='bold-5'>4</h3>
            </div>
            <h3 className='bold-5 mb-1'>Follow-up</h3>
            <p className='mb-1 center'>We ensure your complete satisfaction</p>
          </div>
        </div>
      </section>

      <section className="support bg-dark">
        <h2 className='center white'>Need Service or Support?</h2>
        <h4 className='center white mb-2'>Our team is ready to assist you with all your healthcare equipment needs</h4>
        <div className="btn-wrapper">
          <button className='primary' onClick={() => navigate("/contact")} ><LuPhone /> Contact Us</button>
          <button className='blur' onClick={() => navigate("/products")} >View Products</button>
        </div>
      </section>
    </div>
  )
}

export default Services
