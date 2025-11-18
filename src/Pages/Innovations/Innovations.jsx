import './innovations.css'
import Hero from '../../Components/Hero/Hero'
import { LuCircleCheckBig, LuHeart, LuPhone, LuWind } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom';

function Innovations() {
  const navigate = useNavigate();
  return (
    <div className="innovation main-container">
      <Hero
        tag="Advanced Healthcare Innovations"
        title="Niveohealthcare Private Limited"
        subtitle="Cutting-edge medical devices from Innaccel - WHO recognized and award-winning solutions"
        background="https://media.gettyimages.com/id/2178146294/photo/health-engineer-bioprinting-models-at-a-3d-laboratory.jpg?b=1&s=2048x2048&w=0&k=20&c=QxxuxkKkse3kFs6PUvffG2NYT41r1L9yDBywfenLehU="
      >
      </Hero>

      <section className="featured">
        <h2>Featured Innovations</h2>
        <h4>World-class medical technology designed to improve patient outcomes and healthcare delivery</h4>
        <div className="innovations-wrapper">
          <div className="card">
            <div className="heading-wrapper">
              <div className="svg-wrapper">
                <LuWind size={36} />
              </div>
              <div className="heading-text-wrapper">
                <h4>VAP CARE</h4>
                <span className='tag'><small>World's First</small></span>
              </div>
            </div>
            <h6>World's first intelligent oral hygiene management system for ventilated patients</h6>
            <p>VapCare is a high-tech medical device that assists patients who need respiratory therapy. It is applied in clinical settings or for home care to treat chronic respiratory diseases such as asthma, COPD, or post-surgical recovery. It maintains optimal respiratory function by providing controlled air or oxygen with moisture, which is necessary for easy breathing and prevention of airway dryness.</p>
            <p>Key benefits:</p>
            <ul>
              <li><LuCircleCheckBig /> Intelligent oral hygiene management</li>
              <li><LuCircleCheckBig /> Controlled air/oxygen with moisture</li>
              <li><LuCircleCheckBig /> Prevents airway dryness</li>
              <li><LuCircleCheckBig /> Suitable for clinical and home care</li>
            </ul>
            <div className="tags-container">
              <span className='tag'><small>Respiratory Therapy</small></span>
              <span className='tag'><small>ICU</small></span>
              <span className='tag'><small>Home Care</small></span>
              <span className='tag'><small>COPD</small></span>
            </div>
            <div className="img-tag-wrapper">
              <img src="https://media.gettyimages.com/id/2177759074/photo/close-up-of-a-female-nurse-helping-a-woman-with-breathing-problems.jpg?b=1&s=2048x2048&w=0&k=20&c=pby1KA6dBTRm17mGVf9FGyLPvUNlV2X_5uCuqET017Q=" alt="" />
              <span className='tag'><small>World's First Intelligent System</small></span>
            </div>
          </div>

          <div className="card">
            <div className="heading-wrapper">
              <div className="svg-wrapper">
                <LuHeart size={36} />
              </div>
              <div className="heading-text-wrapper">
                <h4>SAANS</h4>
                <span className='tag'><small>WHO Innovative Health Technologies</small></span>
              </div>
            </div>
            <h6>Non-invasive respiratory support for neonates and pediatric patients</h6>
            <p>VSAANS is a non-invasive respiratory support device for neonates and pediatric patients, combining CPAP and HFNC to manage breathing difficulties, improve oxygenation, and enhance lung function. It offers a safer, more comfortable alternative to invasive ventilation, supporting better clinical outcomes for infants and young children.</p>
            <p>Key benefits:</p>
            <ul>
              <li><LuCircleCheckBig /> Combines CPAP and HFNC technology</li>
              <li><LuCircleCheckBig /> Non-invasive respiratory support</li>
              <li><LuCircleCheckBig /> Improves oxygenation and lung function</li>
              <li><LuCircleCheckBig /> Safer alternative to invasive ventilation</li>
            </ul>
            <div className="tags-container">
              <span className='tag'><small>Neonatal Care</small></span>
              <span className='tag'><small>Pediatrics</small></span>
              <span className='tag'><small>NICU</small></span>
              <span className='tag'><small>WHO Recognized</small></span>
            </div>
            <div className="img-tag-wrapper">
              <img src="https://media.gettyimages.com/id/2204423732/photo/blue-uv-light-therapy-in-the-nicu.jpg?b=1&s=2048x2048&w=0&k=20&c=UPJ_Hd6kUXUjitd5FhFiZtsfSYfo7jva2DbCXXLT4q4=" alt="" />
              <span className='tag'><small>WHO Recognized</small></span>
            </div>
          </div>

          <div className="card">
            <div className="heading-wrapper">
              <div className="svg-wrapper">
                <LuHeart size={36} />
              </div>
              <div className="heading-text-wrapper">
                <h4>FETAL LITE</h4>
                <span className='tag'><small>Advanced Monitoring</small></span>
              </div>
            </div>
            <h6>A superior labour monitoring experience for you and your patients</h6>
            <p>The Fetal Lite is an advanced, portable, and user-friendly fetal monitoring system for use in clinical and homecare settings. It continuously and non-invasively monitors the fetal heart rate and maternal well-being, ensuring maximum safety and care during pregnancy. It is especially useful in monitoring fetal health in cases of high-risk pregnancies, labor, or routine check-ups.</p>
            <p>Key benefits:</p>
            <ul>
              <li><LuCircleCheckBig /> Portable and user-friendly design</li>
              <li><LuCircleCheckBig /> Continuous fetal heart rate monitoring</li>
              <li><LuCircleCheckBig /> Non-invasive maternal monitoring</li>
              <li><LuCircleCheckBig /> Suitable for clinical and home use</li>
            </ul>
            <div className="tags-container">
              <span className='tag'><small>Fetal Monitoring</small></span>
              <span className='tag'><small>Maternity Care</small></span>
              <span className='tag'><small>High-Risk Pregnancy</small></span>
              <span className='tag'><small>Labor Monitoring</small></span>
            </div>
            <div className="img-tag-wrapper">
              <img src="https://media.gettyimages.com/id/1495378388/photo/prenatal-check-up.jpg?b=1&s=2048x2048&w=0&k=20&c=wpAy7n2_pgYHmvv2_c0slqfjcxVjAH7f07SDOvhHSo0=" alt="" />
              <span className='tag'><small>Superior Labour Monitoring</small></span>
            </div>
          </div>
        </div>
      </section>
      <section className="dealer">
        <div className="svg-wrapper">
          <LuCircleCheckBig size={48} />
        </div>
        <h2>Authorized Innaccel Dealer</h2>
        <p>We are proud to be an authorized dealer for Innaccel, bringing you world-class innovative medical technology that has been recognized by WHO and won numerous awards for excellence in healthcare innovation.</p>
      <div className="btn-wrapper">
        <a href="https://www.innaccel.com" target="_blank" rel="noopener noreferrer">Visit Innaccel Website</a>
        <button onClick={()=>navigate()}><LuPhone />Contact us</button>
      </div>
      </section>
    <section className="interested">
      <h2>Interested in These Innovations?</h2>
      <p>Contact our team to learn more about these cutting-edge medical devices</p>
        <div className="btn-wrapper">
        <button onClick={()=>navigate('/contact')}><LuPhone />Contact us</button>
        <button onClick={()=>navigate('/products')}>View All Products</button>
      </div>
    </section>
    </div>
  )
}

export default Innovations
