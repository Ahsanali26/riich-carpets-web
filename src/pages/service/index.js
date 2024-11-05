import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { getProducts } from "@/lib/product";
import TitleSection from "@/components/titleSection";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import Feature from "@/components/features";
import featureData from "@/data/service"

function Service() {
  const services = getProducts(featureData, "buying", "featured", 6);

  return (
    <>
      <LayoutOne topbar={false}>
        <ShopBreadCrumb
          title="What We Do"
          sectionPace=""
          currentSlug="Service"
        />

        <Feature
          classes="section-bg-1"
          servicebtn={false}
          iconTag={true}
          headingClasses="section-subtitle-2"
          data={services}
          titleSectionData={{
            sectionClasses: "text-center",
            subTitle: "Our Services",
            title: "Our Core Services",
          }}
        />


        {/* <!-- BLOG AREA START (blog-3) -->  */}
        <div className="ltn__blog-area pt-120 pb-70">
          <Container>
            <Row>
              <Col lg={12}>
                <TitleSection
                  sectionClasses="text-center"
                  headingClasses="section-subtitle-2"
                  titleSectionData={{
                    subTitle: "News & Blogs",
                    title: "Leatest News Feeds",
                  }}
                />
              </Col>
            </Row>
          </Container>
        </div>
        {/* <!-- BLOG AREA END --> */}

        <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
          <Container>
            <Row>
              <Col xs={12}>
                <CallToAction />
              </Col>
            </Row>
          </Container>
        </div>
      </LayoutOne>
    </>
  );
}

export default Service;
