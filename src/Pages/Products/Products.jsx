import './products.css'
import Hero from '../../Components/Hero/Hero'
import { LuCircleCheckBig } from 'react-icons/lu'

function Products() {
  return (
    <div className="products main-container">
      <Hero
        tag="Advanced Healthcare Innovations"
        title="Niveohealthcare Private Limited"
        subtitle="Cutting-edge medical devices from Innaccel - WHO recognized and award-winning solutions"
        background="https://media.gettyimages.com/id/1352489899/photo/doctors-checking-on-a-patient-at-the-hospital.jpg?b=1&s=2048x2048&w=0&k=20&c=6DGsiuC8aQhu0_RoATzvlkxDSQeNZ5utYeDfFl23cso="
      >
      </Hero>
      <section className="products">
        <h2>Our Critical Care Products</h2>
        <h5>Comprehensive range of critical care equipment from leading manufacturers</h5>
        <div className="card">
          <h3>FETAL LITE</h3>
          <p>Superior labour monitoring experience - Advanced portable fetal monitoring system</p>
          <p>key Features:</p>
          <ul>
            <li><LuCircleCheckBig /> Continuous fetal heart rate monitoring</li>
            <li><LuCircleCheckBig /> Maternal well-being tracking</li>
            <li><LuCircleCheckBig /> Portable and user-friendly</li>
            <li><LuCircleCheckBig /> Non-invasive monitoring</li>
            <li><LuCircleCheckBig /> Clinical and homecare use</li>
          </ul>
          <p>Applications:</p>
          <div className="tags-container">
            <span className='tag'><small>High-risk Pregnancies</small></span>
            <span className='tag'><small>Labor Monitoring</small></span>
            <span className='tag'><small>Routine Prenatal Check-ups</small></span>
            <span className='tag'><small>Fetal Health Assessment</small></span>
          </div>
        </div>

        <div className="card">
          <h3>Patient Monitors</h3>
          <p>Advanced multi-parameter patient monitoring systems for ICU and critical care units</p>
          <p>key Features:</p>
          <ul>
            <li><LuCircleCheckBig /> Real-time vital signs monitoring</li>
            <li><LuCircleCheckBig /> ECG, SpO2, NIBP, Temperature</li>
            <li><LuCircleCheckBig /> Alarm management system</li>
            <li><LuCircleCheckBig /> Data recording and trending</li>
            <li><LuCircleCheckBig /> Network connectivity</li>
          </ul>
          <p>Applications:</p>
          <div className="tags-container">
            <span className='tag'><small>ICU</small></span>
            <span className='tag'><small>Emergency Rooms</small></span>
            <span className='tag'><small>Operating Theaters</small></span>
            <span className='tag'><small>Recovery Rooms</small></span>
          </div>
        </div>

        <div className="card">
          <h3>Ventilators</h3>
          <p>High-performance mechanical ventilation systems for respiratory support</p>
          <p>key Features:</p>
          <ul>
            <li><LuCircleCheckBig /> Multiple ventilation modes</li>
            <li><LuCircleCheckBig /> Pressure and volume control</li>
            <li><LuCircleCheckBig /> Advanced monitoring</li>
            <li><LuCircleCheckBig /> Pediatric and adult settings</li>
            <li><LuCircleCheckBig /> Portable and stationary options</li>
          </ul>
          <p>Applications:</p>
          <div className="tags-container">
            <span className='tag'><small>ICU</small></span>
            <span className='tag'><small>Emergency Care</small></span>
            <span className='tag'><small>Transport</small></span>
            <span className='tag'><small>Home Care</small></span>
          </div>
        </div>

        <div className="card">
          <h3>Infusion Pumps</h3>
          <p>Precision medication and fluid delivery systems</p>
          <p>key Features:</p>
          <ul>
            <li><LuCircleCheckBig /> Accurate flow control</li>
            <li><LuCircleCheckBig /> Drug library integration</li>
            <li><LuCircleCheckBig /> Safety alarms</li>
            <li><LuCircleCheckBig /> Multiple delivery modes</li>
            <li><LuCircleCheckBig /> Battery backup</li>
          </ul>
          <p>Applications:</p>
          <div className="tags-container">
            <span className='tag'><small>ICU</small></span>
            <span className='tag'><small>General Wards</small></span>
            <span className='tag'><small>Oncology</small></span>
            <span className='tag'><small>Pediatrics</small></span>
          </div>
        </div>

        <div className="card">
          <h3>Defibrillators</h3>
          <p>Life-saving cardiac emergency equipment</p>
          <p>key Features:</p>
          <ul>
            <li><LuCircleCheckBig /> Automated external defibrillation</li>
            <li><LuCircleCheckBig /> Manual override capability</li>
            <li><LuCircleCheckBig /> ECG monitoring</li>
            <li><LuCircleCheckBig /> Voice prompts</li>
            <li><LuCircleCheckBig /> Portable design</li>
          </ul>
          <p>Applications:</p>
          <div className="tags-container">
            <span className='tag'><small>ICU</small></span>
            <span className='tag'><small>Emergency Response</small></span>
            <span className='tag'><small>Cardiac Care</small></span>
            <span className='tag'><small>Ambulances</small></span>
          </div>
        </div>

        <div className="card">
          <h3>Syringe Pumps</h3>
          <p>Precise medication delivery for critical care</p>
          <p>key Features:</p>
          <ul>
            <li><LuCircleCheckBig /> High accuracy dosing</li>
            <li><LuCircleCheckBig /> Multiple syringe sizes</li>
            <li><LuCircleCheckBig /> Programmable delivery rates</li>
            <li><LuCircleCheckBig /> Occlusion detection</li>
            <li><LuCircleCheckBig /> Battery operation</li>
          </ul>
          <p>Applications:</p>
          <div className="tags-container">
            <span className='tag'><small>ICU</small></span>
            <span className='tag'><small>NICU</small></span>
            <span className='tag'><small>Anesthesia</small></span>
            <span className='tag'><small>Pain Management</small></span>
          </div>
        </div>

        <div className="card">
          <h3>Central Monitoring Systems</h3>
          <p>Centralized patient monitoring and management</p>
          <p>key Features:</p>
          <ul>
            <li><LuCircleCheckBig /> Multi-bed monitoring</li>
            <li><LuCircleCheckBig /> Real-time data display</li>
            <li><LuCircleCheckBig /> Alarm management</li>
            <li><LuCircleCheckBig /> Electronic medical records integration</li>
            <li><LuCircleCheckBig /> Remote access capability</li>
          </ul>
          <p>Applications:</p>
          <div className="tags-container">
            <span className='tag'><small>ICU</small></span>
            <span className='tag'><small>Step-down Units</small></span>
            <span className='tag'><small>Emergency Departments</small></span>
          </div>
        </div>
      </section>

      <section className="partnerships">
                <h2>Authorized Dealer Products</h2>
                <h4>We supply critical care equipment from our trusted partners</h4>

                <div className="card">
                  <div className="heading-wrapper">
                    <div className="svg-wrapper">
                      <LuCircleCheckBig />
                    </div>
                    <div className="heading-text-wrapper">
                      <h3>Innaccel</h3>
                      <small>Premium Medical Equipment</small>
                    </div>
                    <p>Innaccel provides cutting-edge critical care monitoring and life support systems designed for modern healthcare facilities.</p>
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
                    <p>Yafho offers innovative critical care solutions with advanced monitoring capabilities and reliable performance.</p>
                    <a href="">Learn More About Yafho</a>
                  </div>
                </div>
              </section>

      <section className="partner">
          <h2>Need Critical Care Equipment?</h2>
          <h4>Contact our team for expert consultation and product recommendations</h4>
          <div className="btn-wrapper">
            <button onClick={() => navigate("/contact")} >Contact Us</button>
            <button onClick={() => navigate("/services")} >VOur Services</button>
          </div>
        </section>
    </div>
  )
}

export default Products
