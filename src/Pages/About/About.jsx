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
        <h2>Who We Are</h2>
        <p>At Niveo Healthcare Pvt Ltd, we are dedicated to advancing healthcare technology by providing high-quality biomedical equipment and innovative solutions. Our mission is to support hospitals, clinics, and healthcare providers with reliable medical technology, ensuring better patient care and operational efficiency.
          We specialize in both sales and maintenance of biomedical equipment, offering a wide range of medical devices to meet the diverse needs of the healthcare industry. Our team of skilled biomedical engineers ensures that every piece of equipment functions optimally, reducing downtime and improving patient outcomes.
          As proud authorized dealers for renowned manufacturers Innaccel and Yafho, we bring world-class medical technology to healthcare facilities across the region. With our expertise in critical care, wound care, and respiratory solutions, we partner with hospitals, clinics, and care facilities to deliver solutions that improve patient outcomes and enhance quality of care.</p>
      </section>
      <section className="mission">
        <div className="card">
          <LuTarget />
          <h3>Our Mission</h3>
          <p>To advance healthcare technology by providing high-quality biomedical equipment and innovative solutions. We support hospitals, clinics, and healthcare providers with reliable medical technology, expert maintenance services, and skilled biomedical engineering support, ensuring better patient care and operational efficiency.</p>
        </div>
        <div className="card">
          <LuEye />
          <h3>Our Vision</h3>
          <p>To be the leading healthcare equipment provider in the region, recognized for our commitment to quality, innovation, and customer satisfaction. We envision a future where every healthcare facility has access to the best medical technology.</p>
        </div>

        <section className="core-values">
          <h2>Our Core Values</h2>
          <h4>The principles that guide everything we do</h4>
          <div className="value-wrapper">
            <LuCircleCheckBig />
            <h3>Quality</h3>
            <p>We never compromise on the quality of products and services we deliver</p>
          </div>
          <div className="value-wrapper">
            <LuUsers />
            <h3>Customer Focus</h3>
            <p>Our customers' needs and satisfaction are at the heart of everything we do</p>
          </div>
          <div className="value-wrapper">
            <LuAward />
            <h3>Integrity</h3>
            <p>We conduct business with honesty, transparency, and ethical practices</p>
          </div>
          <div className="value-wrapper">
            <LuCircleCheckBig />
            <h3>Excellence</h3>
            <p>We strive for excellence in every aspect of our operations</p>
          </div>
        </section>
        
        <section className="partnerships">
          <h2>Our Authorized Partnerships</h2>
          <h4>We are proud to be authorized dealers for leading healthcare equipment manufacturers</h4>
          <div className="card">
            <div className="heading-wrapper">
              <div className="svg-wrapper">
                <LuCircleCheckBig />
              </div>
              <div className="heading-text-wrapper">
                <h3>Innaccel</h3>
                <small>Premium Medical Equipment</small>
              </div>
              <p>As an authorized dealer for Innaccel, we bring you cutting-edge medical equipment designed for modern healthcare facilities. Innaccel's commitment to innovation and quality aligns perfectly with our mission to provide the best healthcare solutions.</p>
              <a href="">Learn More About Innaccel</a>
            </div>
          </div>

          <div className="card">
            <div className="heading-wrapper">
              <div className="svg-wrapper">
                <LuCircleCheckBig />
              </div>
              <div className="heading-text-wrapper">
                <h3>Yafho</h3>
                <small>Advanced Healthcare Technology</small>
              </div>
              <p>Our partnership with Yafho enables us to offer advanced healthcare technology products that meet the highest standards of performance and reliability. Yafho's innovative solutions help healthcare providers deliver exceptional patient care.</p>
              <a href="">Learn More About Yafho</a>
            </div>
          </div>
        </section>

        <section className="partner">
          <h2>Ready to Partner With Us?</h2>
          <h4>Contact us today to learn more about our products and services</h4>
          <div className="btn-wrapper">
            <button onClick={() => navigate("/contact")} >Contact Us</button>
            <button onClick={() => navigate("/products")} >View Our Products</button>
          </div>
        </section>
      </section>
    </div>
  )
}

export default About
