import Link from "next/link";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import BreadCrumb from "@/components/breadCrumbs";
import { LayoutOne } from "@/layouts";
import { productSlug } from "@/lib/product";
import products from "@/data/products.json";
import { Container } from "react-bootstrap";

function ProductDetails({ product }) {
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
          <Container fluid>
            <Slider
              {...productDetailsCarouselSettings}
              className="row ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all g-0"
            >
              {product.carousel.map((single, key) => {
                return (
                  <div className="col-lg-12" key={key}>
                    <div className="ltn__img-slide-item-4">
                      <Link href="#?">
                        <img
                          src={`/img/product-3/${single.img}`}
                          alt={`${single.title}`}
                        />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </Container>
        </div>

        <div className="ltn__shop-details-area pb-10">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                  <h1> {product.title}</h1>
                  <h4 className="title-2"> {product.description.title}</h4>
                  <p>{product.description.fullDescription}</p>
                  <p>{product.description.shortDescription}</p>
                </div>
              </div>
            </div>
          </div>
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
