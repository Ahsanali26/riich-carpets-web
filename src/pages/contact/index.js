import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import Contact from "@/components/contact";

function ContactUs() {
  return (
    <>
      <LayoutOne topbar={false}>
        <ShopBreadCrumb
          title="Contact Us"
          sectionPace=""
          currentSlug="Contact"
        />
        <Contact />
      </LayoutOne>
    </>
  );
}

export default ContactUs;
