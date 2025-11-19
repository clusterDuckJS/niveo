import React, { use } from 'react'
import './about.css'
import Hero from '../../Components/Hero/Hero'
import { LuAward, LuCircleCheckBig, LuEye, LuTarget, LuUsers } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  return (
    <div className="about main-container">
      <Hero
        tag="About Us"
        title="Niveohealthcare Private Limited"
        subtitle="Your trusted partner in healthcare equipment sales and service since our inception"
        background="https://media.gettyimages.com/id/2178146294/photo/health-engineer-bioprinting-models-at-a-3d-laboratory.jpg?b=1&s=2048x2048&w=0&k=20&c=QxxuxkKkse3kFs6PUvffG2NYT41r1L9yDBywfenLehU="
      >
      </Hero>
      {/* WHO WE ARE */}
      <section className="who-we-are">
        <h2 className='center'>Who We Are</h2>
        <p className='mb-1'>At Niveo Healthcare Pvt Ltd, we are dedicated to advancing healthcare technology by providing high-quality biomedical equipment and innovative solutions. Our mission is to support hospitals, clinics, and healthcare providers with reliable medical technology, ensuring better patient care and operational efficiency.</p>
        <p className='mb-1'>We specialize in both sales and maintenance of biomedical equipment, offering a wide range of medical devices to meet the diverse needs of the healthcare industry. Our team of skilled biomedical engineers ensures that every piece of equipment functions optimally, reducing downtime and improving patient outcomes.</p>
        <p className="mb-1">As proud authorized dealers for renowned manufacturers Innaccel and Yafho, we bring world-class medical technology to healthcare facilities across the region. With our expertise in critical care, wound care, and respiratory solutions, we partner with hospitals, clinics, and care facilities to deliver solutions that improve patient outcomes and enhance quality of care.</p>
      </section>
      <section className="mission">
        <div className="card-wrapper">
          <div className="card flex-1 w-500">
            <div className="svg-wrapper mb-1 md round">
              <LuTarget />
            </div>
            <h3 className='bold-5 mb-1'>Our Mission</h3>
            <p>To advance healthcare technology by providing high-quality biomedical equipment and innovative solutions. We support hospitals, clinics, and healthcare providers with reliable medical technology, expert maintenance services, and skilled biomedical engineering support, ensuring better patient care and operational efficiency.</p>
          </div>
          <div className="card flex-1 w-500">
            <div className="svg-wrapper mb-1 md round">
              <LuEye />
            </div>
            <h3 className='bold-5 mb-1'>Our Vision</h3>
            <p>To be the leading healthcare equipment provider in the region, recognized for our commitment to quality, innovation, and customer satisfaction. We envision a future where every healthcare facility has access to the best medical technology.</p>
          </div>
        </div>
      </section>

      <section className="core-values">
        <h2 className='center'>Our Core Values</h2>
        <p className='center mb-2'>The principles that guide everything we do</p>
        <div className="value-container">
          <div className="value-wrapper">
            <div className="svg-wrapper mb-1 md round"><LuCircleCheckBig /></div>
            <h4 className='bold-5 center'>Quality</h4>
            <p className='center'>We never compromise on the quality of products and services we deliver</p>
          </div>
          <div className="value-wrapper">
            <div className="svg-wrapper mb-1 md round"><LuUsers /></div>
            <h4 className='bold-5 center'>Customer Focus</h4>
            <p className='center'>Our customers' needs and satisfaction are at the heart of everything we do</p>
          </div>
          <div className="value-wrapper">
            <div className="svg-wrapper mb-1 md round"><LuAward /></div>
            <h4 className='bold-5 center'>Integrity</h4>
            <p className='center'>We conduct business with honesty, transparency, and ethical practices</p>
          </div>
          <div className="value-wrapper">
            <div className="svg-wrapper mb-1 md round"><LuCircleCheckBig /></div>
            <h4 className='bold-5 center'>Excellence</h4>
            <p className='center'>We strive for excellence in every aspect of our operations</p>
          </div>
        </div>
      </section>

      <section className="partnerships">
        <h2 className='center mb-1'>Our Authorized Partnerships</h2>
        <p className='center mb-3'>We are proud to be authorized dealers for leading healthcare equipment manufacturers</p>
        <div className="card-wrapper">
          <div className="card w-500">
            <div className="heading-wrapper mb-1">
              <div className="svg-wrapper lg round">
                <LuCircleCheckBig />
              </div>
              <div className="heading-text-wrapper">
                <h3 className='bold-5'>Innaccel</h3>
                <small>Premium Medical Equipment</small>
              </div>
            </div>
            <p className='mb-2'>As an authorized dealer for Innaccel, we bring you cutting-edge medical equipment designed for modern healthcare facilities. Innaccel's commitment to innovation and quality aligns perfectly with our mission to provide the best healthcare solutions.</p>
            <a className='btn secondary' href="https://innaccel.com/">Learn More About Innaccel</a>
          </div>
          <div className="card w-500">
            <div className="heading-wrapper mb-1">
              <div className="svg-wrapper lg round">
                <LuCircleCheckBig />
              </div>
              <div className="heading-text-wrapper">
                <h3 className='bold-5'>Yafho</h3>
                <small>Advanced Healthcare Technology</small>
              </div>
            </div>
            <p className='mb-2'>Our partnership with Yafho enables us to offer advanced healthcare technology products that meet the highest standards of performance and reliability. Yafho's innovative solutions help healthcare providers deliver exceptional patient care.</p>
            <a className='btn secondary' href="https://www.yafho.com/">Learn More About Yafho</a>
          </div>
        </div>
      </section>

      <section className="partner">
        <h2 className='white center'>Ready to Partner With Us?</h2>
        <h4 className='white center'>Contact us today to learn more about our products and services</h4>
        <div className="btn-wrapper">
          <button className='primary' onClick={() => navigate("/contact")} >Contact Us</button>
          <button className='blur' onClick={() => navigate("/products")} >View Our Products</button>
        </div>
      </section>
    </div>
  )
}

export default About
