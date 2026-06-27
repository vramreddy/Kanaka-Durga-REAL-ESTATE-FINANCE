import { Container, Row, Col } from 'react-bootstrap'
import { FiTrendingUp, FiMap, FiStar, FiGlobe, FiDollarSign, FiHome } from 'react-icons/fi'
import amaravathiImg from '../assets/images/amaravathi.png'

const ADVANTAGES = [
  {
    icon: <FiTrendingUp />,
    title: 'Rapid Appreciation',
    desc: 'Property values in Amaravathi have shown consistent growth with the capital city development driving unprecedented demand.',
  },
  {
    icon: <FiMap />,
    title: 'Strategic Location',
    desc: 'Situated between Vijayawada and Guntur, Amaravathi offers excellent connectivity via road, rail, and the upcoming airport.',
  },
  {
    icon: <FiStar />,
    title: 'Government Backing',
    desc: 'As the designated capital of Andhra Pradesh, Amaravathi benefits from massive government investment in infrastructure.',
  },
  {
    icon: <FiGlobe />,
    title: 'World-Class Infrastructure',
    desc: 'Planned green city with smart infrastructure, wide roads, modern utilities, and sustainable development practices.',
  },
  {
    icon: <FiDollarSign />,
    title: 'High ROI Potential',
    desc: 'Early investors in capital region properties stand to gain significant returns as the city develops into a global hub.',
  },
  {
    icon: <FiHome />,
    title: 'Premium Living',
    desc: 'Experience a quality of life with planned townships, green spaces, educational institutions, and healthcare facilities.',
  },
]

export default function WhyAmaravathi() {
  return (
    <section className="why-amaravathi section-padding bg-offwhite" id="amaravathi">
      <Container>
        <Row className="align-items-center g-4 mb-4 mb-lg-5">
          <Col xs={12} lg={6} data-aos="fade-right">
            <span className="section-subtitle">Why Invest Here?</span>
            <h2 className="section-title">
              Amaravathi The <span>Capital Region</span>
            </h2>
            <p style={{ color: 'var(--color-dark-gray)', lineHeight: 1.8 }}>
              Amaravathi is the premier capital region of Andhra Pradesh.
              The government&apos;s vision to build a world class capital in the Guntur and Vijayawada
              region makes the Amaravathi Capital Region, Andhra Pradesh the most promising real
              estate investment destination. Invest today for a prosperous tomorrow.
            </p>
          </Col>
          <Col xs={12} lg={6} data-aos="fade-left">
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
              <img
                src={amaravathiImg}
                alt="Amaravathi Capital Region Aerial View"
                style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </Col>
        </Row>

        <Row className="g-3 g-lg-4 mt-1">
          {ADVANTAGES.map((item, i) => (
            <Col xs={12} sm={6} lg={4} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="advantage-card">
                <div className="card-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
