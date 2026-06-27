import { Container, Row, Col } from 'react-bootstrap'
import { FiMapPin, FiExternalLink } from 'react-icons/fi'
import thullurImg from '../assets/images/thullur.jpg'
import rayapudiImg from '../assets/images/rayapudi.jpg'
import mandadamImg from '../assets/images/mandadam.jpg'
import tadepalliImg from '../assets/images/tadepalli.jpg'
import velagapudiImg from '../assets/images/velagapudi.jpg'
import undavalliImg from '../assets/images/undavalli.jpg'
import nelapaduImg from '../assets/images/Nelapadu.png'

const LOCATIONS = [
  { name: 'Thullur', desc: 'Heart of Amaravathi Capital — Government district headquarters', coords: '16.5245,80.4542', image: thullurImg },
  { name: 'Rayapudi', desc: 'Prime residential area with excellent road connectivity', coords: '16.5465,80.4814', image: rayapudiImg },
  { name: 'Mandadam', desc: 'Emerging residential zone near the capital core area', coords: '16.5380,80.4650', image: mandadamImg },
  { name: 'Tadepalli', desc: 'Key commercial hub close to Vijayawada with rapid development', coords: '16.4827,80.6013', image: tadepalliImg },
  { name: 'Velagapudi', desc: 'Administrative capital — AP Secretariat and Assembly location', coords: '16.5156,80.5156', image: velagapudiImg },
  { name: 'Undavalli', desc: 'Scenic location famous for ancient caves and river views', coords: '16.4956,80.5792', image: undavalliImg },
  { name: 'Nelapadu', desc: 'Growing residential area with affordable premium plots', coords: '16.5300,80.4800', image: nelapaduImg },
]

export default function Locations() {
  return (
    <section className="section-padding" id="locations">
      <Container>
        <div className="text-center mb-4 mb-lg-5">
          <span className="section-subtitle" data-aos="fade-up">Our Presence</span>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
            Prime <span>Locations</span> We Deal In
          </h2>
          <p className="section-desc" data-aos="fade-up" data-aos-delay="200">
            Strategic plots and properties across 7 premium locations in the
            Amaravathi Capital Region each handpicked for growth potential.
          </p>
        </div>


        <Row className="g-3 g-lg-4">
          {LOCATIONS.map((loc, i) => (
            <Col xs={12} sm={6} lg={4} xl={i < 3 ? 4 : 3} key={i} data-aos="fade-up" data-aos-delay={i * 80}>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${loc.coords}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', height: '100%' }}
              >
                <div className="location-card" id={`location-${loc.name.toLowerCase()}`}>
                  <img src={loc.image} alt={`${loc.name} - Amaravathi Capital Region`} loading="lazy" />
                  <div className="location-info">
                    <h4><FiMapPin style={{ marginRight: 6 }} />{loc.name}</h4>
                    <p>{loc.desc}</p>
                    <small style={{ color: 'var(--color-gold)', display: 'flex', alignItems: 'center', gap: 4, marginTop: 8 }}>
                      View on Maps <FiExternalLink />
                    </small>
                  </div>
                </div>
              </a>
            </Col>
          ))}
        </Row>

        {/* Embedded Map */}
        <div className="map-container mt-4 mt-lg-5" data-aos="fade-up">
          <iframe
            title="Kanaka Durga Real Estate Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61168.35!2d80.45!3d16.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e5a1b2c3d4e5%3A0xabc123!2sAmaravati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </section>
  )
}
