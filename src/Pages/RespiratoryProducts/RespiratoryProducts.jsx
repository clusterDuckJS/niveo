import React from 'react'
import './respiratory-products.css'
import Hero from '../../Components/Hero/Hero'
import SANS from '../../assets/saans.png'
import VAP from '../../assets/vap.webp'
import FETAL from '../../assets/fetal.png'
import ET from '../../assets/et_tube.webp'
import { LuCircleCheckBig, LuPhone, LuShield, LuWind } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'

function RespiratoryProducts() {
    const navigate= useNavigate()
    return (
        <div className="products main-container">
            <Hero
                tag="Respiratory Care Solutions"
                title="Respiratory Products"
                subtitle="Advanced respiratory care equipment for optimal patient outcomes and breathing support"
                background="https://media.gettyimages.com/id/1352489899/photo/doctors-checking-on-a-patient-at-the-hospital.jpg?b=1&s=2048x2048&w=0&k=20&c=6DGsiuC8aQhu0_RoATzvlkxDSQeNZ5utYeDfFl23cso="
            >
            </Hero>
            <section className="products repiratory">
                <div className="cards-container">
                    <div className="card">
                        <div className="card-wrapper">
                            <div className="img-tag-wrapper">
                                <img src={VAP} alt="" />
                            </div>
                            <div className="details-wrapper">
                                <h4 className='mb-0'>VAP CARE</h4>
                                <p className='mb-1'>World's first intelligent oral hygiene management system for ventilated patients. Assists patients who need respiratory therapy, providing controlled air or oxygen with moisture for optimal respiratory function.</p>
                                <p className='bold-5 mb-1'>Key features:</p>
                                <ul className='mb-1'>
                                    <li><LuCircleCheckBig /> Intelligent oral hygiene management</li>
                                    <li><LuCircleCheckBig /> Controlled air/oxygen with moisture</li>
                                    <li><LuCircleCheckBig /> Prevents airway dryness</li>
                                    <li><LuCircleCheckBig /> Suitable for clinical and home care</li>
                                </ul>
                                <div className="tags-container">
                                    <span className='tag primary'><small>Respiratory Therapy</small></span>
                                    <span className='tag primary'><small>ICU</small></span>
                                    <span className='tag primary'><small>Home Care</small></span>
                                    <span className='tag primary'><small>COPD</small></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-wrapper">
                            <div className="img-tag-wrapper">
                                <img src={SANS} alt="" />
                                {/* <span className='tag primary'><small>WHO Recognized</small></span> */}
                            </div>
                            <div className="details-wrapper">
                                <h4 className='mb-0'>SAANS</h4>
                                <p className='mb-1'>WHO Innovative Health Technologies non-invasive respiratory support device for neonates and pediatric patients. Combines CPAP and HFNC to manage breathing difficulties and improve oxygenation.</p>
                                <p className='bold-5 mb-1'>Key features:</p>
                                <ul className='mb-1'>
                                    <li><LuCircleCheckBig /> Combines CPAP and HFNC technology</li>
                                    <li><LuCircleCheckBig /> Non-invasive respiratory support</li>
                                    <li><LuCircleCheckBig /> Improves oxygenation and lung function</li>
                                    <li><LuCircleCheckBig /> Safer alternative to invasive ventilation</li>
                                </ul>
                                <div className="tags-container">
                                    <span className='tag primary'><small>Neonatal Care</small></span>
                                    <span className='tag primary'><small>Pediatrics</small></span>
                                    <span className='tag primary'><small>NICU</small></span>
                                    <span className='tag primary'><small>WHO Recognized</small></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-wrapper">
                            <div className="img-tag-wrapper">
                                 <img src={ET} alt="" />
                            </div>
                            <div className="details-wrapper">
                                <h4 className='mb-0'>ET Tube Holder</h4>
                                <p className='mb-1'>The Endotracheal (ET) Tube holder is an innovative device designed to provide safe, secure, and comfortable fixation of Endotracheal Tubes in intubated patients.</p>
                                <p className='bold-5 mb-1'>Key features:</p>
                                <ul className='mb-1'>
                                    <li><LuCircleCheckBig /> Prevents Accidental Extubation</li>
                                    <li><LuCircleCheckBig /> Saves time for clinicians</li>
                                    <li><LuCircleCheckBig /> Universal fit</li>
                                    <li><LuCircleCheckBig /> Better oral access</li>
                                </ul>
                                <div className="tags-container">
                                    <span className='tag  primary'><small>Critical care</small></span>
                                    <span className='tag primary'><small>Emergency medicine</small></span>
                                    <span className='tag primary'><small>Operating rooms</small></span>
                                    <span className='tag primary'><small>ICU</small></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <section className="partner bg-dark">
                <h2 className='white center'>Need Respiratory Equipment?</h2>
                <h4 className='white center mb-2'>Contact us to learn more about our respiratory care solutions and how we can support your healthcare facility</h4>
                <div className="btn-wrapper">
                    <button className='primary' onClick={() => navigate("/contact")}><LuPhone /> Contact Us</button>
                    <button className='blur' onClick={() => navigate("/products")} >View Critical Care Products</button>
                </div>
            </section>
        </div>
    )
}

export default RespiratoryProducts
