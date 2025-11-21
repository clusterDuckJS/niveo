import './products.css'
import Hero from '../../Components/Hero/Hero'
import { LuCircleCheckBig, LuPhone } from 'react-icons/lu'

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
        <h2 className='center'>Our Critical Care Products</h2>
        <p className='center mb-3'>Comprehensive range of critical care equipment from leading manufacturers</p>
        <div className="cards-wrapper">
          <div className="card">
            <h3 className='bold-5'>FETAL LITE</h3>
            <p className='mb-1'>Superior labour monitoring experience - Advanced portable fetal monitoring system</p>
            <p className='bold-5 mb-1'>Key Features:</p>
            <ul className='mb-1'>
              <li><LuCircleCheckBig /> Continuous fetal heart rate monitoring</li>
              <li><LuCircleCheckBig /> Maternal well-being tracking</li>
              <li><LuCircleCheckBig /> Portable and user-friendly</li>
              <li><LuCircleCheckBig /> Non-invasive monitoring</li>
              <li><LuCircleCheckBig /> Clinical and homecare use</li>
            </ul>
            <p className='bold-5 mb-1'>Applications:</p>
            <div className="tags-container flex gp-02 wrap">
              <span className='tag primary'><small>High-risk Pregnancies</small></span>
              <span className='tag primary'><small>Labor Monitoring</small></span>
              <span className='tag primary'><small>Routine Prenatal Check-ups</small></span>
              <span className='tag primary'><small>Fetal Health Assessment</small></span>
            </div>
          </div>
          <div className="card">
            <h3 className='bold-5'>Patient Monitors</h3>
            <p className='mb-1'>Advanced multi-parameter patient monitoring systems for ICU and critical care units</p>
            <p className='bold-5 mb-1'>Key Features:</p>
            <ul className='mb-1'>
              <li><LuCircleCheckBig /> Real-time vital signs monitoring</li>
              <li><LuCircleCheckBig /> ECG, SpO2, NIBP, Temperature</li>
              <li><LuCircleCheckBig /> Alarm management system</li>
              <li><LuCircleCheckBig /> Data recording and trending</li>
              <li><LuCircleCheckBig /> Network connectivity</li>
            </ul>
            <p className='bold-5 mb-1'>Applications:</p>
            <div className="tags-container flex gp-02 wrap">
              <span className='tag primary'><small>ICU</small></span>
              <span className='tag primary'><small>Emergency Rooms</small></span>
              <span className='tag primary'><small>Operating Theaters</small></span>
              <span className='tag primary'><small>Recovery Rooms</small></span>
            </div>
          </div>
          <div className="card">
            <h3 className='bold-5'>Ventilators</h3>
            <p className='mb-1'>High-performance mechanical ventilation systems for respiratory support</p>
            <p className='bold-5 mb-1'>Key Features:</p>
            <ul className='mb-1'>
              <li><LuCircleCheckBig /> Multiple ventilation modes</li>
              <li><LuCircleCheckBig /> Pressure and volume control</li>
              <li><LuCircleCheckBig /> Advanced monitoring</li>
              <li><LuCircleCheckBig /> Pediatric and adult settings</li>
              <li><LuCircleCheckBig /> Portable and stationary options</li>
            </ul>
            <p className='bold-5 mb-1'>Applications:</p>
            <div className="tags-container flex gp-02 wrap">
              <span className='tag primary'><small>ICU</small></span>
              <span className='tag primary'><small>Emergency Care</small></span>
              <span className='tag primary'><small>Transport</small></span>
              <span className='tag primary'><small>Home Care</small></span>
            </div>
          </div>
          <div className="card">
            <h3 className='bold-5'>Infusion Pumps</h3>
            <p className='mb-1'>Precision medication and fluid delivery systems</p>
            <p className='bold-5 mb-1'>Key Features:</p>
            <ul className='mb-1'>
              <li><LuCircleCheckBig /> Accurate flow control</li>
              <li><LuCircleCheckBig /> Drug library integration</li>
              <li><LuCircleCheckBig /> Safety alarms</li>
              <li><LuCircleCheckBig /> Multiple delivery modes</li>
              <li><LuCircleCheckBig /> Battery backup</li>
            </ul>
            <p className='bold-5 mb-1'>Applications:</p>
            <div className="tags-container flex gp-02 wrap">
              <span className='tag primary'><small>ICU</small></span>
              <span className='tag primary'><small>General Wards</small></span>
              <span className='tag primary'><small>Oncology</small></span>
              <span className='tag primary'><small>Pediatrics</small></span>
            </div>
          </div>
          <div className="card">
            <h3 className='bold-5'>Defibrillators</h3>
            <p className='mb-1'>Life-saving cardiac emergency equipment</p>
            <p className='bold-5 mb-1'>Key Features:</p>
            <ul className='mb-1'>
              <li><LuCircleCheckBig /> Automated external defibrillation</li>
              <li><LuCircleCheckBig /> Manual override capability</li>
              <li><LuCircleCheckBig /> ECG monitoring</li>
              <li><LuCircleCheckBig /> Voice prompts</li>
              <li><LuCircleCheckBig /> Portable design</li>
            </ul>
            <p className='bold-5 mb-1'>Applications:</p>
            <div className="tags-container flex gp-02 wrap">
              <span className='tag primary'><small>ICU</small></span>
              <span className='tag primary'><small>Emergency Response</small></span>
              <span className='tag primary'><small>Cardiac Care</small></span>
              <span className='tag primary'><small>Ambulances</small></span>
            </div>
          </div>
          <div className="card">
            <h3 className='bold-5'>Syringe Pumps</h3>
            <p className='mb-1'>Precise medication delivery for critical care</p>
            <p className='bold-5 mb-1'>Key Features:</p>
            <ul className='mb-1'>
              <li><LuCircleCheckBig /> High accuracy dosing</li>
              <li><LuCircleCheckBig /> Multiple syringe sizes</li>
              <li><LuCircleCheckBig /> Programmable delivery rates</li>
              <li><LuCircleCheckBig /> Occlusion detection</li>
              <li><LuCircleCheckBig /> Battery operation</li>
            </ul>
            <p className='bold-5 mb-1'>Applications:</p>
            <div className="tags-container flex gp-02 wrap">
              <span className='tag primary'><small>ICU</small></span>
              <span className='tag primary'><small>NICU</small></span>
              <span className='tag primary'><small>Anesthesia</small></span>
              <span className='tag primary'><small>Pain Management</small></span>
            </div>
          </div>
          {/* <div className="card">
            <h3 className='bold-5'>Central Monitoring Systems</h3>
            <p className='mb-1'>Centralized patient monitoring and management</p>
            <p className='bold-5 mb-1'>Key Features:</p>
            <ul className='mb-1'>
              <li><LuCircleCheckBig /> Multi-bed monitoring</li>
              <li><LuCircleCheckBig /> Real-time data display</li>
              <li><LuCircleCheckBig /> Alarm management</li>
              <li><LuCircleCheckBig /> Electronic medical records integration</li>
              <li><LuCircleCheckBig /> Remote access capability</li>
            </ul>
            <p className='bold-5 mb-1'>Applications:</p>
            <div className="tags-container flex gp-02 wrap">
              <span className='tag primary'><small>ICU</small></span>
              <span className='tag primary'><small>Step-down Units</small></span>
              <span className='tag primary'><small>Emergency Departments</small></span>
            </div>
          </div> */}
        </div>
      </section>

      <section className="partnerships bg-light">
        <h2 className='center'>Authorized Dealer Products</h2>
        <p className='center mb-3'>We supply critical care equipment from our trusted partners</p>

        <div className="card-wrapper grid col-2 gp-2">
          <div className="card">
            <div className="heading-wrapper flex gp-1 mb-1">
              <div className="svg-wrapper md round">
                <LuCircleCheckBig />
              </div>
              <div className="heading-text-wrapper">
                <h3>Innaccel</h3>
                <small>Premium Medical Equipment</small>
              </div>
            </div>
            <p className='mb-2'>Innaccel provides cutting-edge critical care monitoring and life support systems designed for modern healthcare facilities.</p>
            <a className='btn secondary' href="https://innaccel.com/">View Innaccel Products</a>
          </div>
          <div className="card">
            <div className="heading-wrapper flex gp-1 mb-1">
              <div className="svg-wrapper md round">
                <LuCircleCheckBig />
              </div>
              <div className="heading-text-wrapper">
                <h3>Yafho</h3>
                <small>Advanced Healthcare Technology</small>
              </div>
            </div>
              <p className='mb-2'>Yafho offers innovative critical care solutions with advanced monitoring capabilities and reliable performance.</p>
              <a className='btn secondary' href="https://www.yafho.com/">View Yafho Products</a>
          </div>
        </div>
      </section>

      <section className="partner bg-dark">
        <h2 className='white center'>Need Critical Care Equipment?</h2>
        <h4 className='white center mb-2'>Contact our team for expert consultation and product recommendations</h4>
        <div className="btn-wrapper">
          <button className='primary' onClick={() => navigate("/contact")}><LuPhone /> Contact Us</button>
          <button className='blur' onClick={() => navigate("/services")} >Our Services</button>
        </div>
      </section>
    </div>
  )
}

export default Products
