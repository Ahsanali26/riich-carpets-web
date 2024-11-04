import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutUsSectionOne() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} lg={6} className="align-self-center">
            <div className="about-us-img-wrap about-img-left">
              <img src="/img/others/spc-flooring.jpeg" alt="Spc Flooring" />
            </div>
          </Col>
          <Col xs={12} lg={6} className="align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2--- mb-30">
                <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                  About Us
                </h6>
                <h1 className="section-title">
                  Our Commitments
                </h1>
                <p>
                At RIICH, we pride ourselves on providing exceptional value and service through our friendly, knowledgeable team. We specialize in bespoke carpets and rugs, tailored to transform your space according to your unique vision.
                </p>
              </div>
              <div className="ltn__feature-item ltn__feature-item-3">
                <div className="ltn__feature-info">
                  <h4>
                    Design
                  </h4>
                  <p>
                    We understand that your space deserves nothing but the best. That's why we stand at the forefront of design trends
                  </p>
                </div>
              </div>
              <div className="ltn__feature-item ltn__feature-item-3">
                <div className="ltn__feature-info">
                  <h4>
                    Innovation
                  </h4>
                  <p>
                    Constantly innovating to bring you breathtaking handmade carpets and rugs that transcend the ordinary.
                  </p>
                </div>
              </div>
              <div className="ltn__feature-item ltn__feature-item-3">
                <div className="ltn__feature-info">
                  <h4>
                    Sustainability
                  </h4>
                  <p>
                    Our commitment to sustainability ensures that every creation not only adds beauty to your surroundings but also aligns with eco-friendly practices.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutUsSectionOne;
