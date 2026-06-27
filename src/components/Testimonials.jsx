import { Container, Row, Col } from 'react-bootstrap'
import { FiStar } from 'react-icons/fi'

const TESTIMONIALS = [
  {
    name: 'Srinivas Rao', role: 'Investor, Hyderabad', initials: 'SR', rating: 5,
    text: 'I invested in a plot at Thullur through Kanaka Durga Real Estate and the value has already appreciated significantly. Nagaraju garu guided me through every step. Highly trustworthy!',
  },
  {
    name: 'Lakshmi Prasanna', role: 'Homeowner, Vijayawada', initials: 'LP', rating: 5,
    text: 'The transparency and honesty of Kanaka Durga Real Estate is unmatched. They helped us find the perfect plot in Velagapudi and handled all the documentation flawlessly.',
  },
  {
    name: 'Ramesh Kumar', role: 'NRI Investor, USA', initials: 'RK', rating: 5,
    text: 'Being an NRI, I was skeptical about investing remotely. But Nagaraju and his team made the entire process seamless. My plot in Rayapudi is a great investment for the future.',
  },
  {
    name: 'Padmavathi Devi', role: 'Resident, Guntur', initials: 'PD', rating: 5,
    text: 'We built our dream home through Kanaka Durga Real Estate. The construction quality is excellent and they completed the project on time. Very professional team.',
  },
  {
    name: 'Venkata Suresh', role: 'Business Owner, Amaravathi', initials: 'VS', rating: 5,
    text: 'Kanaka Durga Real Estate is the most reliable name in the Amaravathi region. I have purchased multiple plots through them over the years and every experience has been fantastic.',
  },
  {
    name: 'Anjali Reddy', role: 'Investor, Bangalore', initials: 'AR', rating: 4,
    text: 'Great experience investing in Amaravathi through Kanaka Durga Real Estate. The plots are well-located and legally clear. The team is very responsive and helpful.',
  },
]

function TestimonialCard({ t }) {
  return (
    <div className="testimonial-card">
      <div className="quote-icon">&ldquo;</div>
      <div className="stars">
        {[...Array(t.rating)].map((_, j) => (
          <FiStar key={j} style={{ fill: 'var(--color-gold)', marginRight: 2 }} />
        ))}
      </div>
      <p className="testimonial-text">{t.text}</p>
      <div className="testimonial-author">
        <div className="author-avatar">{t.initials}</div>
        <div>
          <div className="author-name">{t.name}</div>
          <div className="author-role">{t.role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section-padding" id="testimonials">
      <Container>
        <div className="text-center mb-4 mb-lg-5">
          <span className="section-subtitle" data-aos="fade-up">Client Stories</span>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
            What Our <span>Clients</span> Say
          </h2>
          <p className="section-desc" data-aos="fade-up" data-aos-delay="200">
            Don&apos;t just take our word for it hear from our satisfied clients
            who have trusted us with their real estate investments.
          </p>
        </div>


        <Row className="g-3 g-lg-4">
          {TESTIMONIALS.map((t, i) => (
            <Col xs={12} sm={6} md={4} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <TestimonialCard t={t} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
