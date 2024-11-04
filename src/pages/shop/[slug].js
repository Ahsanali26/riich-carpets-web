import Link from "next/link";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import BreadCrumb from "@/components/breadCrumbs";

import { LayoutOne } from "@/layouts";
import { productSlug } from "@/lib/product";
import products from "@/data/products.json";
import { Container, Row, Col, Accordion } from "react-bootstrap";

function ProductDetails({ product }) {
  const idealSettingsEntries = Object.entries(product.idealSettings);
  const midIndex = Math.ceil(idealSettingsEntries.length / 2);
  const firstColumnItems = idealSettingsEntries.slice(0, midIndex);
  const secondColumnItems = idealSettingsEntries.slice(midIndex);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <FaArrowLeft />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <FaArrowRight />
    </button>
  );
  const productDetailsCarouselSettings = {
    centerMode: true,
    infinite: true,
    centerPadding: "450px",
    slidesToShow: 1,
    dots: false,
    speed: 500,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <LayoutOne topbar={false}>
        {/* <!-- BREADCRUMB AREA START --> */}
        <BreadCrumb
          title={product.title}
          sectionPace="mb-0"
          currentSlug={product.title}
        />
        {/* <!-- BREADCRUMB AREA END --> */}

        {/* <!-- IMAGE SLIDER AREA START (img-slider-3) --> */}
        <div className="ltn__img-slider-area mb-90">
          <Container fluid className="px-0">
            <Slider
              {...productDetailsCarouselSettings}
              className="ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner"
            >
              {product.carousel.map((single, key) => {
                return (
                  <div className="ltn__img-slide-item-4" key={key}>
                    <Link href="#">
                      <img
                        src={`/img/product-3/${single.img}`}
                        alt={`${single.title}`}
                      />
                    </Link>
                  </div>
                );
              })}
            </Slider>
          </Container>
        </div>
        {/* <!-- IMAGE SLIDER AREA END -->

      <!-- SHOP DETAILS AREA START --> */}
        <div className="ltn__shop-details-area pb-10">
          <Container>
            <Row>
              <Col xs={12} lg={12}>
                <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                  <h1> {product.title}</h1>
                  <h4 className="title-2" style={{ marginTop: "40px" }}>
                    {" "}
                    {product.description.title}
                  </h4>
                  <p>{product.description.fullDescription}</p>
                  <p>{product.description.shortDescription}</p>

                  {idealSettingsEntries.length > 0 && (
                    <>
                      <h4
                        className="title-2"
                        style={{ marginBottom: "10px", marginTop: "40px" }}
                      >
                        Ideal settings
                      </h4>
                      <div className="ltn__faq-inner ltn__faq-inner-2 ltn__faq-inner-3">
                        <Row>
                          {/* First Column */}
                          <Col xs={12} lg={6}>
                            <Accordion>
                              {firstColumnItems.map(
                                ([key, description], index) => (
                                  <Accordion.Item
                                    eventKey={index.toString()}
                                    className="card"
                                    key={key}
                                  >
                                    <Accordion.Header className="ltn__card-title">
                                      {key}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      <p>{description}</p>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                )
                              )}
                            </Accordion>
                          </Col>

                          {/* Second Column */}
                          <Col xs={12} lg={6}>
                            <Accordion>
                              {secondColumnItems.map(
                                ([key, description], index) => (
                                  <Accordion.Item
                                    eventKey={index.toString()}
                                    className="card"
                                    key={key}
                                  >
                                    <Accordion.Header className="ltn__card-title">
                                      {key}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      <p>{description}</p>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                )
                              )}
                            </Accordion>
                          </Col>
                        </Row>
                      </div>
                    </>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </LayoutOne>
    </>
  );
}

export default ProductDetails;

export async function getStaticProps({ params }) {
  // get product data based on slug
  const product = products.filter(
    (single) => productSlug(single.title) === params.slug
  )[0];

  return { props: { product } };
}

export async function getStaticPaths() {
  // get the paths we want to pre render based on products
  const paths = products.map((product) => ({
    params: { slug: productSlug(product.title) },
  }));

  return { paths, fallback: false };
}
