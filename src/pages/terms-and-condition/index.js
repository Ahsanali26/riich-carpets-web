import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import Contact from "@/components/contact";
import Link from "next/link";

function TermsAndCondition() {
  return (
    <>
      <LayoutOne topbar={false}>
        <ShopBreadCrumb
          title="Terms and Conditions"
          sectionPace=""
          currentSlug="Terms and Condition"
        />

        <Container>
          <Row>
            <Col lg={12}>
              <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                <p>
                  Welcome to Rich Carpet and Rugs! By using our website, you
                  agree to be bound by the following terms and conditions.
                </p>
                <h4 className="title-2" style={{ marginTop: "40px" }}>
                  Introduction
                </h4>
                <p>
                  These terms and conditions outline the rules and regulations
                  for using Rich Carpet and Rugs website, located at{" "}
                  <Link href={"/"}> richcarpets.com </Link> By accessing this
                  website, you accept these terms and conditions in full. Do not
                  continue to use this website if you do not agree with all the
                  terms and conditions stated here.
                </p>
                <h4 className="title-2" style={{ marginTop: "40px" }}>
                  Products and Services
                </h4>
                <p>
                  We aim to provide accurate information regarding our products,
                  including features, colors, and sizes. However, product
                  descriptions and availability are subject to change without
                  notice.
                </p>
                <h4 className="title-2" style={{ marginTop: "40px" }}>
                  Intellectual Property Rights
                </h4>
                <p>
                  Unless otherwise stated, Rich Carpet and Rugs owns the
                  intellectual property rights for all materials on this
                  website. You may view and print pages from this website for
                  personal use, subject to restrictions outlined in these terms
                  and conditions.
                </p>
                <h4 className="title-2" style={{ marginTop: "40px" }}>
                  Prohibited Uses
                </h4>
                <p>
                  You are prohibited from using the site or its content: <br />
                  For any unlawful purpose.
                  <ul>
                    <li>
                      To solicit others to perform or participate in any
                      unlawful acts.
                    </li>
                    <li>
                      To violate any international, federal, provincial, or
                      state regulations, rules, laws, or local ordinances.
                    </li>
                    <li>
                      To infringe upon or violate our intellectual property
                      rights or the intellectual property rights of others.
                    </li>
                  </ul>
                </p>
                <h4 className="title-2" style={{ marginTop: "40px" }}>
                  Returns and Refunds
                </h4>
                <p>
                  We strive to ensure your satisfaction with our products. If
                  you wish to return a product, please review our Return Policy
                  for eligibility and procedures. Items must be in original
                  condition and returned within [number of days] days.
                </p>
                <h4 className="title-2" style={{ marginTop: "40px" }}>
                  Shipping and Delivery
                </h4>
                <p>
                  We make every effort to process and ship orders promptly.
                  Shipping costs and delivery times vary depending on location
                  and the type of product ordered. We are not responsible for
                  any delays caused by third-party carriers.
                </p>
                <h4 className="title-2" style={{ marginTop: "40px" }}>
                  Privacy Policy
                </h4>
                <p>
                  Your privacy is important to us. Please review our Privacy
                  Policy for details on how we collect, use, and protect your
                  personal information.
                </p>
                <h4 className="title-2" style={{ marginTop: "40px" }}>
                  Limitation of Liability
                </h4>
                <p>
                  Rich Carpet and Rugs shall not be liable for any damages that
                  result from the use of, or the inability to use, the materials
                  on this website, even if Rich Carpet and Rugs or an authorized
                  representative has been notified of the possibility of such
                  damage.
                </p>
                <h4 className="title-2" style={{ marginTop: "40px" }}>
                  Governing Law
                </h4>
                <p>
                  These terms and conditions are governed by and construed in
                  accordance with the laws of Jurisdiction, and you submit to
                  the exclusive jurisdiction of the courts in that location.
                </p>
                <h4 className="title-2" style={{ marginTop: "40px" }}>
                  Changes to Terms and Conditions
                </h4>
                <p>
                  We reserve the right to update or change our Terms and
                  Conditions at any time. It is your responsibility to check
                  this page periodically for changes.
                </p>
                <p>
                  By using our site, you signify your acceptance of these terms
                  and conditions. If you have any questions or concerns, please
                  contact us at{" "}
                  <Link href="mailto:Info@richcarpets.com">
                    {" "}
                    Info@richcarpets.com
                  </Link>
                  .
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </LayoutOne>
    </>
  );
}

export default TermsAndCondition;
