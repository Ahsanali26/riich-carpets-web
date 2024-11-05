import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";

const Footer = function () {
  return (
    <>
      {/* <!-- FOOTER AREA START --> */}
      <footer className="ltn__footer-area  ">
        <div className="footer-top-area  section-bg-2 plr--5">
          <Container fluid>
            <Row>
              <Col xs={12} sm={6} xl={3}>
                <div className="footer-widget footer-about-widget">
                  <Link href={'/'}>
                    <div className="footer-logo">
                      <div className="site-logo">
                        {/* <img src="/img/logo.svg" alt="Logo" width="150" /> */}
                        <Image
                          src="/img/logo.svg"
                          alt="Logo"
                          width="160"
                          height="80"
                          className="img-position-inherit"
                        />
                      </div>
                    </div>
                  </Link>
                  <p>
                    Your Trusted Partner in Custom-Made Elegance
                  </p>
                  <div className="ltn__social-media mt-20">
                    <ul>
                      <li>
                        <Link href="#" title="Facebook">
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="Twitter">
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="Linkedin">
                          <FaLinkedin />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="Youtube">
                          <FaYoutube />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} xl={3}>
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Company</h4>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/shop/grid">All Products</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} xl={3}>
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Our Products</h4>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link href="/shop/hand-tufted">Hand Tufted</Link>
                      </li>
                      <li>
                        <Link href="/shop/hand-loom">Hand Loom</Link>
                      </li>
                      <li>
                        <Link href="/shop/hand-knotted">Hand Knotted</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} xl={3}>
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title last-footer-title invisible">Customer Care</h4>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link href="/shop/spc-flooring">SPC Flooring</Link>
                      </li>
                      <li>
                        <Link href="/shop/axminster">Axminster</Link>
                      </li>
                      <li>
                        <Link href="/shop/printed-nylon">Printed Nylon</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="ltn__copyright-area ltn__copyright-2 section-bg-7 plr--5 custom-footer">
          <div className="container-fluid ltn__border-top-2">
            <Row>
              <Col xs={12} md={6}>
                <div className="ltn__copyright-design clearfix">
                  <p>
                    All Rights Reserved by <b>Riich Carpets & Rugs</b>
                    <span className="current-year"></span>
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6} className="align-self-center">
                <div className="ltn__copyright-menu text-end">
                  <ul>
                    <li>
                      <Link href="terms-and-condition">Terms & Conditions</Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
      {/* <!-- FOOTER AREA END --> */}
    </>
  );
};

export default Footer;
