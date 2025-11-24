import './products.css'
import Hero from '../../Components/Hero/Hero'
import { LuCircleCheckBig, LuPhone } from 'react-icons/lu'
// import { criticalProducts } from '../../data/criticalproducts'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { criticalProducts } from '../../data/products'
import { useNavigate } from 'react-router-dom'

function Products() {
  const navigate = useNavigate()
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
          
          {criticalProducts.map((p, index) => (
            <ProductCard
              key={index}
              title={p.title}
              description={p.description}
              features={p.features}
              applications={p.applications}
            />
          ))}
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
