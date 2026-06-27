import { Container, Row, Col } from 'react-bootstrap'
import { FiMapPin, FiMaximize, FiLayers, FiArrowRight } from 'react-icons/fi'
import propertyImg from '../assets/images/property-plot.png'

const PROPERTIES = [
  { title: 'Premium Residential Plot', location: 'Thullur', type: 'Residential Plot', size: '200 Sq. Yards', facing: 'East Facing', price: '₹35 Lakhs', priceSuffix: 'onwards', badge: 'Hot Selling' },
  { title: 'Capital View Plots', location: 'Velagapudi', type: 'Residential Plot', size: '250 Sq. Yards', facing: 'North Facing', price: '₹45 Lakhs', priceSuffix: 'onwards', badge: 'Featured' },
  { title: 'Riverside Premium Plot', location: 'Undavalli', type: 'Residential Plot', size: '300 Sq. Yards', facing: 'South Facing', price: '₹55 Lakhs', priceSuffix: 'onwards', badge: 'Premium' },
  { title: 'Amaravathi Core Plot', location: 'Rayapudi', type: 'Residential Plot', size: '167 Sq. Yards', facing: 'West Facing', price: '₹28 Lakhs', priceSuffix: 'onwards', badge: 'Best Value' },
  { title: 'Commercial Venture Plot', location: 'Tadepalli', type: 'Commercial Plot', size: '500 Sq. Yards', facing: 'Road Facing', price: '₹1.2 Cr', priceSuffix: 'onwards', badge: 'Commercial' },
  { title: 'Farm House Plot', location: 'Mandadam', type: 'Agricultural Plot', size: '1 Acre', facing: 'Multi Facing', price: '₹80 Lakhs', priceSuffix: 'onwards', badge: 'New Launch' },
]

export default function Properties({ onEnquiry }) {
  return (
    <section className="section-padding bg-offwhite" id="properties">
      <Container>
        <div className="text-center mb-4 mb-lg-5">
          <span className="section-subtitle" data-aos="fade-up">Featured Listings</span>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
            Explore Our <span>Properties</span>
          </h2>
          <p className="section-desc" data-aos="fade-up" data-aos-delay="200">
            Handpicked premium plots and properties across the Amaravathi Capital
            Region. Every property is legally verified and ready for development.
          </p>
        </div>

        <Row className="g-3 g-lg-4">
          {PROPERTIES.map((prop, i) => (
            <Col xs={12} sm={6} lg={4} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="property-card" id={`property-${i}`}>
                <div className="property-img">
                  <img src={propertyImg} alt={prop.title} loading="lazy" />
                  <div className="property-badge">{prop.badge}</div>
                </div>
                <div className="property-body">
                  <h5 className="property-title">{prop.title}</h5>
                  <div className="property-location">
                    <FiMapPin className="icon" /> {prop.location}, Amaravathi
                  </div>
                  <div className="property-features">
                    <div className="property-feature">
                      <FiMaximize className="icon" /> {prop.size}
                    </div>
                    <div className="property-feature">
                      <FiLayers className="icon" /> {prop.type}
                    </div>
                  </div>
                  {/* <div className="property-price mb-3">
                    {prop.price} <small>{prop.priceSuffix}</small>
                  </div> */}
                  <button
                    className="btn-gold w-100 d-inline-flex justify-content-center align-items-center gap-2"
                    style={{ padding: '11px 20px', fontSize: '0.88rem' }}
                    onClick={onEnquiry}
                  >
                    Enquire Now <FiArrowRight />
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
