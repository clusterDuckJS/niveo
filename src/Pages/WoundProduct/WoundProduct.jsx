import { LuDroplets, LuPhone, LuShield, LuSparkles, LuWind } from 'react-icons/lu'
import './wound-product.css'
import Hero from '../../Components/Hero/Hero'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { catheters, covers, otherProducts, woundProduct } from '../../data/products'
import { useNavigate } from 'react-router-dom'


function WoundProduct() {
    const navigate = useNavigate()
    return (
        <div className="products main-container">
            <Hero
                tag="Yafho Medical Products"
                title="Wound Care & Medical Supplies"
                subtitle="Comprehensive range of advanced wound care products, fixation dressings, and medical supplies from Yafho - trusted solutions for optimal patient care and infection control."
                background="https://media.gettyimages.com/id/1352489899/photo/doctors-checking-on-a-patient-at-the-hospital.jpg?b=1&s=2048x2048&w=0&k=20&c=6DGsiuC8aQhu0_RoATzvlkxDSQeNZ5utYeDfFl23cso="
            >
            </Hero>
            <section className="products wound-products">
                <div className="heading-wrapper flex align-center gp-1 mb-1">
                    <div className="svg-wrapper md">
                        <LuShield />
                    </div>
                    <h3 className='center bold-5'>Wound Management</h3>
                </div>
                <div className="cards-wrapper">
                    {woundProduct.map((p, index) => (
                        <ProductCard
                            key={index}
                            title={p.title}
                            description={p.description}
                            features={p.features}
                            applications={p.applications}
                        />
                    ))}
                </div>
                <div className="heading-wrapper flex align-center gp-1 mb-1 mt-3">
                    <div className="svg-wrapper md">
                        <LuDroplets />
                    </div>
                    <h3 className='center bold-5'>Fixation Dressing</h3>
                </div>
                <div className="cards-wrapper">
                    {catheters.map((p, index) => (
                        <ProductCard
                            key={index}
                            title={p.title}
                            description={p.description}
                            features={p.features}
                            applications={p.applications}
                        />
                    ))}
                </div>

                <div className="heading-wrapper flex align-center gp-1 mb-1 mt-3">
                    <div className="svg-wrapper md">
                        <LuWind />
                    </div>
                    <h3 className='center bold-5'>Instrument Cover</h3>
                </div>
                <div className="cards-wrapper">
                    {covers.map((p, index) => (
                        <ProductCard
                            key={index}
                            title={p.title}
                            description={p.description}
                            features={p.features}
                            applications={p.applications}
                        />
                    ))}
                </div>

                <div className="heading-wrapper flex align-center gp-1 mb-1 mt-3">
                    <div className="svg-wrapper md">
                        <LuSparkles />
                    </div>
                    <h3 className='center bold-5'>Other Products</h3>
                </div>
                <div className="cards-wrapper">
                    {otherProducts.map((p, index) => (
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

            <section className="partner bg-dark">
                <h2 className='white center'>Need Help Choosing the Right Products?</h2>
                <h4 className='white center mb-2'>Our team of experts is ready to help you select the best wound care and medical supplies for your facility.</h4>
                <div className="btn-wrapper">
                    <button className='primary' onClick={() => navigate("/contact")}><LuPhone /> Contact Us</button>
                    <button className='blur' onClick={() => navigate("/services")} >Our Services</button>
                </div>
            </section>
        </div>
    )
}

export default WoundProduct
