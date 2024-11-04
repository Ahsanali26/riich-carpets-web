import { useSelector } from "react-redux";
import { getProducts, productSlug } from "@/lib/product";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { LayoutOne } from "@/layouts";
import HeroSectionStyleTwo from "@/components/hero/styleTwo";
import heroData from "@/data/hero/index-two.json";
import AboutUsSectionOne from "@/components/aboutUs/aboutUsSectionOne";
import PropertyItem from "@/components/product/properties";

function HomePage(props) {
  const { products } = useSelector((state) => state.product);
  const countryProducts = getProducts(products, "buying", "country", 10);
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

  const productsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <LayoutOne topbar={false}>
        {/* <!-- SLIDER AREA START (slider-11) --> */}
        <div className="ltn__slider-area ltn__slider-11 section-bg-1">
          <HeroSectionStyleTwo data={heroData} />
        </div>
        {/* <!-- SLIDER AREA END -->

        <!-- ABOUT US AREA START --> */}
        <div className="ltn__about-us-area pt-115 pb-100 ">
          <AboutUsSectionOne />
        </div>

        <div className="ltn__search-by-place-area before-bg-top pt-115 pb-70">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="section-title-area">
                  <h6 className="section-subtitle ltn__secondary-color">
                    Our Products
                  </h6>
                  <h1 className="section-title">Find Your Carpets</h1>
                </div>
              </Col>
            </Row>

            {!!countryProducts?.length ? (
              <Slider
                {...productsettings}
                className="ltn__product-slider-item-four-active-full-width slick-arrow-1"
              >
                {countryProducts.map((product, key) => {
                  const slug = productSlug(product.title);

                  return (
                    <PropertyItem
                      key={key}
                      product={product}
                      slug={slug}
                      baseUrl="/shop"
                    />
                  );
                })}
              </Slider>
            ) : null}
          </Container>
        </div>
      </LayoutOne>
    </>
  );
}

// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), "src/data/hero/", "index.json");
//   const Herodata = JSON.parse(await fs.readFile(filePath));

//   return {
//     props: {
//       Herodata,
//     },
//   };
// }

export default HomePage;
